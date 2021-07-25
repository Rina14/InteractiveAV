namespace AV {
  // window.addEventListener("load", init);
  export class DezibelMeter {
    public static isOn: boolean = true;

    public static activateDecibelMeter(): void {
      DezibelMeter.isOn = true;
      document.getElementById("avg-level").hidden = false;
      document.getElementById("avg-level-text").hidden = false;
      document.getElementById("dB").hidden = false; 
      DezibelMeter.dezibelMeter();   
    }

    public static deactivateDecibelMeter(): void {
      DezibelMeter.isOn = false;
      document.getElementById("avg-level").hidden = true;
      document.getElementById("avg-level-text").hidden = true;
      document.getElementById("dB").hidden = true;  
    }

    public static dezibelMeter(): void {
      navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        .then(function (stream: MediaStream): void {
          const context: AudioContext = new AudioContext();
          let analyser: AnalyserNode = context.createAnalyser();
          const source: MediaStreamAudioSourceNode = context.createMediaStreamSource(stream);
          source.connect(analyser);
          // Damit man sich nicht selbst hört
          // source.connect(context.destination);
          // let audio: HTMLAudioElement = <HTMLAudioElement> document.getElementById("player");
          // audio.srcObject = stream;
          analyser.minDecibels = -120;
          analyser.fftSize = 1024;
          const sampleBuffer = new Float32Array(analyser.fftSize);

          function loop(): void {
            analyser.getFloatFrequencyData(sampleBuffer);
            let average: number = 0;
            for (let i = 0; i < sampleBuffer.length; i++) {
              average += sampleBuffer[i];
            }
            let finalAverage: number = average / sampleBuffer.length - analyser.minDecibels;
            // Display value.
            displayNumber("avg", finalAverage);
            if (DezibelMeter.isOn) {
              requestAnimationFrame(loop);
            }
          }

          function displayNumber(id: string, value: number): void {
            const meter: HTMLMeterElement = <HTMLMeterElement>document.getElementById(id + "-level");
            const text = document.getElementById(id + "-level-text");
            text.textContent = value.toFixed(2);
            meter.value = isFinite(value) ? value : meter.min;
          }
          loop();
        })
        //@ts-ignore
        .catch(function (err: Error): void {
          //@ts-ignore
        });
    }
    

  }

}