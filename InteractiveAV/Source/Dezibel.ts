namespace AV {
  // window.addEventListener("load", init);

  export function dezibelMeter(): void {
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
          requestAnimationFrame(loop);
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