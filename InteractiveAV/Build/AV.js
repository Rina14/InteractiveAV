"use strict";
var AV;
(function (AV) {
    async function HearingLoss() {
        console.log("Start Hearing Loss");
        let text = {
            Narrator: {
                T0000: "<i>...</i>",
                T0001: "<i>Ich kann es immer noch nicht fassen.</i>",
                T0002: "<i>Vielleicht verstehe ich es auch nur noch nicht richtig,\
                aber was bedeutet das nun konkret für mich?</i>",
                T0003: "<i>So viel wird sich ja hoffentlich nicht für mich ändern...</i>",
                T0004: "<i>Oder?</i>",
                T0005: "<i>Was meinte der Doc noch gleich?</i>",
                T0006: "<i>Achso.. Cochlea. Was das ist wusste ich zwar selbst, aber nun gut...</i>",
                T0007: "<i>Jetzt habe ich zwar Hörgeräte und nun heißt es wohl Gewöhnungssache.</i>",
                T0008: "<i>Allerdings meinte der Hörgeräteakustiker, dass ich diese erst einmal\
                zwei bis drei Wochen testen könne.</i>",
                T0009: "<i>Ein etwas merkwürdiges, aber sehr befriedigendes Gefühl, wieder mehr hören zu können.</i>",
                T0010: "<i>Ah, das ist Adelinde. Ist schon wieder eine Weile her, seit ich sie gesehen habe.</i>"
            },
            Protagonist: {
                T0000: "Wie bitte?",
                T0001: "Und das bedeutet?",
                T0002: "Das geht doch wieder weg, nicht wahr? Ich habe schließlich\
                nichts Großartiges gemacht, dass das passieren könnte.",
                T0003: "Koch- was?",
                T0004: "",
                T0005: "",
                T0006: ""
            },
            Doctor: {
                T0000: "Du hast eine hochgradige Schallempfindungsschwerhörigkeit.",
                T0001: "Das bedeutet, dass du hohe Frequenzen nicht mehr hören kannst.\
                Kurz gesagt, hast du einen vollständigen Hörverlust dieser.",
                T0002: "Nun, das ist nicht direkt 'heilbar', jedoch bis zu einem gewissen Grad kompensierbar.",
                T0003: "Du wirst lernen müssen, mit dieser Schwerhörigkeit umzugehen.",
                T0004: "Aber keine Sorge, dafür gibt es Hörgeräte und notfalls Cochlea-Implantate.\
                Es wird eine Weile dauern, bis du dich daran gewöhnt hast.",
                T0005: "Cochlea-Implantate. Die Cochlea ist die Hörschnecke, in der die feinen Haarzellen sitzen.\
                Hier kann ein Implantat eingepflanzt werden, falls Hörgeräte nicht mehr die gewünschte Leistung erbringen.",
                T0006: ""
            },
            Adelinde: {
                T0000: "Hey, ",
                T0001: "Wie geht's dir denn? Irgendwelche Neuigkeiten?",
                T0002: "",
                T0003: "",
                T0004: ""
            }
        };
        AV.ƒS.Speech.hide();
        // dataForSave.started = true;
        AV.ƒS.Text.addClass("start");
        await AV.ƒS.Text.print("Willkommen!<br><br>Hier wird eine Einleitung stehen.\
    <p>Viel Spaß beim Spielen.</p><br>\
    <p><b>Save: F8</p><p><b>Load: F9</p>");
        AV.ƒS.Text.close();
        AV.ƒS.Speech.show();
        // text speed in milliseconds, while paragraphs in seconds
        AV.ƒS.Speech.setTickerDelays(20, 2);
        // for moments with individual delays
        let signalDelay2 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(2)]);
        let signalDelay1 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(1)]);
        // Duration in seconds
        AV.ƒS.Sound.fade(AV.sound.again, 0.3, 0.07, true);
        // Start the Scene!
        await AV.ƒS.Speech.hide();
        await AV.ƒS.Location.show(AV.locations.trainOld);
        await AV.ƒS.update(AV.transitions.wet.duration, AV.transitions.wet.alpha, AV.transitions.wet.edge);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0000);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0001);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0002);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0003);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0004);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0005);
        await AV.ƒS.Speech.hide();
        await AV.ƒS.Location.show(AV.locations.hospital);
        await AV.ƒS.update(AV.transitions.flash.duration, AV.transitions.flash.alpha, AV.transitions.flash.edge);
        await AV.ƒS.Character.show(AV.characters.Doctor, AV.characters.Doctor.pose.normal, AV.ƒS.positions.bottomcenter);
        await AV.ƒS.update(0.5);
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Hallo, ...");
        await AV.ƒS.Speech.tell(null, "<i>Er hat wohl meinen Namen vergessen.</i>");
        // Name field - Player can type his name in here
        AV.dataForSave.Protagonist.name = await AV.ƒS.Speech.getInput();
        console.log(AV.dataForSave.Protagonist.name);
        // Punkte verteilen
        // dataForSave.score += 10;
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Hallo, " + AV.dataForSave.Protagonist.name + ".");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Du hast eine Sc....empf....keit.");
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0000, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, text.Doctor.T0000);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0001, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, text.Doctor.T0001);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0002, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, text.Doctor.T0002);
        await AV.ƒS.Speech.tell(AV.characters.Doctor, text.Doctor.T0003);
        await AV.ƒS.Speech.tell(AV.characters.Doctor, text.Doctor.T0004);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0003, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, text.Doctor.T0005);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0006);
        await AV.ƒS.Character.hide(AV.characters.Doctor);
        await AV.ƒS.Speech.hide();
        await AV.ƒS.update(1);
        await AV.ƒS.Location.show(AV.locations.trainOld);
        // await ƒS.update(transitions.flash.duration, transitions.flash.alpha, transitions.flash.edge);
        await AV.ƒS.update(0.5);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0007);
        await signalDelay1();
        await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.ƒS.positions.bottomcenter);
        await AV.ƒS.update(0.5);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0000 + AV.dataForSave.Protagonist.name + "!");
        await AV.ƒS.Speech.tell(null, text.Narrator.T0010);
        await signalDelay2();
        AV.ƒS.Sound.play(AV.sound.click, 1);
        let meetAdelinde = {
            iGreetBack: "Adelinde zurückgrüßen",
            iIgnoreHer: "Adelinde ignorieren",
            iJustLookAtHer: "Sie stumm anstarren"
        };
        let trainMeetingWithAdelinde = await AV.ƒS.Menu.getInput(meetAdelinde, "meetingAdelinde");
        switch (trainMeetingWithAdelinde) {
            case meetAdelinde.iGreetBack:
                AV.ƒS.Sound.play(AV.sound.click, 1);
                //continue writing on this path here
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Hi, Ade. Lange nicht gesehen, was?");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Was?! Wirklich?? Ich dachte wir-... Ahh tut mir leid.");
                await AV.ƒS.Speech.tell(null, "Typisch, Ade. Sie ist schon immer sehr leichtgläubig gewesen.");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Beruhige dich. Keine Sorge, ist nur eine Woche her, seit wir das letzte mal gesprochen haben.");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Ohh, ich dachte schon mein Gedächtnis lässt mich im Stich. Dann ist ja gut.");
                AV.ƒS.Speech.clear();
                await AV.ƒS.update(1);
                break;
            case meetAdelinde.iIgnoreHer:
                AV.ƒS.Sound.play(AV.sound.click, 1);
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Hallo?");
                await AV.ƒS.Speech.tell(null, "<i>Vielleicht sollte ich doch-</i>");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Ignorierst du mich etwa?");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Was? Nein ich-");
                AV.ƒS.Character.hide(AV.characters.Adelinde);
                await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.smile, AV.ƒS.positions.bottomcenter);
                await AV.ƒS.update(0.1);
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Ich mache doch nur Witze, " + AV.dataForSave.Protagonist.name + ".");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Du kennst mich doch.");
                AV.ƒS.Character.hide(AV.characters.Adelinde);
                await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.ƒS.positions.bottomcenter);
                await AV.ƒS.update(0.1);
                AV.ƒS.Speech.clear();
                await AV.ƒS.update(1);
                break;
            case meetAdelinde.iJustLookAtHer:
                AV.ƒS.Sound.play(AV.sound.click, 1);
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Haaa-lloooo.");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Erdeee an " + AV.dataForSave.Protagonist.name + "!");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Angekommen.");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Gut, ich dachte ich verliere dich schon an die Aliens.");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Keine Sorge, so schnell bist du mich nicht los.");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Schad-.. Ich meine puh, ein Glück.");
                await AV.ƒS.Speech.tell(null, "<i>Adelinde, wie sie lebt und leibt.</i>");
                AV.ƒS.Speech.clear();
                await AV.ƒS.update(1);
                break;
        }
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0001);
        AV.ƒS.Speech.clear();
        AV.ƒS.Speech.hide();
        // Musik ausblenden
        AV.ƒS.Sound.fade(AV.sound.again, 0, 1);
    }
    AV.HearingLoss = HearingLoss;
})(AV || (AV = {}));
var AV;
(function (AV) {
    async function Friendship() {
        console.log("Start Friendship");
        let text = {
            Narrator: {
                T0000: "<i></i>",
                T0001: "<i></i>",
                T0002: "<i> </i>"
            },
            Adelinde: {
                T0000: "Hey, "
            }
        };
        // let animation: ƒS.AnimationDefinition = {
        //   start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("blue", 0) },
        //   end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
        //   duration: 1,
        //   playmode: ƒS.ANIMATION_PLAYMODE.REVERSELOOP
        // };
        // let animation1: ƒS.AnimationDefinition = {
        //   start: { translation: ƒS.positions.bottomleft, rotation: 20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("blue", 0) },
        //   end: { translation: ƒS.positions.bottomright, rotation: 40, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
        //   duration: 1,
        //   playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        // };
        await AV.ƒS.Location.show(AV.locations.city);
        // await ƒS.Character.animate(characters.Aoi, characters.Aoi.pose.normal, animation);
        // await ƒS.update(2);
        // await ƒS.Speech.tell(characters.Aoi, "Welcome, welcome to FUDGE-Story~~");
        // await ƒS.Speech.tell(characters.Aoi, "Hello " + dataForSave.Protagonist.name);
        await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.ƒS.positionPercent(60, 100));
        await AV.ƒS.update(1);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0000 + AV.dataForSave.Protagonist.name + "!");
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Hey, Ade! So ein Zufall dich hier zu treffen.");
        // await ƒS.Character.hide(characters.Aoi);
        // let pose: ƒ.Node = await ƒS.Character.get(characters.Aoi).getPose("Images/Characters/placeholder_girl.png");
        // pose.removeComponent(pose.getComponent(ƒ.ComponentAnimator));
        // await ƒS.Character.animate(characters.Aoi, characters.Aoi.pose.normal, animation1);
        // await ƒS.update(2);
        AV.ƒS.Sound.fade(AV.sound.again, 0, 1);
    }
    AV.Friendship = Friendship;
})(AV || (AV = {}));
var AV;
(function (AV) {
    async function GraphInsertion() {
        console.log("Start Graph Insertion");
        let cmpAudio;
        let distortion = AV.ƒ.AudioManager.default.createWaveShaper();
        let audioBeep;
        let audioUfo;
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
        await AV.ƒS.Location.show(AV.locations.city);
        await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.ƒS.positionPercent(60, 100));
        await AV.ƒS.update(1);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0000);
        enableAudioTest();
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "1");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "2");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "3");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "4");
        disableAudioTest();
        // Audio test function
        async function enableAudioTest() {
            window.addEventListener("keydown", handleKeydownForAudio);
            audioBeep = new AV.ƒ.Audio(AV.sound.Beep);
            // await audioBeep.asyncLoad("Sound/Beep.mp3")
            audioUfo = new AV.ƒ.Audio(AV.sound.Ufo);
            // await audioUfo.asyncLoad("Sound/Beat.mp3")
            cmpAudio = new AV.ƒ.ComponentAudio(audioBeep, false, false);
            cmpAudio.connect(true);
            cmpAudio.volume = 30;
            function makeDistortionCurve(amount = 50) {
                let samples = 44100;
                let curve = new Float32Array(samples);
                let deg = Math.PI / 180;
                let x;
                for (let i = 0; i < samples; ++i) {
                    x = i * 2 / samples - 1;
                    curve[i] = (3 + amount) * x * 20 * deg / (Math.PI + amount * Math.abs(x));
                }
                return curve;
            }
            distortion.curve = makeDistortionCurve(400);
            distortion.oversample = "4x";
        }
        // document.addEventListener("keydown", handleKeydownForAudio);
        function handleKeydownForAudio(_event) {
            switch (_event.code) {
                case AV.ƒ.KEYBOARD_CODE.ENTER:
                    AV.ƒ.Debug.log("Play");
                    cmpAudio.play(true);
                    break;
                case AV.ƒ.KEYBOARD_CODE.ARROW_UP:
                    AV.ƒ.Debug.log("Insert");
                    cmpAudio.insertAudioNodes(distortion, distortion);
                    break;
                case AV.ƒ.KEYBOARD_CODE.ARROW_DOWN:
                    AV.ƒ.Debug.log("Remove");
                    cmpAudio.insertAudioNodes(null, null);
                    break;
                case AV.ƒ.KEYBOARD_CODE.ARROW_LEFT:
                    AV.ƒ.Debug.log("Beep");
                    cmpAudio.setAudio(audioBeep);
                    break;
                case AV.ƒ.KEYBOARD_CODE.ARROW_RIGHT:
                    AV.ƒ.Debug.log("Ufo");
                    cmpAudio.setAudio(audioUfo);
                    break;
            }
        }
        function disableAudioTest() {
            window.removeEventListener("keydown", handleKeydownForAudio);
            console.log("Audio Test disabled");
        }
    }
    AV.GraphInsertion = GraphInsertion;
})(AV || (AV = {}));
/// <reference types="../../Aid/Build/FudgeAid"/>
var AV;
/// <reference types="../../Aid/Build/FudgeAid"/>
(function (AV) {
    async function SpatialSoundScene() {
        console.log("Start Spatial Scene");
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
        // let canvas2 = document.getElementById("canvasSpatialSound");
        // canvas2.style.display = "none";
        let spatialSound = new AV.SpatialSound();
        spatialSound.start();
        // Audio in 2D-Welt, Knoten hinter der 2D-Welt platzieren
        // ƒS.Sound.fade(sound.again, 0, 1);
        await AV.ƒS.Location.show(AV.locations.city);
        await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.ƒS.positionPercent(60, 100));
        await AV.ƒS.update(1);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0000);
        // enableSpatialSound();
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "1");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "2");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "3");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "4");
        // ƒ.Loop.stop();
    }
    AV.SpatialSoundScene = SpatialSoundScene;
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
})(AV || (AV = {}));
var AV;
(function (AV) {
    //zugriff auch innerhalb anderer dateien durch export; fudgecore ist extern nicht teil des programms deshalb muss es erst importiert werden
    AV.ƒ = FudgeCore;
    AV.ƒS = FudgeStory;
    AV.ƒAid = FudgeAid;
    //damit man weiß, dass das Programm läuft
    console.log("Start");
    //Objekte, man kann auf die entsprechenden Daten zugreifen
    // define transitions
    AV.transitions = {
        clock: {
            duration: 3,
            alpha: "./Transitions/circlewipe-ccw.jpg",
            edge: 1
        },
        jigsaw: {
            duration: 2,
            alpha: "./Transitions/jigsaw 08.png",
            edge: 0.4
        },
        flash: {
            duration: 2,
            alpha: "./Transitions/Others/040.jpg",
            edge: 0.4
        },
        wet: {
            duration: 3,
            alpha: "./Transitions/Others/wet.jpg",
            edge: 0.4
        }
    };
    // define sounds as key-string-pairs with the url of the soundfile
    AV.sound = {
        // Music
        energy: "Audio/Themes/energy.mp3",
        extremeaction: "Audio/Themes/extremeaction.mp3",
        again: "Audio/Themes/Again.mp3",
        dystopian: "Audio/Themes/Dystopian.ogg",
        emptyStreets: "Audio/Themes/Empty_Streets.ogg",
        mission: "Audio/Themes/Mission.mp3",
        mystery: "Audio/Themes/Mystery_Unsolved.ogg",
        nightclub: "Audio/Themes/Nightclub.ogg",
        theProtagonist: "Audio/Themes/protagonist.ogg",
        surveillance: "Audio/Themes/Surveillance.ogg",
        truth: "Audio/Themes/Truth.mp3",
        vengeance: "Audio/Themes/Vengeance.mp3",
        // Sound
        click: "Audio/Sound/click.mp3",
        Beep: "./Audio/Sound/Beep.mp3",
        Beat: "./Audio/Sound/Beat.mp3",
        hypnotic: "Audio/Sound/hypnotic.mp3",
        Ufo: "Audio/Sound/Ufo.mp3",
        // Voice
        hahaha: "Audio/Voice/Ha_ha_ha.wav",
        ha_haa: "Audio/Voice/Ha_haa!.wav",
        hmmOne: "Audio/Voice/Hmm_1.wav",
        hmmConfused: "Audio/Voice/Hmm_confused.wav",
        hmpfOne: "Audio/Voice/Hmpf_1.wav",
        sighOne: "Audio/Voice/Sigh_of_relief_1.wav",
        sighTwo: "Audio/Voice/Sigh_of_relief_2.wav",
        uhHuhCuriousOne: "Audio/Voice/Uh_huh_curious_1.wav",
        uhHuhCuriousTwo: "Audio/Voice/Uh_huh_curious_2.wav",
        uhHuhCuriousThree: "Audio/Voice/Uh_huh_curious_3.wav",
        uhHuhQuestionable: "Audio/Voice/Uh_huh_questionable.wav",
        ummOne: "Audio/Voice/Umm_1.wav"
    };
    // define locations as key-object-pairs, the objects with the properties name, background and an optional foreground
    AV.locations = {
        city: {
            name: "CloudyCity",
            background: "Images/Backgrounds/bg_city_cloudy.png"
        },
        bathroom: {
            name: "Bathroom",
            background: "Images/Backgrounds/Bathroom.png"
        },
        bathroomFoggy: {
            name: "BathroomFoggy",
            background: "Images/Backgrounds/Bathroom_Foggy.png"
        },
        apartment: {
            name: "ApartmentExterior",
            background: "Images/Backgrounds/Apartment_Exterior.png"
        },
        dancerBG: {
            name: "DancerBG",
            background: "Images/Backgrounds/bg_dancer.png"
        },
        cafe: {
            name: "OldCafe",
            background: "Images/Backgrounds/Old_Cafe.png"
        },
        encoreKitchen: {
            name: "OldEncoreKitchen",
            background: "Images/Backgrounds/Old_EncoreKitchenA.png"
        },
        encoreRoomDay: {
            name: "OldEncoreRoomDay",
            background: "Images/Backgrounds/Old_EncoreRoomDay.png"
        },
        encoreRoomNight: {
            name: "CloudyCity",
            background: "Images/Backgrounds/Old_EncoreRoomNight.png"
        },
        livingRoom: {
            name: "OldLivingRoom",
            background: "Images/Backgrounds/Old_LivingRoom.png"
        },
        hospital: {
            name: "Hospital",
            background: "Images/Backgrounds/Old_School.png"
        },
        smallApartmentKitchen: {
            name: "SmallApartmentKitchen",
            background: "Images/Backgrounds/Small_Apartment_Kitchen.png"
        },
        trainOld: {
            name: "OldTrain",
            background: "Images/Backgrounds/Old_Train.png"
        },
        trainBeach: {
            name: "TrainBeach",
            background: "Images/Backgrounds/Train_beach.png"
        },
        trainTunnel: {
            name: "TrainTunnel",
            background: "Images/Backgrounds/Train_Tunnel.png"
        }
    };
    // define characters as key-object-pairs, the objects with the properties name, origin and an array if poses, each again with a unique key
    AV.characters = {
        Narrator: {
            name: ""
        },
        // Protagonist: {
        //   name: "Player"
        // },
        Aoi: {
            name: "Aoi",
            origin: AV.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/placeholder_girl.png"
            }
        },
        Ryu: {
            name: "Ryu",
            origin: AV.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Ryu_normal.png"
            }
        },
        Adelinde: {
            name: "Adelinde",
            origin: AV.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                smile: "Images/Characters/Adelinde_smile.png",
                shytalk: "Images/Characters/Adelinde_shytalk.png",
                motionless: "Images/Characters/Adelinde_motionless.png"
            }
        },
        Doctor: {
            name: "Doktor Ryu",
            origin: AV.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Ryu_normal.png"
            }
        }
    };
    // data I want to save
    AV.dataForSave = {
        score: 0,
        Protagonist: {
            name: "Player"
        }
    };
    let gameMenuOptions = {
        save: "Save",
        load: "Load"
        // close: "Aus"
    };
    // Variable nur zum Löschen für GameMenu
    // let gameMenu: ƒS.Menu;
    async function saveNload(_option) {
        console.log(_option);
        if (_option == gameMenuOptions.load) {
            await AV.ƒS.Progress.load();
        }
        else if (_option == gameMenuOptions.save) {
            await AV.ƒS.Progress.save();
        }
        // if (_option == gameMenuOptions.close)
        //   gameMenu.close();
    }
    // SAVE N LOAD function
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case AV.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await AV.ƒS.Progress.save();
                break;
            case AV.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await AV.ƒS.Progress.load();
                // dataForSave.Protagonist.name = dataForSave.namePlayer;
                break;
        }
    }
    // Audio Test
    window.addEventListener("load", start);
    function start(_event) {
        // to close menu
        // let gameMenu = 
        AV.ƒS.Menu.create(gameMenuOptions, saveNload, "gameMenu");
        // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
        let scenes = [
            // { scene: HearingLoss, name: "Welcome to an almost muted world" },
            // { scene: Friendship, name: "Estimate your value" },
            // { scene: GraphInsertion, name: "Graph Insertion" },
            { scene: AV.SpatialSoundScene, name: "Spatial Sound" }
        ];
        // start the sequence
        AV.ƒS.Progress.setData(AV.dataForSave);
        AV.ƒS.Progress.go(scenes);
    }
})(AV || (AV = {}));
var AV;
(function (AV) {
    class SpatialSound {
        constructor() {
            this.speedCameraRotation = 0.2;
            this.speedCameraTranslation = 0.01;
            this.cntMouseX = new AV.ƒ.Control("MouseX", this.speedCameraRotation);
            this.cntMouseY = new AV.ƒ.Control("MouseY", this.speedCameraRotation);
            // tslint:disable-next-line: typedef
            // private parameter = {
            //   xAmplitude: 0,
            //   zAmplitude: 0,
            //   frequency: 1,
            //   cameraPosition: new ƒ.Vector3(0, 0, 5)
            // };
            this.viewport = new AV.ƒ.Viewport();
            this.update = (_event) => {
                // let time: number = performance.now() / 1000;
                // let position: ƒ.Vector3 = mtxTranslator.translation;
                // if (parameter.xAmplitude)
                //   position.x = parameter.xAmplitude * Math.sin(parameter.frequency * time);
                // if (parameter.zAmplitude)
                //   position.z = parameter.zAmplitude * Math.cos(parameter.frequency * time);
                let panner = this.cmpAudio.getMutatorOfNode(AV.ƒ.AUDIO_NODE_TYPE.PANNER);
                {
                    let sin = Math.sin(Math.PI * panner["coneInnerAngle"] / 360);
                    let cos = Math.cos(Math.PI * panner["coneInnerAngle"] / 360);
                    this.mtxInner.set(AV.ƒ.Matrix4x4.IDENTITY());
                    this.mtxInner.scaling = new AV.ƒ.Vector3(2 * sin, 2 * sin, cos);
                }
                {
                    let sin = Math.sin(Math.PI * panner["coneOuterAngle"] / 360);
                    let cos = Math.cos(Math.PI * panner["coneOuterAngle"] / 360);
                    this.mtxOuter.set(AV.ƒ.Matrix4x4.IDENTITY());
                    this.mtxOuter.scaling = new AV.ƒ.Vector3(2 * sin, 2 * sin, cos);
                }
                // mtxTranslator.translation = position;
                AV.ƒ.AudioManager.default.update();
                this.viewport.draw();
                // printInfo(mtxBody, mtxCamera);
            };
            this.hndPointerMove = (_event) => {
                if (!_event.buttons)
                    return;
                // camera.rotateY(_event.movementX * speedCameraRotation);
                // camera.rotateX(_event.movementY * speedCameraRotation);
                this.cntMouseX.setInput(_event.movementX);
                this.cntMouseY.setInput(_event.movementY);
            };
            this.hndWheelMove = (_event) => {
                let panner = this.cmpAudio.getMutatorOfNode(AV.ƒ.AUDIO_NODE_TYPE.PANNER);
                if (_event.shiftKey || _event.altKey) {
                    let inner = panner["coneInnerAngle"] - (_event.altKey ? _event.deltaY / 10 : 0);
                    inner = Math.min(360, Math.max(inner, 0));
                    this.cmpAudio.setPanner(AV.ƒ.AUDIO_PANNER.CONE_INNER_ANGLE, inner);
                    let outer = panner["coneOuterAngle"] - (_event.shiftKey ? _event.deltaY / 10 : 0);
                    outer = Math.min(360, Math.max(inner, outer));
                    this.cmpAudio.setPanner(AV.ƒ.AUDIO_PANNER.CONE_OUTER_ANGLE, outer);
                }
                else
                    this.camera.distance += _event.deltaY * this.speedCameraTranslation;
            };
            this.move = (_event) => {
                this.mtxTranslator.translateZ(0.1 *
                    (_event.code == AV.ƒ.KEYBOARD_CODE.W ? -1 :
                        _event.code == AV.ƒ.KEYBOARD_CODE.S ? 1 :
                            0));
                this.mtxTranslator.translateX(0.1 *
                    (_event.code == AV.ƒ.KEYBOARD_CODE.A ? -1 :
                        _event.code == AV.ƒ.KEYBOARD_CODE.D ? 1 :
                            0));
                this.mtxTranslator.translateY(0.1 *
                    (_event.code == AV.ƒ.KEYBOARD_CODE.X ? -1 :
                        _event.code == AV.ƒ.KEYBOARD_CODE.E ? 1 :
                            0));
                switch (_event.code) {
                    case AV.ƒ.KEYBOARD_CODE.SPACE:
                        this.mtxRotatorX.set(AV.ƒ.Matrix4x4.IDENTITY());
                        this.mtxRotatorY.set(AV.ƒ.Matrix4x4.IDENTITY());
                        this.mtxTranslator.set(AV.ƒ.Matrix4x4.IDENTITY());
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
                    case AV.ƒ.KEYBOARD_CODE.ARROW_RIGHT:
                        this.mtxRotatorY.rotateY(5);
                        break;
                    case AV.ƒ.KEYBOARD_CODE.ARROW_LEFT:
                        this.mtxRotatorY.rotateY(-5);
                        break;
                    case AV.ƒ.KEYBOARD_CODE.ARROW_UP:
                        this.mtxRotatorX.rotateX(-5);
                        break;
                    case AV.ƒ.KEYBOARD_CODE.ARROW_DOWN:
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
                    case AV.ƒ.KEYBOARD_CODE.ENTER:
                        //play Sound
                        console.log("Play Audio");
                        if (this.cmpAudio.isPlaying)
                            this.cmpAudio.play(false);
                        else
                            this.cmpAudio.play(true);
                        break;
                }
            };
        }
        start() {
            this.out = document.querySelector("output");
            const mtrWhite = new AV.ƒ.Material("White", AV.ƒ.ShaderUniColor, new AV.ƒ.CoatColored(AV.ƒ.Color.CSS("white")));
            const mtrGrey = new AV.ƒ.Material("White", AV.ƒ.ShaderUniColor, new AV.ƒ.CoatColored(AV.ƒ.Color.CSS("slategrey")));
            const inner = new AV.ƒAid.Node("Inner", AV.ƒ.Matrix4x4.IDENTITY(), mtrWhite, new AV.ƒ.MeshPyramid());
            const outer = new AV.ƒAid.Node("Outer", AV.ƒ.Matrix4x4.IDENTITY(), mtrGrey, new AV.ƒ.MeshPyramid());
            const mtxMesh = inner.mtxMeshPivot;
            mtxMesh.rotateX(-90);
            mtxMesh.translateZ(1, false);
            outer.mtxMeshPivot.set(inner.mtxMeshPivot);
            const speaker = new AV.ƒAid.Node("Speaker", AV.ƒ.Matrix4x4.IDENTITY());
            // speaker.addChild(inner);
            // speaker.addChild(outer);
            // speaker.addChild(new ƒAid.NodeCoordinateSystem("SpeakerSystem", ƒ.Matrix4x4.SCALING(ƒ.Vector3.ONE(2))));
            const rotator = new AV.ƒAid.Node("Rotator", AV.ƒ.Matrix4x4.IDENTITY());
            const translator = new AV.ƒAid.Node("Translator", AV.ƒ.Matrix4x4.IDENTITY());
            rotator.addChild(speaker);
            translator.addChild(rotator);
            this.mtxRotatorX = speaker.mtxLocal;
            this.mtxRotatorY = rotator.mtxLocal;
            this.mtxTranslator = translator.mtxLocal;
            this.mtxInner = inner.mtxLocal;
            this.mtxOuter = outer.mtxLocal;
            // audio setup
            const audio = new AV.ƒ.Audio(AV.sound.nightclub);
            this.cmpAudio = new AV.ƒ.ComponentAudio(audio, true);
            speaker.addComponent(this.cmpAudio);
            this.cmpAudio.setPanner(AV.ƒ.AUDIO_PANNER.CONE_OUTER_ANGLE, 180);
            this.cmpAudio.setPanner(AV.ƒ.AUDIO_PANNER.CONE_INNER_ANGLE, 30);
            AV.ƒ.Debug.log(this.cmpAudio.getMutatorOfNode(AV.ƒ.AUDIO_NODE_TYPE.SOURCE));
            AV.ƒ.Debug.log(this.cmpAudio.getMutatorOfNode(AV.ƒ.AUDIO_NODE_TYPE.PANNER));
            AV.ƒ.Debug.log(this.cmpAudio.getMutatorOfNode(AV.ƒ.AUDIO_NODE_TYPE.GAIN));
            // camera setup
            const cmpCamera = new AV.ƒ.ComponentCamera();
            this.camera = new AV.ƒAid.CameraOrbit(cmpCamera, 3, 80, 0.1, 20);
            this.camera.nodeCamera.addComponent(new AV.ƒ.ComponentAudioListener());
            this.camera.axisRotateX.addControl(this.cntMouseY);
            this.camera.axisRotateY.addControl(this.cntMouseX);
            // scene setup
            const graph = new AV.ƒ.Node("Graph");
            // graph.addChild(new ƒAid.NodeCoordinateSystem());
            graph.addChild(translator);
            graph.addChild(this.camera);
            // const viewport: ƒ.Viewport = new ƒ.Viewport();
            const canvas = document.querySelector("#canvasSpatialSound");
            this.viewport.initialize("Viewport", graph, cmpCamera, canvas);
            AV.ƒ.AudioManager.default.listenTo(graph);
            AV.ƒ.AudioManager.default.listenWith(this.camera.nodeCamera.getComponent(AV.ƒ.ComponentAudioListener));
            // setup event handling
            this.viewport.setFocus(true);
            this.viewport.activatePointerEvent("\u0192pointermove" /* MOVE */, false);
            this.viewport.activateWheelEvent("\u0192wheel" /* WHEEL */, false);
            this.viewport.addEventListener("\u0192pointermove" /* MOVE */, this.hndPointerMove);
            this.viewport.addEventListener("\u0192wheel" /* WHEEL */, this.hndWheelMove);
            canvas.addEventListener("mousedown", canvas.requestPointerLock);
            canvas.addEventListener("mouseup", () => document.exitPointerLock());
            this.startInteraction(this.viewport);
            AV.ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, this.update);
            AV.ƒ.Loop.start();
        }
        startInteraction(_viewport) {
            _viewport.activateKeyboardEvent("\u0192keydown" /* DOWN */, true);
            _viewport.addEventListener("\u0192keydown" /* DOWN */, this.move);
        }
    }
    AV.SpatialSound = SpatialSound;
})(AV || (AV = {}));
//# sourceMappingURL=AV.js.map