namespace AV {
  export class SpatialSound {

    private out: HTMLOutputElement;

    private camera: ƒAid.CameraOrbit;
    private speedCameraRotation: number = 0.2;
    private speedCameraTranslation: number = 0.01;
    private cmpAudio: ƒ.ComponentAudio;
    private mtxRotatorX: ƒ.Matrix4x4;
    private mtxRotatorY: ƒ.Matrix4x4;
    private mtxTranslator: ƒ.Matrix4x4;
    private mtxInner: ƒ.Matrix4x4;
    private mtxOuter: ƒ.Matrix4x4;

    private cntMouseX: ƒ.Control = new ƒ.Control("MouseX", this.speedCameraRotation);
    private cntMouseY: ƒ.Control = new ƒ.Control("MouseY", this.speedCameraRotation);

    // tslint:disable-next-line: typedef
    // private parameter = {
    //   xAmplitude: 0,
    //   zAmplitude: 0,
    //   frequency: 1,
    //   cameraPosition: new ƒ.Vector3(0, 0, 5)
    // };

    private viewport: ƒ.Viewport = new ƒ.Viewport();




    public start(): void {

      this.out = document.querySelector("output");

      const mtrWhite: ƒ.Material = new ƒ.Material("White", ƒ.ShaderUniColor, new ƒ.CoatColored(ƒ.Color.CSS("white")));
      const mtrGrey: ƒ.Material = new ƒ.Material("White", ƒ.ShaderUniColor, new ƒ.CoatColored(ƒ.Color.CSS("slategrey")));
      const inner: ƒAid.Node = new ƒAid.Node("Inner", ƒ.Matrix4x4.IDENTITY(), mtrWhite, new ƒ.MeshPyramid());
      const outer: ƒAid.Node = new ƒAid.Node("Outer", ƒ.Matrix4x4.IDENTITY(), mtrGrey, new ƒ.MeshPyramid());
      const mtxMesh: ƒ.Matrix4x4 = inner.mtxMeshPivot;
      mtxMesh.rotateX(-90);
      mtxMesh.translateZ(1, false);
      outer.mtxMeshPivot.set(inner.mtxMeshPivot);
      const speaker: ƒAid.Node = new ƒAid.Node("Speaker", ƒ.Matrix4x4.IDENTITY());
      // speaker.addChild(inner);
      // speaker.addChild(outer);
      // speaker.addChild(new ƒAid.NodeCoordinateSystem("SpeakerSystem", ƒ.Matrix4x4.SCALING(ƒ.Vector3.ONE(2))));

      const rotator: ƒAid.Node = new ƒAid.Node("Rotator", ƒ.Matrix4x4.IDENTITY());
      const translator: ƒAid.Node = new ƒAid.Node("Translator", ƒ.Matrix4x4.IDENTITY());
      rotator.addChild(speaker);
      translator.addChild(rotator);

      this.mtxRotatorX = speaker.mtxLocal;
      this.mtxRotatorY = rotator.mtxLocal;
      this.mtxTranslator = translator.mtxLocal;
      this.mtxInner = inner.mtxLocal;
      this.mtxOuter = outer.mtxLocal;



      // audio setup
      const audio: ƒ.Audio = new ƒ.Audio(sound.nightclub);
      this.cmpAudio = new ƒ.ComponentAudio(audio, true);
      speaker.addComponent(this.cmpAudio);
      this.cmpAudio.setPanner(ƒ.AUDIO_PANNER.CONE_OUTER_ANGLE, 180);
      this.cmpAudio.setPanner(ƒ.AUDIO_PANNER.CONE_INNER_ANGLE, 30);
      ƒ.Debug.log(this.cmpAudio.getMutatorOfNode(ƒ.AUDIO_NODE_TYPE.SOURCE));
      ƒ.Debug.log(this.cmpAudio.getMutatorOfNode(ƒ.AUDIO_NODE_TYPE.PANNER));
      ƒ.Debug.log(this.cmpAudio.getMutatorOfNode(ƒ.AUDIO_NODE_TYPE.GAIN));

      // camera setup
      const cmpCamera: ƒ.ComponentCamera = new ƒ.ComponentCamera();
      this.camera = new ƒAid.CameraOrbit(cmpCamera, 3, 80, 0.1, 20);
      this.camera.nodeCamera.addComponent(new ƒ.ComponentAudioListener());
      this.camera.axisRotateX.addControl(this.cntMouseY);
      this.camera.axisRotateY.addControl(this.cntMouseX);


      // scene setup
      const graph: ƒ.Node = new ƒ.Node("Graph");
      // graph.addChild(new ƒAid.NodeCoordinateSystem());
      graph.addChild(translator);
      graph.addChild(this.camera);

      // const viewport: ƒ.Viewport = new ƒ.Viewport();
      const canvas: HTMLCanvasElement = document.querySelector("#canvasSpatialSound");
      this.viewport.initialize("Viewport", graph, cmpCamera, canvas);
      ƒ.AudioManager.default.listenTo(graph);
      ƒ.AudioManager.default.listenWith(this.camera.nodeCamera.getComponent(ƒ.ComponentAudioListener));

      // setup event handling
      this.viewport.setFocus(true);
      this.viewport.activatePointerEvent(ƒ.EVENT_POINTER.MOVE, false);
      this.viewport.activateWheelEvent(ƒ.EVENT_WHEEL.WHEEL, false);
      this.viewport.addEventListener(ƒ.EVENT_POINTER.MOVE, this.hndPointerMove);
      this.viewport.addEventListener(ƒ.EVENT_WHEEL.WHEEL, this.hndWheelMove);

      canvas.addEventListener("mousedown", canvas.requestPointerLock);
      canvas.addEventListener("mouseup", () => document.exitPointerLock());

      this.startInteraction(this.viewport);

      ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, this.update);
      ƒ.Loop.start();

    }


    private update = (_event: Event): void => {
      // let time: number = performance.now() / 1000;
      // let position: ƒ.Vector3 = mtxTranslator.translation;

      // if (parameter.xAmplitude)
      //   position.x = parameter.xAmplitude * Math.sin(parameter.frequency * time);
      // if (parameter.zAmplitude)
      //   position.z = parameter.zAmplitude * Math.cos(parameter.frequency * time);

      let panner: ƒ.Mutator = this.cmpAudio.getMutatorOfNode(ƒ.AUDIO_NODE_TYPE.PANNER);
      {
        let sin: number = Math.sin(Math.PI * <number>panner["coneInnerAngle"] / 360);
        let cos: number = Math.cos(Math.PI * <number>panner["coneInnerAngle"] / 360);
        this.mtxInner.set(ƒ.Matrix4x4.IDENTITY());
        this.mtxInner.scaling = new ƒ.Vector3(2 * sin, 2 * sin, cos);
      }
      {
        let sin: number = Math.sin(Math.PI * <number>panner["coneOuterAngle"] / 360);
        let cos: number = Math.cos(Math.PI * <number>panner["coneOuterAngle"] / 360);
        this.mtxOuter.set(ƒ.Matrix4x4.IDENTITY());
        this.mtxOuter.scaling = new ƒ.Vector3(2 * sin, 2 * sin, cos);
      }

      // mtxTranslator.translation = position;
      ƒ.AudioManager.default.update();
      // this.viewport.draw();
      this.viewport.calculateTransforms();
      // printInfo(mtxBody, mtxCamera);
    }


    private hndPointerMove = (_event: ƒ.EventPointer): void => {
      if (!_event.buttons)
        return;
      // camera.rotateY(_event.movementX * speedCameraRotation);
      // camera.rotateX(_event.movementY * speedCameraRotation);

      this.cntMouseX.setInput(_event.movementX);
      this.cntMouseY.setInput(_event.movementY);
    }

    private hndWheelMove = (_event: WheelEvent): void => {
      let panner: ƒ.Mutator = this.cmpAudio.getMutatorOfNode(ƒ.AUDIO_NODE_TYPE.PANNER);
      if (_event.shiftKey || _event.altKey) {
        let inner: number = <number>panner["coneInnerAngle"] - (_event.altKey ? _event.deltaY / 10 : 0);
        inner = Math.min(360, Math.max(inner, 0));
        this.cmpAudio.setPanner(ƒ.AUDIO_PANNER.CONE_INNER_ANGLE, inner);
        let outer: number = <number>panner["coneOuterAngle"] - (_event.shiftKey ? _event.deltaY / 10 : 0);
        outer = Math.min(360, Math.max(inner, outer));
        this.cmpAudio.setPanner(ƒ.AUDIO_PANNER.CONE_OUTER_ANGLE, outer);
      }
      else
        this.camera.distance += _event.deltaY * this.speedCameraTranslation;
    }



    private startInteraction(_viewport: ƒ.Viewport): void {
      _viewport.activateKeyboardEvent(ƒ.EVENT_KEYBOARD.DOWN, true);
      _viewport.addEventListener(ƒ.EVENT_KEYBOARD.DOWN, this.move);


    }

    private move = (_event: ƒ.EventKeyboard): void => {
      this.mtxTranslator.translateZ(0.1 *
        (_event.code == ƒ.KEYBOARD_CODE.W ? -1 :
          _event.code == ƒ.KEYBOARD_CODE.S ? 1 :
            0));
      this.mtxTranslator.translateX(0.1 *
        (_event.code == ƒ.KEYBOARD_CODE.A ? -1 :
          _event.code == ƒ.KEYBOARD_CODE.D ? 1 :
            0));
      this.mtxTranslator.translateY(0.1 *
        (_event.code == ƒ.KEYBOARD_CODE.X ? -1 :
          _event.code == ƒ.KEYBOARD_CODE.E ? 1 :
            0));

      switch (_event.code) {
        case ƒ.KEYBOARD_CODE.SPACE:
          this.mtxRotatorX.set(ƒ.Matrix4x4.IDENTITY());
          this.mtxRotatorY.set(ƒ.Matrix4x4.IDENTITY());
          this.mtxTranslator.set(ƒ.Matrix4x4.IDENTITY());
          // parameter.xAmplitude = parameter.zAmplitude = 0;
          break;
        // case ƒ.KEYBOARD_CODE.PLUS+:
        //   if (parameter.xAmplitude)
        //     parameter.xAmplitude = 0;
        //   else {
        //     parameter.xAmplitude = mtxRotatorX.translation.x;
        //   }
        //   break;
        // case ƒ.KEYBOARD_CODE.Y:
        //   if (parameter.zAmplitude)
        //     parameter.zAmplitude = 0;
        //   else {
        //     parameter.zAmplitude = mtxRotatorX.translation.z;
        //   }
        //   break;
        case ƒ.KEYBOARD_CODE.ARROW_RIGHT:
          this.mtxRotatorY.rotateY(5);
          break;
        case ƒ.KEYBOARD_CODE.ARROW_LEFT:
          this.mtxRotatorY.rotateY(-5);
          break;
        case ƒ.KEYBOARD_CODE.ARROW_UP:
          this.mtxRotatorX.rotateX(-5);
          break;
        case ƒ.KEYBOARD_CODE.ARROW_DOWN:
          this.mtxRotatorX.rotateX(5);
          break;
        // case ƒ.KEYBOARD_CODE.Q:
        //   // parameter.frequency *= 0.8;
        //   break;
        // case ƒ.KEYBOARD_CODE.E:
        //   // parameter.frequency *= 1 / 0.8;
        //   break;
        // case ƒ.KEYBOARD_CODE.P:

        //   break;
        case ƒ.KEYBOARD_CODE.ENTER:
          //play Sound
          console.log("Play Audio");
          if (this.cmpAudio.isPlaying)
            this.cmpAudio.play(false);
          else
            this.cmpAudio.play(true);
          break;
      }
    }
  }

}

