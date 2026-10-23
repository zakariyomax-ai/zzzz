// Web Audio API pure procedural ocean soundscape generator
// No external mp3 files needed; runs natively, smoothly, and offline in all browsers.

class OceanSoundscape {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private waveGain: GainNode | null = null;
  private windGain: GainNode | null = null;
  private lfo: OscillatorNode | null = null;
  private lfo2: OscillatorNode | null = null;
  private waveBufferSource: AudioBufferSourceNode | null = null;
  private windBufferSource: AudioBufferSourceNode | null = null;
  private volume: number = 0.5;

  private createPinkNoiseBuffer(ctx: AudioContext, seconds: number = 5): AudioBuffer {
    const bufferSize = ctx.sampleRate * seconds;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  public init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioContextClass();
  }

  public async start() {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    if (this.isPlaying) return;

    const ctx = this.ctx;
    this.masterGain = ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume, ctx.currentTime);
    this.masterGain.connect(ctx.destination);

    // 1. Ocean Waves Generator using modulated Pink Noise
    const waveBuffer = this.createPinkNoiseBuffer(ctx, 10);
    this.waveBufferSource = ctx.createBufferSource();
    this.waveBufferSource.buffer = waveBuffer;
    this.waveBufferSource.loop = true;

    // Filter for wave body (low pass filter modulated by LFO)
    const waveFilter = ctx.createBiquadFilter();
    waveFilter.type = 'lowpass';
    waveFilter.frequency.setValueAtTime(280, ctx.currentTime);
    waveFilter.Q.setValueAtTime(3, ctx.currentTime);

    // Wave swell gain modulated by slow LFO (~0.12 Hz, i.e. wave every 8 seconds)
    this.waveGain = ctx.createGain();
    this.waveGain.gain.setValueAtTime(0.08, ctx.currentTime);

    // LFO for surf rhythm
    this.lfo = ctx.createOscillator();
    this.lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // Wave period: ~8.3s
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(0.28, ctx.currentTime);
    this.lfo.connect(lfoGain);
    lfoGain.connect(this.waveGain.gain);

    // Filter modulation to mimic wave foam cresting
    const lfoFilterGain = ctx.createGain();
    lfoFilterGain.gain.setValueAtTime(450, ctx.currentTime);
    this.lfo.connect(lfoFilterGain);
    lfoFilterGain.connect(waveFilter.frequency);

    this.waveBufferSource.connect(waveFilter);
    waveFilter.connect(this.waveGain);
    this.waveGain.connect(this.masterGain);

    // 2. Coastal Breeze / Deep Ocean Wind
    const windBuffer = this.createPinkNoiseBuffer(ctx, 8);
    this.windBufferSource = ctx.createBufferSource();
    this.windBufferSource.buffer = windBuffer;
    this.windBufferSource.loop = true;

    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.setValueAtTime(400, ctx.currentTime);
    windFilter.Q.setValueAtTime(1.8, ctx.currentTime);

    this.windGain = ctx.createGain();
    this.windGain.gain.setValueAtTime(0.04, ctx.currentTime);

    // Slower wind LFO
    this.lfo2 = ctx.createOscillator();
    this.lfo2.frequency.setValueAtTime(0.05, ctx.currentTime); // ~20s cycle
    const windLfoGain = ctx.createGain();
    windLfoGain.gain.setValueAtTime(0.03, ctx.currentTime);
    this.lfo2.connect(windLfoGain);
    windLfoGain.connect(this.windGain.gain);

    this.windBufferSource.connect(windFilter);
    windFilter.connect(this.windGain);
    this.windGain.connect(this.masterGain);

    // Start all nodes
    this.waveBufferSource.start();
    this.windBufferSource.start();
    this.lfo.start();
    this.lfo2.start();

    this.isPlaying = true;
  }

  public stop() {
    if (!this.isPlaying || !this.ctx) return;
    try {
      this.waveBufferSource?.stop();
      this.windBufferSource?.stop();
      this.lfo?.stop();
      this.lfo2?.stop();
    } catch {
      // ignore
    }
    this.isPlaying = false;
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getVolume(): number {
    return this.volume;
  }
}

export const oceanSound = new OceanSoundscape();
