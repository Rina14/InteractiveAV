/// <reference types="../../Aid/Build/FudgeAid"/>

namespace AV {
  export async function Premiere(): ƒS.SceneReturn {
    console.log("Start Premiere Scene");

    let text = {
      Narrator: {
        T0000: "<i>Wenn man vom Teufel spricht...</i>",
        T0001: "<i>Naja egal, mehr oder weniger habe ich die beiden verstanden, glaube ich.</i>",
        T0002: "<i>Es geht jetzt aber endlich los!</i>",
        T0003: "<i>Ich verstehe zwar kein Wort von den anderen, aber genieße dann einfach trotzdem mal stumm die Show.</i>",
        T0004: "<i>Ich muss aber gestehen, dass das wirklich blöd ist, dass ich ab jetzt kaum mehr mitreden kann. Vor allem in solchen Situationen</i>",
        T0005: "<i>Ich werde nachher mal mit ihnen reden und das klären. Hoffentlich akzeptieren sie es.</i>",
        T0006: "<i>Sollten sie aber nicht damit zurechtkommen, wird das wohl schwierig weiterhin befreundet zu bleiben.</i>"
      },
      Protagonist: {
        T0000: "Hey, Ade!",
        T0001: "Weißt du wo Ned und Sed bleiben?",
        T0002: "Na, alles klar bei euch?"
      },
      Adelinde: {
        T0000: "Hi ",
        T0001: "Schau mal da rüber. Sie kommen geradewegs auf uns zu.",
        T0002: "Hi ihr beiden.",
        T0003: "B-bei mir ist auch alles klar!!"
      },
      Twins: {
        T0000: "Hallöööchen.",
        T0001: "Immer ####, ## dir?",
        T0002: ""
      },
      Sed: {
        T0000: "Oh oh, klappe jetzt, Ned. Es fängt an!",
        T0001: "",
        T0002: ""
      },
      Ned: {
        T0000: "Aber ich hab' doch nix-",
        T0001: "",
        T0002: ""
      }
    };



    // Hide dB-Meter with its text
    document.getElementById("avg-level").hidden = true;
    document.getElementById("avg-level-text").hidden = true;
    document.getElementById("dB").hidden = true;

    let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
    let signalDelay10: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(10)]);

    let spatialSound: SpatialSound = new SpatialSound();

    // Audio in 2D-Welt, Knoten hinter der 2D-Welt platzieren


    ƒS.Speech.hide();
    await ƒS.Location.show(locations.dancerBG);
    await ƒS.update(3);
    await ƒS.Character.animate(characters.Adelinde, characters.Adelinde.pose.smile, outOfCanvasToMid());
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0000 + dataForSave.Protagonist.name + "!");
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0000, true, "Player");
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0001, true, "Player");
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0001);
    await ƒS.Speech.tell(null, text.Narrator.T0000);
    ƒS.Character.hide(characters.Adelinde);
    await ƒS.Character.animate(characters.Adelinde, characters.Adelinde.pose.smile, midToLeft());
    await ƒS.update(0.5);
    await ƒS.Character.animate(characters.Twins, characters.Twins.pose.normal, outOfCanvasToMid());
    await ƒS.update(2);
    ƒS.Character.hide(characters.Adelinde);
    await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positionPercent(30, 100));
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0002);
    await ƒS.Speech.tell(characters.Twins, text.Twins.T0000);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0002, true, "Player");
    await ƒS.Speech.tell(characters.Twins, text.Twins.T0001);
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0003);
    await ƒS.Speech.tell(characters.Sed, text.Sed.T0000);
    await ƒS.Speech.tell(characters.Ned, text.Ned.T0000);
    ƒS.Character.hide(characters.Adelinde);
    ƒS.Character.hide(characters.Twins);
    await ƒS.update(2);
    await ƒS.Speech.tell(null, text.Narrator.T0001);
    await ƒS.Speech.tell(null, text.Narrator.T0002);
    ƒS.Speech.hide();
    await ƒS.update(0.1);
    await ƒS.Character.show(characters.Dancer, characters.Dancer.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(5);
    // ƒS.Sound.play(sound.dancerTheme, 0.05, true);
    // ƒS.Sound.fade(sound.dancerTheme, 1, 3);
    spatialSound.start();
    ƒS.Text.setClass("black");
    await ƒS.Text.print("Starte den Sound mit Enter und navigiere nun mit deinen Pfeiltasten, bis du etwas hörst.\
    <br>Du kannst dich aber auch von der Soundquelle vollständig entfernen, wenn du deine Ruhe haben möchtest, damit du dein Hörvermögen schonst.");
    await signalDelay10();
    // Verschiedene Sounds laufen lassen
    ƒS.Sound.play(sound.hmmConfused, 1);
    await ƒS.Speech.tell(null, text.Narrator.T0003);
    await ƒS.Speech.tell(null, text.Narrator.T0004);
    ƒS.Sound.play(sound.hahaha, 1);
    await ƒS.Speech.tell(null, text.Narrator.T0005);
    ƒS.Sound.play(sound.hmpfOne, 1);
    await ƒS.Speech.tell(null, text.Narrator.T0006);





    // ƒS.Character.hide(characters.Anastasia);
    // await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positions.bottomcenter);











    // ƒ.Loop.stop();
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await signalDelay2();
    // ƒS.Sound.fade(sound.mission, 0, 1);











    // enableSpatialSound();
    // ƒ.Loop.stop();






  }






  // Aktuell nur hier verfügbar, scope beachten




  // async function init(): Promise<void> {

  //   let out: HTMLOutputElement;

  //   let camera: ƒAid.CameraOrbit;
  //   let speedCameraRotation: number = 0.2;
  //   let speedCameraTranslation: number = 0.01;
  //   let cmpAudio: ƒ.ComponentAudio;
  //   let mtxRotatorX: ƒ.Matrix4x4;
  //   let mtxRotatorY: ƒ.Matrix4x4;
  //   let mtxTranslator: ƒ.Matrix4x4;
  //   let mtxInner: ƒ.Matrix4x4;
  //   let mtxOuter: ƒ.Matrix4x4;

  //   let cntMouseX: ƒ.Control = new ƒ.Control("MouseX", speedCameraRotation);
  //   let cntMouseY: ƒ.Control = new ƒ.Control("MouseY", speedCameraRotation);

  //   // tslint:disable-next-line: typedef
  //   let parameter = {
  //     xAmplitude: 0,
  //     zAmplitude: 0,
  //     frequency: 1,
  //     cameraPosition: new ƒ.Vector3(0, 0, 5)
  //   };

  //   out = document.querySelector("output");

  //   const mtrWhite: ƒ.Material = new ƒ.Material("White", ƒ.ShaderUniColor, new ƒ.CoatColored(ƒ.Color.CSS("white")));
  //   const mtrGrey: ƒ.Material = new ƒ.Material("White", ƒ.ShaderUniColor, new ƒ.CoatColored(ƒ.Color.CSS("slategrey")));
  //   const inner: ƒAid.Node = new ƒAid.Node("Inner", ƒ.Matrix4x4.IDENTITY(), mtrWhite, new ƒ.MeshPyramid());
  //   const outer: ƒAid.Node = new ƒAid.Node("Outer", ƒ.Matrix4x4.IDENTITY(), mtrGrey, new ƒ.MeshPyramid());
  //   const mtxMesh: ƒ.Matrix4x4 = inner.mtxMeshPivot;
  //   mtxMesh.rotateX(-90);
  //   mtxMesh.translateZ(1, false);
  //   outer.mtxMeshPivot.set(inner.mtxMeshPivot);
  //   const speaker: ƒAid.Node = new ƒAid.Node("Speaker", ƒ.Matrix4x4.IDENTITY());
  //   // speaker.addChild(inner);
  //   // speaker.addChild(outer);
  //   // speaker.addChild(new ƒAid.NodeCoordinateSystem("SpeakerSystem", ƒ.Matrix4x4.SCALING(ƒ.Vector3.ONE(2))));

  //   const rotator: ƒAid.Node = new ƒAid.Node("Rotator", ƒ.Matrix4x4.IDENTITY());
  //   const translator: ƒAid.Node = new ƒAid.Node("Translator", ƒ.Matrix4x4.IDENTITY());
  //   rotator.addChild(speaker);
  //   translator.addChild(rotator);

  //   mtxRotatorX = speaker.mtxLocal;
  //   mtxRotatorY = rotator.mtxLocal;
  //   mtxTranslator = translator.mtxLocal;
  //   mtxInner = inner.mtxLocal;
  //   mtxOuter = outer.mtxLocal;



  //   // audio setup
  //   const audio: ƒ.Audio = new ƒ.Audio(sound.hypnotic);
  //   cmpAudio = new ƒ.ComponentAudio(audio, true);
  //   speaker.addComponent(cmpAudio);
  //   cmpAudio.setPanner(ƒ.AUDIO_PANNER.CONE_OUTER_ANGLE, 180);
  //   cmpAudio.setPanner(ƒ.AUDIO_PANNER.CONE_INNER_ANGLE, 30);
  //   ƒ.Debug.log(cmpAudio.getMutatorOfNode(ƒ.AUDIO_NODE_TYPE.SOURCE));
  //   ƒ.Debug.log(cmpAudio.getMutatorOfNode(ƒ.AUDIO_NODE_TYPE.PANNER));
  //   ƒ.Debug.log(cmpAudio.getMutatorOfNode(ƒ.AUDIO_NODE_TYPE.GAIN));

  //   // camera setup
  //   const cmpCamera: ƒ.ComponentCamera = new ƒ.ComponentCamera();
  //   camera = new ƒAid.CameraOrbit(cmpCamera, 3, 80, 0.1, 20);
  //   camera.nodeCamera.addComponent(new ƒ.ComponentAudioListener());
  //   camera.axisRotateX.addControl(cntMouseY);
  //   camera.axisRotateY.addControl(cntMouseX);


  //   // scene setup
  //   const graph: ƒ.Node = new ƒ.Node("Graph");
  //   // graph.addChild(new ƒAid.NodeCoordinateSystem());
  //   graph.addChild(translator);
  //   graph.addChild(camera);

  //   const viewport: ƒ.Viewport = new ƒ.Viewport();
  //   const canvas: HTMLCanvasElement = document.querySelector("canvas");
  //   viewport.initialize("Viewport", graph, cmpCamera, canvas);
  //   ƒ.AudioManager.default.listenTo(graph);
  //   ƒ.AudioManager.default.listenWith(camera.nodeCamera.getComponent(ƒ.ComponentAudioListener));

  //   // setup event handling
  //   viewport.setFocus(true);
  //   viewport.activatePointerEvent(ƒ.EVENT_POINTER.MOVE, false);
  //   viewport.activateWheelEvent(ƒ.EVENT_WHEEL.WHEEL, false);
  //   viewport.addEventListener(ƒ.EVENT_POINTER.MOVE, hndPointerMove);
  //   viewport.addEventListener(ƒ.EVENT_WHEEL.WHEEL, hndWheelMove);

  //   canvas.addEventListener("mousedown", canvas.requestPointerLock);
  //   canvas.addEventListener("mouseup", () => document.exitPointerLock());

  //   startInteraction(viewport);

  //   ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
  //   ƒ.Loop.start();




  //   function update(_event: Event): void {
  //     // let time: number = performance.now() / 1000;
  //     // let position: ƒ.Vector3 = mtxTranslator.translation;

  //     // if (parameter.xAmplitude)
  //     //   position.x = parameter.xAmplitude * Math.sin(parameter.frequency * time);
  //     // if (parameter.zAmplitude)
  //     //   position.z = parameter.zAmplitude * Math.cos(parameter.frequency * time);

  //     let panner: ƒ.Mutator = cmpAudio.getMutatorOfNode(ƒ.AUDIO_NODE_TYPE.PANNER);
  //     {
  //       let sin: number = Math.sin(Math.PI * <number>panner["coneInnerAngle"] / 360);
  //       let cos: number = Math.cos(Math.PI * <number>panner["coneInnerAngle"] / 360);
  //       mtxInner.set(ƒ.Matrix4x4.IDENTITY());
  //       mtxInner.scaling = new ƒ.Vector3(2 * sin, 2 * sin, cos);
  //     }
  //     {
  //       let sin: number = Math.sin(Math.PI * <number>panner["coneOuterAngle"] / 360);
  //       let cos: number = Math.cos(Math.PI * <number>panner["coneOuterAngle"] / 360);
  //       mtxOuter.set(ƒ.Matrix4x4.IDENTITY());
  //       mtxOuter.scaling = new ƒ.Vector3(2 * sin, 2 * sin, cos);
  //     }

  //     // mtxTranslator.translation = position;
  //     ƒ.AudioManager.default.update();
  //     viewport.draw();
  //     // printInfo(mtxBody, mtxCamera);
  //   }




  //   function hndPointerMove(_event: ƒ.EventPointer): void {
  //     if (!_event.buttons)
  //       return;
  //     // camera.rotateY(_event.movementX * speedCameraRotation);
  //     // camera.rotateX(_event.movementY * speedCameraRotation);

  //     cntMouseX.setInput(_event.movementX);
  //     cntMouseY.setInput(_event.movementY);
  //   }

  //   function hndWheelMove(_event: WheelEvent): void {
  //     let panner: ƒ.Mutator = cmpAudio.getMutatorOfNode(ƒ.AUDIO_NODE_TYPE.PANNER);
  //     if (_event.shiftKey || _event.altKey) {
  //       let inner: number = <number>panner["coneInnerAngle"] - (_event.altKey ? _event.deltaY / 10 : 0);
  //       inner = Math.min(360, Math.max(inner, 0));
  //       cmpAudio.setPanner(ƒ.AUDIO_PANNER.CONE_INNER_ANGLE, inner);
  //       let outer: number = <number>panner["coneOuterAngle"] - (_event.shiftKey ? _event.deltaY / 10 : 0);
  //       outer = Math.min(360, Math.max(inner, outer));
  //       cmpAudio.setPanner(ƒ.AUDIO_PANNER.CONE_OUTER_ANGLE, outer);
  //     }
  //     else
  //       camera.distance += _event.deltaY * speedCameraTranslation;
  //   }




  //   function startInteraction(_viewport: ƒ.Viewport): void {
  //     _viewport.activateKeyboardEvent(ƒ.EVENT_KEYBOARD.DOWN, true);
  //     _viewport.addEventListener(ƒ.EVENT_KEYBOARD.DOWN, move);

  //     function move(_event: ƒ.EventKeyboard): void {
  //       mtxTranslator.translateZ(0.1 *
  //         (_event.code == ƒ.KEYBOARD_CODE.W ? -1 :
  //           _event.code == ƒ.KEYBOARD_CODE.S ? 1 :
  //             0));
  //       mtxTranslator.translateX(0.1 *
  //         (_event.code == ƒ.KEYBOARD_CODE.A ? -1 :
  //           _event.code == ƒ.KEYBOARD_CODE.D ? 1 :
  //             0));
  //       mtxTranslator.translateY(0.1 *
  //         (_event.code == ƒ.KEYBOARD_CODE.X ? -1 :
  //           _event.code == ƒ.KEYBOARD_CODE.E ? 1 :
  //             0));

  //       switch (_event.code) {
  //         case ƒ.KEYBOARD_CODE.SPACE:
  //           mtxRotatorX.set(ƒ.Matrix4x4.IDENTITY());
  //           mtxRotatorY.set(ƒ.Matrix4x4.IDENTITY());
  //           mtxTranslator.set(ƒ.Matrix4x4.IDENTITY());
  //           // parameter.xAmplitude = parameter.zAmplitude = 0;
  //           break;
  //         // case ƒ.KEYBOARD_CODE.PLUS+:
  //         //   if (parameter.xAmplitude)
  //         //     parameter.xAmplitude = 0;
  //         //   else {
  //         //     parameter.xAmplitude = mtxRotatorX.translation.x;
  //         //   }
  //         //   break;
  //         // case ƒ.KEYBOARD_CODE.Y:
  //         //   if (parameter.zAmplitude)
  //         //     parameter.zAmplitude = 0;
  //         //   else {
  //         //     parameter.zAmplitude = mtxRotatorX.translation.z;
  //         //   }
  //         //   break;
  //         case ƒ.KEYBOARD_CODE.ARROW_RIGHT:
  //           mtxRotatorY.rotateY(5);
  //           break;
  //         case ƒ.KEYBOARD_CODE.ARROW_LEFT:
  //           mtxRotatorY.rotateY(-5);
  //           break;
  //         case ƒ.KEYBOARD_CODE.ARROW_UP:
  //           mtxRotatorX.rotateX(-5);
  //           break;
  //         case ƒ.KEYBOARD_CODE.ARROW_DOWN:
  //           mtxRotatorX.rotateX(5);
  //           break;
  //         // case ƒ.KEYBOARD_CODE.Q:
  //         //   // parameter.frequency *= 0.8;
  //         //   break;
  //         // case ƒ.KEYBOARD_CODE.E:
  //         //   // parameter.frequency *= 1 / 0.8;
  //         //   break;
  //         // case ƒ.KEYBOARD_CODE.P:

  //         //   break;
  //         case ƒ.KEYBOARD_CODE.ENTER:
  //           //play Sound
  //           console.log("Play Audio");
  //           if (cmpAudio.isPlaying)
  //             cmpAudio.play(false);
  //           else
  //             cmpAudio.play(true);
  //           break;
  //       }
  //     }
  //   }
  // }
}
