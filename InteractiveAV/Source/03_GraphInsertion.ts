namespace AV {
  export async function GraphInsertion(): ƒS.SceneReturn {
    console.log("Start Graph Insertion");

    let cmpAudio: ƒ.ComponentAudio;
    let distortion: WaveShaperNode = ƒ.AudioManager.default.createWaveShaper();
    let audioBeep: ƒ.Audio;
    let audioUfo: ƒ.Audio;

    let text = {
      // Narrator: {
      //   T0000: "<i></i>",
      //   T0001: "<i></i>",
      //   T0002: "<i> </i>"
      // },
      Adelinde: {
        T0000: "Test undso "
      }
    };


    // Audio in 2D-Welt, Knoten hinter der 2D-Welt platzieren

    // ƒS.Sound.fade(sound.again, 0, 1);

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.festivalC);
    await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positionPercent(60, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0000);
    enableAudioTest();
    await ƒS.Speech.tell(characters.Adelinde, "1");
    await ƒS.Speech.tell(characters.Adelinde, "2");
    await ƒS.Speech.tell(characters.Adelinde, "3");
    await ƒS.Speech.tell(characters.Adelinde, "4");
    await ƒS.Speech.tell(characters.Adelinde, "5");
    await ƒS.Speech.tell(characters.Adelinde, "6");
    await ƒS.Speech.tell(characters.Adelinde, "7");
    await ƒS.Speech.tell(characters.Adelinde, "8");
    await ƒS.Speech.tell(characters.Adelinde, "9");
    await ƒS.Speech.tell(characters.Adelinde, "10");

    disableAudioTest();






    // Audio test function

    async function enableAudioTest(): Promise<void> {
      window.addEventListener("keydown", handleKeydownForAudio);
      audioBeep = new ƒ.Audio(sound.cutie);
      // await audioBeep.asyncLoad("Sound/Beep.mp3")
      audioUfo = new ƒ.Audio(sound.pinch);
      // await audioUfo.asyncLoad("Sound/Beat.mp3")
      cmpAudio = new ƒ.ComponentAudio(audioBeep, false, false);
      cmpAudio.connect(true);
      cmpAudio.volume = 30;

      function makeDistortionCurve(amount: number = 50): Float32Array {
        let samples: number = 44100;
        let curve: Float32Array = new Float32Array(samples);
        let deg: number = Math.PI / 180;
        let x: number;
        for (let i: number = 0; i < samples; ++i) {
          x = i * 2 / samples - 1;
          curve[i] = (3 + amount) * x * 20 * deg / (Math.PI + amount * Math.abs(x));
        }
        return curve;
      }

      distortion.curve = makeDistortionCurve(400);
      distortion.oversample = "4x";
    }

    // document.addEventListener("keydown", handleKeydownForAudio);
    function handleKeydownForAudio(_event: KeyboardEvent): void {
      switch (_event.code) {
        case ƒ.KEYBOARD_CODE.ENTER:
          ƒ.Debug.log("Play");
          cmpAudio.play(true);
          break;
        case ƒ.KEYBOARD_CODE.ARROW_UP:
          ƒ.Debug.log("Insert");
          cmpAudio.insertAudioNodes(distortion, distortion);
          break;
        case ƒ.KEYBOARD_CODE.ARROW_DOWN:
          ƒ.Debug.log("Remove");
          cmpAudio.insertAudioNodes(null, null);
          break;
        case ƒ.KEYBOARD_CODE.ARROW_LEFT:
          ƒ.Debug.log("Beep");
          cmpAudio.setAudio(audioBeep);
          break;
        case ƒ.KEYBOARD_CODE.ARROW_RIGHT:
          ƒ.Debug.log("Ufo");
          cmpAudio.setAudio(audioUfo);
          break;
      }
    }

    function disableAudioTest(): void {
      window.removeEventListener("keydown", handleKeydownForAudio);
      console.log("Audio Test disabled");
    }

  }
}
