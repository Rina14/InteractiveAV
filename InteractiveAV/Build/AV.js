"use strict";
var AV;
(function (AV) {
    async function HearingLoss() {
        console.log("Start Hearing Loss");
        let cmpAudio;
        let distortion = AV.ƒ.AudioManager.default.createWaveShaper();
        let audioCutie;
        let audioDrop;
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
                T0010: "<i>Ah, das ist Adelinde. Ist schon wieder eine Weile her, seit ich sie gesehen habe.</i>",
                T0011: "<i>...und ich dachte mit Hörgeräten würde sich diese Unklarheit eigentlich erledigen, aber irgendwie scheint dem doch nicht so.</i>"
            },
            Protagonist: {
                T0000: "Wie bitte?",
                T0001: "Und das bedeutet?",
                T0002: "Verstehe... aber dies ist nur kurzfristig, oder?",
                T0003: "Koch- was?",
                T0004: "Wie bitte?",
                T0005: "Oh, sorry, ja, da gibt es tatsächlich etwas, was ich dir gerne erzählen würde.",
                T0006: "Ehrlich gesagt bist du die Erste, die es erfährt... Naja abgesehen von meinen Eltern.",
                T0007: "So spektakulär ist es eigentlich nicht, denke ich.",
                T0008: "Ich trage nun Hörgeräte bzw. ich bin schwerhörig geworden.",
                T0009: "Nein, keine Sorge. Ich...",
                T0010: "Hm, klar. Ich habe sonst nicht wirklich etwas vor heute."
            },
            Adelinde: {
                T0000: "Hey, ",
                T0001: "Wie geht### dir ####? Irgendwelche ######?",
                T0002: "Ich habe gefragt, ob irgendetwas Neues bei dir passiert ist.",
                T0003: "Schieß los!",
                T0004: "Uhh, ich fühle mich geehrt.",
                T0005: "Also? Was möchtest du mir anv###?~",
                T0006: "Ohh, hattest du etwa einen Unfall und ich weiß nichts davon??",
                T0007: "Ahh, entschuldige, dass ich dich unterbreche, aber ich muss hier aussteigen.",
                T0008: "Ich müsste noch schnell einkaufen. Möchtest du mitkommen? Danach könnten wir uns unterhalten, versprochen!",
                T0009: "Super, danke!"
            },
            Doctor: {
                T0000: "Du hast eine hochgradige Schallempfindungsschwerhörigkeit.",
                T0001: "Das bedeutet, dass du hohe Frequenzen nicht mehr hören kannst.\
                Kurz gesagt, hast du einen vollständigen Hörverlust dieser.",
                T0002: "Nun, das ist nicht direkt 'heilbar', jedoch bis zu einem gewissen Grad kompensierbar.",
                T0003: "Du wirst lernen müssen, mit dieser Schwerhörigkeit umzugehen.",
                T0004: "Aber keine Sorge, dafür gibt es Hörgeräte und notfalls \
                Cochlea-Implantate. Es wird eine Weile dauern, bis du dich daran gewöhnt hast.",
                T0005: "Cochlea-Implantate. Die Cochlea ist die Hörschnecke, in der die feinen Haarzellen sitzen.\
                Hier kann ein Implantat eingepflanzt werden, falls Hörgeräte nicht mehr die gewünschte Leistung erbringen.",
                T0006: ""
            }
        };
        // Hide dB-Meter with its text
        document.getElementById("avg-level").hidden = true;
        document.getElementById("avg-level-text").hidden = true;
        document.getElementById("dB").hidden = true;
        // for moments with individual delays
        let signalDelay40 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(40)]);
        let signalDelay2 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(2)]);
        let signalDelay1 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(1)]);
        // let pressK: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.getKeypress(ƒ.KEYBOARD_CODE.K)]);
        // await pressK();
        // text speed in milliseconds, while paragraphs in seconds
        AV.ƒS.Speech.setTickerDelays(20, 2);
        AV.ƒS.Speech.hide();
        // dataForSave.started = true;
        AV.ƒS.Text.addClass("start");
        await AV.ƒS.Text.print("Herzlich Willkommen!<br><br>Hast du dich einmal gefragt, \
    wie es wohl wäre, wenn du plötzlich schwerhörig wirst? Was würde sich für dich verändern?\
    Welche neuen Herausforderungen kämen auf dich zu? \
    Hier verschaffst du dir einen kleinen Einblick und tauchst in eine für dich fast stumme Welt ein.\
    <p>Viel Spaß beim Spielen.</p><br>\
    <p><b>Speichern: F8</p><p><b>Laden: F9</p><p><b>Weiter mit: Leertaste, LMC</p>");
        AV.ƒS.Text.close();
        AV.ƒS.Speech.show();
        // GEMU STARTO
        // Duration in seconds
        AV.ƒS.Sound.play(AV.sound.again, 0.05, true);
        AV.ƒS.Sound.fade(AV.sound.again, 0.2, 4);
        // Start the Scene!
        AV.ƒS.Speech.hide();
        await AV.ƒS.Location.show(AV.locations.trainBeach);
        await AV.ƒS.update(AV.transitions.wet.duration, AV.transitions.wet.alpha, AV.transitions.wet.edge);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0000);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0001);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0002);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0003);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0004);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0005);
        AV.ƒS.Speech.hide();
        await AV.ƒS.Location.show(AV.locations.hospital);
        await AV.ƒS.update(AV.transitions.flash.duration, AV.transitions.flash.alpha, AV.transitions.flash.edge);
        await AV.ƒS.Character.show(AV.characters.Doctor, AV.characters.Doctor.pose.normal, AV.ƒS.positions.bottomcenter);
        await AV.ƒS.update(0.5);
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Hallo, ...");
        await AV.ƒS.Speech.tell(null, "<i>Er hat wohl meinen Namen vergessen.</i>");
        // Name field - Player can type his name in here
        AV.dataForSave.Protagonist.name = await AV.ƒS.Speech.getInput();
        console.log(AV.dataForSave.Protagonist.name);
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Hallo, " + AV.dataForSave.Protagonist.name + ".");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Du hast eine Sc###empf####keit.");
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
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Außerdem möchte ich dir noch ein neu entwickeltes Gerät mitgeben.\
    Damit kannst du verschiedene Töne abspielen und anschließend bewerten, wie gut du diese hörst.");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Dafür wirst du noch genug Zeit haben. Probiere es einfach mal aus.\
    Denn du solltest dich nun häufiger damit beschäftigen, wie du deinen Alltag meistern möchtest.");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Vor allen Dingen dein Studium.");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Es könnte gut sein, dass es hier zu Schwierigkeiten kommt.");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Auch hierfür gibt es spezielle Geräte wie eine FM-Anlage, \
    die dir das Hören vereinfachen soll.");
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Was mache ich aber nun bei Sprachprüfungen?", true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Da du ein relativ niedriges Sprachverständnis besitzt, gibt es auch hierfür Rechte für Schwerhörige.\
    Nicht nur, dass du bei einem Grad der Behinderung (GdB) ab 50 einen Schwerbehindertenausweis beantragen kannst...");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Sondern, dass du auch ein Recht auf Prüfungszeitverlängerung hast.");
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Das klingt theoretisch sehr fair. Ich bin aber irgendwie sicher, dass ich hier noch auf großes Unverständnis treffen werden, wenn ich an ganz bestimmte Lehrende denke...", true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Dies ist dein gutes Recht und da hat dir auch niemand reinzureden. \
    Diese können es außerdem ganz und gar nicht nachvollziehen, wie es ist, schwerhörig zu sein.");
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Jedoch solltest du das mit deiner Hochschule klären. \
    In der Regel schlägt diese dir dann einen Zeitrahmen vor und entsprechende Maßnahmen für z.B. Hörverständnis-Aufgaben oder Ähnliches.");
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Alles klar. Vielen Dank Doktor Ryu!", true, "Player");
        // Text print für Audio GraphInsertion
        await AV.ƒS.Text.print("Teste das Gerät, das dir der Doktor mitgegeben hat. \
    <br>Benutze hierfür jeweils eine beliebige Pfeiltaste und anschließend Enter.<br>Dann ertönen verschiedene Sounds und du kannst schauen, wie gut du diese hörst.\
    In der Regel sollte ein Mensch ohne Hörprobleme diese klar und deutlich wahrnehmen. Bei Hörgeschädigten kann es sein, dass diese gar nicht wahrgenommen werden.");
        // Audio Funktion GraphInsertion
        AV.ƒS.Sound.fade(AV.sound.again, 0, 2);
        enableAudioTest();
        await AV.ƒS.Character.hide(AV.characters.Doctor);
        AV.ƒS.Speech.hide();
        await AV.ƒS.update(1);
        await signalDelay40();
        disableAudioTest();
        AV.ƒS.Sound.play(AV.sound.again, 0.05, true);
        AV.ƒS.Sound.fade(AV.sound.again, 0.2, 4);
        await AV.ƒS.Location.show(AV.locations.trainBeach);
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
        let trainMeetingWithAdelinde = await AV.ƒS.Menu.getInput(meetAdelinde, "choices");
        switch (trainMeetingWithAdelinde) {
            case meetAdelinde.iGreetBack:
                AV.ƒS.Sound.play(AV.sound.click, 1);
                //continue writing on this path here
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Hi, Ade. Lange nicht gesehen, was?", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Was?! Wirklich?? Ich dachte wir-... Ahh tut mir leid.");
                await AV.ƒS.Speech.tell(null, "<i>Typisch, Ade. Sie ist schon immer sehr leichtgläubig gewesen.</i>");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Beruhige dich. Keine Sorge, ist nur eine Woche her, seit wir das letzte mal gesprochen haben.", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Ohh, ich dachte schon mein Gedächtnis lässt mich im Stich. Dann ist ja gut.");
                AV.ƒS.Speech.clear();
                AV.ƒS.Speech.hide();
                await AV.ƒS.update(1);
                break;
            case meetAdelinde.iIgnoreHer:
                AV.ƒS.Sound.play(AV.sound.click, 1);
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Hallo?");
                await AV.ƒS.Speech.tell(null, "<i>Vielleicht sollte ich doch-</i>");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Ignorierst du mich etwa?");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Was? Nein ich-", true, "Player");
                AV.ƒS.Character.hide(AV.characters.Adelinde);
                await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.smile, AV.ƒS.positions.bottomcenter);
                await AV.ƒS.update(0.1);
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Ich mache doch nur Witze, " + AV.dataForSave.Protagonist.name + ".");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Du kennst mich doch.");
                await AV.ƒS.Character.hide(AV.characters.Adelinde);
                await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.ƒS.positions.bottomcenter);
                await AV.ƒS.update(0.1);
                AV.ƒS.Speech.clear();
                AV.ƒS.Speech.hide();
                await AV.ƒS.update(1);
                break;
            case meetAdelinde.iJustLookAtHer:
                AV.ƒS.Sound.play(AV.sound.click, 1);
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Haaalloooo.");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Erdeee an " + AV.dataForSave.Protagonist.name + "!");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Angekommen.", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Gut, ich dachte ich verliere dich schon an die Aliens.");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Keine Sorge, so schnell bist du mich nicht los.", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "Schad-..");
                // Adelinde laugh mit Augen zu anzeigen
                // await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.laugh, ƒS.positions.bottomcenter);
                // await ƒS.update(0.1);
                await AV.ƒS.Speech.tell(AV.characters.Adelinde, "..Ich meine puh, ein Glück.");
                await AV.ƒS.Speech.tell(null, "<i>Adelinde, wie sie lebt und leibt.</i>");
                await AV.ƒS.Character.hide(AV.characters.Adelinde);
                await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.ƒS.positions.bottomcenter);
                await AV.ƒS.update(0.1);
                AV.ƒS.Speech.clear();
                AV.ƒS.Speech.hide();
                await AV.ƒS.update(1);
                break;
        }
        // await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positions.bottomcenter);
        // await ƒS.update(0.5);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0001);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0004, true, "Player");
        // await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positions.bottomcenter);
        // await ƒS.update(0.1);
        await AV.ƒS.Character.hide(AV.characters.Adelinde);
        await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.smile, AV.ƒS.positions.bottomcenter);
        await AV.ƒS.update(0.1);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0002);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0005, true, "Player");
        await AV.ƒS.Character.hide(AV.characters.Adelinde);
        await AV.ƒS.Location.show(AV.locations.trainTunnel);
        await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.ƒS.positions.bottomcenter);
        await AV.ƒS.update(0.1);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0003);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0006, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0004);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0007, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0005);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0011);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0008, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0006);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0009, true, "Player");
        //  BLACK
        AV.ƒS.Speech.hide();
        AV.ƒS.Character.hide(AV.characters.Adelinde);
        await AV.ƒS.update(0.2);
        await AV.ƒS.Location.show(AV.locations.black);
        await AV.ƒS.update(0.5);
        AV.ƒS.Text.setClass("black");
        await AV.ƒS.Text.print("<br><br><br><br>Nächster Halt: Marktgasse.<br>Ausstieg in Fahrtrichtung rechts.");
        AV.ƒS.Text.close();
        await AV.ƒS.update(1);
        await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.smile, AV.ƒS.positions.bottomcenter);
        await AV.ƒS.Location.show(AV.locations.trainTunnel);
        await AV.ƒS.update(0.1);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0007);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0008);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0010, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0009);
        AV.ƒS.Character.hide(AV.characters.Adelinde);
        AV.ƒS.Speech.clear();
        AV.ƒS.Speech.hide();
        // Musik ausblenden
        AV.ƒS.Sound.fade(AV.sound.again, 0, 1);
        await signalDelay2();
        // enableAudioTest();
        // disableAudioTest();
        // Audio test function
        async function enableAudioTest() {
            window.addEventListener("keydown", handleKeydownForAudio);
            audioCutie = new AV.ƒ.Audio(AV.sound.cutie);
            // await audioBeep.asyncLoad("Sound/Beep.mp3")
            audioDrop = new AV.ƒ.Audio(AV.sound.drop);
            // await audioUfo.asyncLoad("Sound/Beat.mp3")
            cmpAudio = new AV.ƒ.ComponentAudio(audioCutie, false, false);
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
                    AV.ƒ.Debug.log("Cutie");
                    cmpAudio.setAudio(audioCutie);
                    break;
                case AV.ƒ.KEYBOARD_CODE.ARROW_RIGHT:
                    AV.ƒ.Debug.log("Drop");
                    cmpAudio.setAudio(audioDrop);
                    break;
            }
        }
        function disableAudioTest() {
            window.removeEventListener("keydown", handleKeydownForAudio);
            console.log("Audio Test disabled");
        }
    }
    AV.HearingLoss = HearingLoss;
})(AV || (AV = {}));
var AV;
(function (AV) {
    async function StrangerWoman() {
        console.log("Start StrangerWoman");
        let text = {
            Narrator: {
                T0000: "<i>Dann mal r-...</i>",
                T0001: "<i>Manchen ist der Begriff Höflichkeit wohl ein Fremdwort.</i>",
                T0002: "<i>Vielleicht erzähle ich es ihr später. Aber erst einmal kaufen wir ein.</i>"
            },
            Protagonist: {
                T0000: "Alles klar. Dann bis gleich, Ade.",
                T0001: "Bis gleich.",
                T0002: "Ja?",
                T0003: "Das sehe ich.",
                T0004: "Ach, schon gut. Die hat wohl eigene Probleme."
            },
            Adelinde: {
                T0000: "Auf geht's! Ich hole noch schnell einen Einkaufswagen, du kannst schon einmal reingehen.",
                T0001: "Bis gleich.",
                T0002: "Da bin ich wieder.",
                T0003: "Entschuldige, das hat etwas länger gedauert. Ich habe eine Bekannte getroffen und mich noch etwas unterhalten.",
                T0004: "Ich habe dich gesehen, wie du mit dieser Frau geredet hast. Ist alles in Ordnung?",
                T0005: "Sie schien irgendwie sauer.",
                T0006: "Hmm. So richtig gefällt mir diese Antwort nicht.",
                T0007: "Aber nun gut."
            },
            StrangerWomen: {
                T0000: "So ein Mist!",
                T0001: "Ahh, hey du da. Pass doch auf!",
                T0002: "Aus dem Weg, ich hab's eilig.",
                T0003: ""
            },
            Elaine: {
                T0000: "",
                T0001: ""
            }
        };
        // Hide dB-Meter with its text
        document.getElementById("avg-level").hidden = true;
        document.getElementById("avg-level-text").hidden = true;
        document.getElementById("dB").hidden = true;
        // Zum Rumnavigieren zur/von Soundquelle
        // let spatialSound: SpatialSound = new SpatialSound();
        // spatialSound.start();
        // for moments with individual delays
        let signalDelay2 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(2)]);
        let signalDelay1 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(1)]);
        // let pressK: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.getKeypress(ƒ.KEYBOARD_CODE.K)]);
        // await pressK();
        AV.ƒS.Speech.hide();
        AV.ƒS.Sound.play(AV.sound.mission, 0.1, true);
        AV.ƒS.Sound.fade(AV.sound.mission, 0.3, 4);
        await AV.ƒS.Location.show(AV.locations.oldStreet);
        await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.ƒS.positions.bottomcenter);
        await AV.ƒS.update(1);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0000 + AV.dataForSave.Protagonist.name + ".");
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0000, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0001);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0001, true, "Player");
        await AV.ƒS.Character.animate(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.midToOutOfCanvas());
        await AV.ƒS.update(2);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0000);
        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, text.StrangerWomen.T0000);
        //  OPTIONAL: Kamera wackeln lassen
        AV.ƒS.Sound.play(AV.sound.punch, 1);
        await AV.horizontalShake();
        await AV.ƒS.Character.show(AV.characters.StrangerWoman, AV.characters.StrangerWoman.pose.mad, AV.ƒS.positionPercent(30, 100));
        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, text.StrangerWomen.T0001);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0002, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, text.StrangerWomen.T0002);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0001);
        await signalDelay1();
        AV.ƒS.Sound.play(AV.sound.click, 1);
        let meetElaine = {
            iReplyIronically: "Ironisch antworten.",
            iObey: "Der Frau aus dem Weg gehen.",
            imBeingRude: "Im selben Ton antworten.",
            iLookForHelp: "Verständnislos in die Gegend schauen."
        };
        let rudeStrangerWoman = await AV.ƒS.Menu.getInput(meetElaine, "choices");
        switch (rudeStrangerWoman) {
            case meetElaine.iReplyIronically:
                AV.ƒS.Sound.play(AV.sound.click, 1);
                //continue writing on this path here
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Snd Sie sicher, dass Sie mich meinen?", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Wie bitte?!");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Sie haben mich schon richtig verstanden.", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "#### von dir, wie ####### du?");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Was?", true, "Player");
                await AV.ƒS.Speech.tell(null, "<i>Mist.</i>");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Hörst du schlecht?");
                // A choice within a choice to reply to Elaine
                let replyToElaine = {
                    iSayYes: "Bejahen.",
                    iSayNo: "Verneinen."
                };
                let talkBack = await AV.ƒS.Menu.getInput(replyToElaine, "choices");
                switch (talkBack) {
                    case replyToElaine.iSayYes:
                        AV.ƒS.Sound.play(AV.sound.click, 1);
                        //continue writing on this path here
                        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Und wenn dem so wäre?", true, "Player");
                        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Hmm, dann hast du mich wohl nicht verstanden.");
                        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Habe ich tatsächlich nicht.", true, "Player");
                        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "...");
                        await AV.ƒS.Speech.tell(null, "<i>Ob das ein Fehler war?</i>");
                        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Verstehe.");
                        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Schon gut. Vergiss es.");
                        await AV.ƒS.Speech.tell(null, "<i>Ja.. hoffentlich zieht sie jetzt ab..</i>");
                        await AV.ƒS.Character.hide(AV.characters.StrangerWoman);
                        await AV.ƒS.Character.show(AV.characters.StrangerWoman, AV.characters.StrangerWoman.pose.normal, AV.ƒS.positionPercent(30, 100));
                        await AV.ƒS.update(0.1);
                        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Wobei...");
                        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Entschuldige bitte, für eben. Ich habe mich nur verlaufen und finde einfach diese ####straße nicht.");
                        await AV.ƒS.Speech.tell(null, "<i>Hmm.. naja, was soll's.</i>");
                        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Könnten Sie das bitte wiederholen?", true, "Player");
                        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Ähh, ####straße. Weißt du wo das ist?");
                        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Tut mir leid, ich habe den Namen der Straße immer noch nicht verstanden..", true, "Player");
                        await AV.ƒS.Character.hide(AV.characters.StrangerWoman);
                        await AV.ƒS.Character.show(AV.characters.StrangerWoman, AV.characters.StrangerWoman.pose.mad, AV.ƒS.positionPercent(30, 100));
                        await AV.ƒS.update(0.1);
                        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Machst du dich etwa über mich lustig?");
                        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Nein, wirklich nicht. Ich höre einfach nur schlecht.", true, "Player");
                        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "SANDSTRASSE!!");
                        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Achso. Das weiß ich leider nicht.", true, "Player");
                        await AV.ƒS.Character.hide(AV.characters.StrangerWoman);
                        await AV.ƒS.Character.show(AV.characters.StrangerWoman, AV.characters.StrangerWoman.pose.normal, AV.ƒS.positionPercent(30, 100));
                        await AV.ƒS.update(0.1);
                        AV.ƒS.Speech.clear();
                        AV.ƒS.Speech.hide();
                        await AV.ƒS.update(1);
                        break;
                    case replyToElaine.iSayNo:
                        AV.ƒS.Sound.play(AV.sound.click, 1);
                        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Nein.", true, "Player");
                        await AV.ƒS.Speech.tell(null, "<i>Der muss ich gar nichts sagen. Soll sie doch denken, ich veräppel sie...</i>");
                        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Aha.");
                        AV.ƒS.Speech.clear();
                        AV.ƒS.Speech.hide();
                        await AV.ƒS.update(1);
                        break;
                }
                // continue choice one - reply ironically
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Na, toll.. Wo muss ich nur hin?");
                await AV.ƒS.Character.hide(AV.characters.StrangerWoman);
                await AV.ƒS.update(0.2);
                await AV.ƒS.Speech.tell(null, "<i>Und da geht sie einfach weg. Cool.</i>");
                await AV.ƒS.Speech.tell(null, "<i>Oh man. Zum Glück sind nicht alle so drauf.</i>");
                await AV.ƒS.Speech.tell(null, "<i>Allerdings ist das trotzdem ein blödes Gefühl..</i>");
                AV.ƒS.Speech.clear();
                AV.ƒS.Speech.hide();
                await AV.ƒS.update(1);
                break;
            case meetElaine.iObey:
                AV.ƒS.Sound.play(AV.sound.click, 1);
                await AV.ƒS.Speech.tell(null, "<i>Ich habe gerade so gar keine Lust auf Stress.</i>");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Geht doch.");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Naja, Sie waren diejenige, die mich angerempelt hat und nicht umgekehrt.", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Stell dich nicht so an.");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Hören Sie, ich möchte keinen Streit anfachen.", true, "Player");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Wieso gehen Sie nicht einfach weiter?", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Sag mir nicht ### ich zu tun ####, verstanden?");
                await AV.ƒS.Speech.tell(null, "<i>Gut, das habe ich noch verstanden. Hoffentlich geht sie jetzt einfach.</i>");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "### ##### ### ####.");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Was?", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "ich sagte: 'einen ###### #### ####'.");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Einen was?", true, "Player");
                await AV.ƒS.Character.hide(AV.characters.StrangerWoman);
                await AV.ƒS.Character.show(AV.characters.StrangerWoman, AV.characters.StrangerWoman.pose.innocent, AV.ƒS.positionPercent(30, 100));
                await AV.ƒS.update(0.1);
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Bemitleidenswert.");
                await AV.ƒS.Speech.tell(null, "<i>Was zum Henker war das denn bitte?! Aber sonst geht's der Frau gut?</i>");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Blöde Ziege...", true, "Player");
                await AV.ƒS.Character.hide(AV.characters.StrangerWoman);
                await AV.ƒS.Character.show(AV.characters.StrangerWoman, AV.characters.StrangerWoman.pose.mad, AV.ƒS.positionPercent(30, 100));
                await AV.ƒS.update(0.1);
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Das habe ich gehört.");
                await AV.ƒS.Speech.tell(null, "<i>Ups.</i>");
                await AV.ƒS.Speech.tell(null, "<i>Ihrem Verhalten nach zu urteilen, hat sie mich aber ganz sicher beleidigt..</i>");
                await AV.ƒS.Speech.tell(null, "<i>Ihre Haltung und ihr Blick sprechen auch dafür!</i>");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Naja, wenn Sie mich beleidigen, haben Sie das wohl verdient. Meinen Sie nicht?", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Ich meinte 'EINEN SCHÖNEN TAG NOCH.'");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "...", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Aber hauptsache gleich beleidigend werden.");
                await AV.ƒS.Character.hide(AV.characters.StrangerWoman);
                await AV.ƒS.update(0.1);
                await AV.ƒS.Speech.tell(null, "<i>Ich fühle mich schrecklich..</i>");
                AV.ƒS.Speech.clear();
                AV.ƒS.Speech.hide();
                await AV.ƒS.update(1);
                break;
            case meetElaine.imBeingRude:
                AV.ƒS.Sound.play(AV.sound.click, 1);
                await AV.ƒS.Speech.tell(null, "<i>Aber wenn man mir schon so kommt...</i>");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Nö.", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Wie bitte?! So kannst du nicht mit mir reden!");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Hören Sie sich eigentlich selbst zu?", true, "Player");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Sie hätten mich auch einfach nett darum bitten können.", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Tsk.");
                AV.ƒS.Character.hide(AV.characters.StrangerWoman);
                await AV.ƒS.Speech.tell(null, "<i>Und da ist sie auch schon wieder weg... Gut für mich.</i>");
                AV.ƒS.Speech.clear();
                AV.ƒS.Speech.hide();
                await AV.ƒS.update(1);
                break;
            case meetElaine.iLookForHelp:
                AV.ƒS.Sound.play(AV.sound.click, 1);
                await AV.ƒS.Speech.tell(null, "<i>Komm schon, Adelinde. Wo bleibst du.</i>");
                await AV.ƒS.Speech.tell(null, "<i>Ach, sie spricht noch mit einer Bekannten.</i>");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "...", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Hallo?");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Hi.", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Das ist alles?");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Wollen Sie sich nicht entschuldigen?", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Guter Witz.");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Bitte?", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Das ist ja wohl deine Aufgabe.");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Ah ja, wirklich? Angerempelt haben Sie mich aber.", true, "Player");
                await AV.ƒS.Speech.tell(null, "<i>Unglaublich, dass mir das ausgerechnet heute passieren muss.</i>");
                await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, "Tsk.");
                await AV.ƒS.Character.hide(AV.characters.StrangerWoman);
                await AV.ƒS.update(0.5);
                await AV.ƒS.Speech.tell(null, "<i>Na, Gott sei Dank ist sie gegangen. Wäre blöd gelaufen, wenn ich etwas falsch verstanden hätte.</i>");
                AV.ƒS.Speech.clear();
                AV.ƒS.Speech.hide();
                await AV.ƒS.update(1);
                break;
        }
        await AV.ƒS.Character.animate(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.outOfCanvasToMid());
        await AV.ƒS.update(2);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0002);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0003, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0003);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0004);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0005);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0004, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0006);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0007);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0002);
        AV.ƒS.Speech.hide();
        AV.ƒS.Character.hide(AV.characters.Adelinde);
        await AV.ƒS.update(1);
        await AV.ƒS.Location.show(AV.locations.black);
        await AV.ƒS.update(2);
        AV.ƒS.Text.setClass("black");
        await AV.ƒS.Text.print("Ihr seid zusammen einkaufen gegangen, du hast dir ein paar Snacks besorgt und dich abschließend auf den Heimweg gemacht.");
        AV.ƒS.Text.close();
        await AV.ƒS.update(1);
        // ƒS.Inventory.add(items.Chips);
        // ƒS.Inventory.add(items.Lollipops);
        // await ƒS.Inventory.open();
        AV.ƒS.Speech.clear();
        AV.ƒS.Speech.hide();
        await signalDelay2();
        AV.ƒS.Sound.fade(AV.sound.mission, 0, 1);
    }
    AV.StrangerWoman = StrangerWoman;
})(AV || (AV = {}));
var AV;
(function (AV) {
    async function Home() {
        console.log("Start Home Scene");
        let text = {
            Narrator: {
                T0000: "<i>Endlich wieder zu Hause.</i>",
                T0001: "<i>Das war ja mal ein langer Tag. Mal sehen, wie sich die Hörgeräte so im Alltag machen.</i>",
                T0002: "<i>Aber erst einmal heißt es Hörgeräte rausmachen und duschen gehen.</i>",
                T0003: "<i>Die Welt scheint so friedlich, wenn man fast nichts hört.</i>",
                T0004: "<i>Allerdings auch irgendwie leblos.</i>",
                T0005: "<i>Ah, Mama ist auch wieder da. Simmt ja, sie hatte Spätschicht.</i>",
                T0006: "<i>Hm.. Zum Fenster habe ich tatsächlich nicht geschaut, aber...</i>",
                T0007: "<i>Tatsächlich. Die Vase ist noch auf dem Regal umgefallen und zerbrochen.</i>",
                T0008: "<i>Ich soll also versuchen normal zu sprechen, hmm. Ich versuche gleich mal die 80dB oder höher zu erreichen, um selbst einen Eindruck zu bekommen!</i>",
                T0009: "<i>Die Premiere der berühmten Tänzerin!!! Das hätte ich fast vergessen. Ich bin ja morgen mit meinen Freunden verabredet.</i>",
                T0010: "<i>Dann aber ab ins Bett jetzt. Es ist schon spät. Ich bin gespannt wie das morgen wird.</i>"
            },
            Protagonist: {
                T0000: "...",
                T0001: "Das tut guuut.",
                T0002: "La la la.",
                T0003: "Puh. Noch schnell anziehen und dann ab ins Bett.",
                T0004: "Klar. Wieso fragst du?",
                T0005: "Wirklich?! Entschuldige bitte, ich habe dich gar nicht gehört. Nicht einmal als du von der Arbeit heimgekommen bist.",
                T0006: "Was meinst du mit 'zerbrochen'?",
                T0007: "Das hätte ich doch sicherlich bemerkt.",
                T0008: "Na gut.",
                T0009: "Meinetwegen, aber...",
                T0010: "Oh.",
                T0011: "Tut mir leid. Das habe ich wirklich nicht mitbekommen.",
                T0012: "Kannst du das bitte wiederholen?",
                T0013: "Ah, ja. Das hoffe ich sehr.",
                T0014: "Ach, echt?",
                T0015: "Gute Nacht, ich dich auch.",
                T0016: "Warte-..."
            },
            Anastasia: {
                T0000: "Alles ### ####?",
                T0001: "Schätzchen?",
                T0002: "Hey, du. Alles ok?",
                T0003: "Weil ich dich mehrmals gerufen habe. Ist etwas zerbrochen?",
                T0004: "Es hat sich so angehört als sei die Vase wegen dem Wind heruntergefallen.",
                T0005: "Und ich denke es ist das Beste, wenn wir noch einmal nachsehen.",
                T0006: "Schau' mal da, Liebes.",
                T0007: "Ist schon in ####. Ich denke wir #### da einfach ### #### achten. Das bekommen wir schon hin.",
                T0008: "Ich habe gesagt: Ist schon in Ordnung. Ich denke wir müssen da einfach weiterhin darauf achten und dass wir das schon hinbekommen.",
                T0009: "Du sprichst übrigens sehr laut. Ist dir das eigentlich aufgefallen?",
                T0010: "Ja. Schau' mal hier. Ich habe ein Dezibelmeter auf dem Handy heruntergeladen.",
                T0011: "Wenn ich normal spreche ist das so zwischen 40 und 60dB laut. Bei dir ist das schon deutlich höher.",
                T0012: "Du erreichst ca. 80dB bis 90dB, wenn du ohne Hörgeräte sprichst. Probier' mal.",
                T0013: "Ich würde jetzt aber wirklich schlafen gehen.",
                T0014: "Viel Spaß euch morgen bei der Aufführung. Hab' dich lieb."
            }
        };
        // Hide dB-Meter with its text
        document.getElementById("avg-level").hidden = true;
        document.getElementById("avg-level-text").hidden = true;
        document.getElementById("dB").hidden = true;
        // let spatialSound: SpatialSound = new SpatialSound();
        // spatialSound.start();
        let signalDelay15 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(15)]);
        // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);
        let signalDelay2 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(2)]);
        let signalDelay1 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(1)]);
        // ƒS.Sound.fade(sound.again, 0, 1);
        AV.ƒS.Speech.hide();
        await AV.ƒS.Location.show(AV.locations.livingRoom);
        // await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positionPercent(60, 100));
        await AV.ƒS.update(1);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0000);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0001);
        await AV.ƒS.Location.show(AV.locations.bathroom);
        await AV.ƒS.update(1);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0002);
        await signalDelay2();
        AV.ƒS.Sound.fade(AV.sound.shower, 1, 1, true);
        await AV.ƒS.Location.show(AV.locations.bathroomFoggy);
        await AV.ƒS.update(3);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0000, true, "Player");
        await AV.ƒS.Speech.tell(null, text.Narrator.T0003);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0004);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0001, true, "Player");
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0002, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0000);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0000, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0001);
        await signalDelay2();
        AV.ƒS.Sound.fade(AV.sound.shower, 0, 1);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0003, true, "Player");
        await signalDelay1();
        await AV.ƒS.Location.show(AV.locations.livingRoom);
        await AV.ƒS.update(1);
        await AV.ƒS.Character.show(AV.characters.Anastasia, AV.characters.Anastasia.pose.unsure, AV.ƒS.positions.bottomcenter);
        await AV.ƒS.update(1);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0005);
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0002);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0004, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0003);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0005, true, "Player");
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0006, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0004);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0006);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0007, true, "Player");
        await signalDelay2();
        AV.ƒS.Sound.play(AV.sound.click, 1);
        let answeringMom = {
            iAgree: "Zweifeln.",
            iInsist: "Sie beruhigen und darauf bestehen, dass alles okay ist."
        };
        let brokenVase = await AV.ƒS.Menu.getInput(answeringMom, "choices");
        switch (brokenVase) {
            case answeringMom.iAgree:
                AV.ƒS.Sound.play(AV.sound.click, 1);
                await AV.ƒS.Speech.tell(null, "<i>Jetzt bin ich mir irgendwie unsicher.</i>");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Vielleicht hast du recht.", true, "Player");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Denn jetzt wo du es erwähnst, fällt mir ein, dass da glaube ich irgendetwas war.. aber so richtig darauf geachtet, habe ich ehrlich gesagt nicht.", true, "Player");
                AV.ƒS.Character.hide(AV.characters.Anastasia);
                await AV.ƒS.update(0.2);
                AV.ƒS.Speech.clear();
                AV.ƒS.Speech.hide();
                await AV.ƒS.update(1);
                break;
            case answeringMom.iInsist:
                AV.ƒS.Sound.play(AV.sound.click, 1);
                await AV.ƒS.Speech.tell(null, "<i>Ich glaube sie macht sich einfach zu viele Sorgen.</i>");
                await AV.ƒS.Speech.tell(null, "<i>Meine Situation ist schließlich noch ungewohnt für uns beide.</i>");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Ich denke wirklich, du machst dir zu viele Sorgen.", true, "Player");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Bestimmt hätte ich das bemerkt. Ich würde jetzt aber schlafen gehen.", true, "Player");
                AV.ƒS.Character.hide(AV.characters.Anastasia);
                await AV.ƒS.update(0.2);
                AV.ƒS.Speech.clear();
                AV.ƒS.Speech.hide();
                await AV.ƒS.update(1);
                break;
        }
        await AV.ƒS.Character.show(AV.characters.Anastasia, AV.characters.Anastasia.pose.normal, AV.ƒS.positions.bottomcenter);
        await AV.ƒS.update(0.2);
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0005);
        // Warum sprichst du eigentlich so laut? / Ich habe dir etwas mitgebracht -> Töne ausprobieren
        // await ƒS.Speech.tell(characters.Unknown, text.Anastasia.T0006);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0008, true, "Player");
        await AV.ƒS.Location.show(AV.locations.bathroomFoggy);
        await AV.ƒS.update(0.5);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0009, true, "Player");
        AV.ƒS.Character.hide(AV.characters.Anastasia);
        await AV.ƒS.Character.animate(AV.characters.Anastasia, AV.characters.Anastasia.pose.innocent, AV.midToLeft());
        await AV.ƒS.update(0.2);
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0006);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0010, true, "Player");
        await AV.ƒS.Speech.tell(null, text.Narrator.T0007);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0011, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0007);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0012, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0008);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0013, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Mama, "Das werden wir!");
        await AV.ƒS.Speech.tell(null, "<i>Dafür liebe ich meine Mutter.</i>");
        await AV.ƒS.Location.show(AV.locations.livingRoom);
        await AV.ƒS.update(1);
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0009);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0014, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0010);
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0011);
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0012);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0008);
        await AV.ƒS.Text.print("Bitte lasse für diese Funktion den Zugriff auf dein Mikrofon zu.");
        AV.ƒS.Text.close();
        await AV.ƒS.update(1);
        // Anzeige dB-Meter
        AV.DezibelMeter.activateDecibelMeter();
        await signalDelay15();
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0013);
        await AV.ƒS.Speech.tell(AV.characters.Mama, text.Anastasia.T0014);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0015, true, "Player");
        AV.ƒS.Character.hide(AV.characters.Anastasia);
        await AV.ƒS.update(1);
        AV.DezibelMeter.activateDecibelMeter();
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0016, true, "Player");
        await AV.ƒS.Speech.tell(null, text.Narrator.T0009);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0010);
        // dB-Meter ausschalten
        AV.DezibelMeter.deactivateDecibelMeter();
        AV.ƒS.Speech.clear();
        AV.ƒS.Speech.hide();
        await signalDelay2();
        // ƒS.Sound.fade(sound.mission, 0, 1);
    }
    AV.Home = Home;
})(AV || (AV = {}));
/// <reference types="../../Aid/Build/FudgeAid"/>
var AV;
/// <reference types="../../Aid/Build/FudgeAid"/>
(function (AV) {
    async function Premiere() {
        console.log("Start Premiere Scene");
        let text = {
            Narrator: {
                T0000: "<i>Wenn man vom Teufel spricht...</i>",
                T0001: "<i>Naja egal, mehr oder weniger habe ich die beiden verstanden, glaube ich.</i>",
                T0002: "<i>Es geht jetzt aber endlich los!</i>",
                T0003: "<i>Ich verstehe zwar kein Wort von den anderen, aber genieße dann einfach trotzdem mal stumm die Show. Die Tänzerin ist wunderschön.</i>",
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
        let signalDelay2 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(2)]);
        let signalDelay10 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(10)]);
        let spatialSound = new AV.SpatialSound();
        // Audio in 2D-Welt, Knoten hinter der 2D-Welt platzieren
        AV.ƒS.Speech.hide();
        await AV.ƒS.Location.show(AV.locations.dancerBG);
        await AV.ƒS.update(3);
        await AV.ƒS.Character.animate(AV.characters.Adelinde, AV.characters.Adelinde.pose.smile, AV.outOfCanvasToMid());
        await AV.ƒS.update(1);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0000 + AV.dataForSave.Protagonist.name + "!");
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0000, true, "Player");
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0001, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0001);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0000);
        AV.ƒS.Character.hide(AV.characters.Adelinde);
        await AV.ƒS.Character.animate(AV.characters.Adelinde, AV.characters.Adelinde.pose.smile, AV.midToLeft());
        await AV.ƒS.update(0.5);
        await AV.ƒS.Character.animate(AV.characters.Twins, AV.characters.Twins.pose.normal, AV.outOfCanvasToMid());
        await AV.ƒS.update(2);
        AV.ƒS.Character.hide(AV.characters.Adelinde);
        await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.ƒS.positionPercent(30, 100));
        await AV.ƒS.update(0.2);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0002);
        await AV.ƒS.Speech.tell(AV.characters.Twins, text.Twins.T0000);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0002, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.Twins, text.Twins.T0001);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0003);
        await AV.ƒS.Speech.tell(AV.characters.Sed, text.Sed.T0000);
        await AV.ƒS.Speech.tell(AV.characters.Ned, text.Ned.T0000);
        AV.ƒS.Character.hide(AV.characters.Adelinde);
        AV.ƒS.Character.hide(AV.characters.Twins);
        await AV.ƒS.update(2);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0001);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0002);
        AV.ƒS.Speech.hide();
        await AV.ƒS.update(0.1);
        await AV.ƒS.Character.show(AV.characters.Dancer, AV.characters.Dancer.pose.normal, AV.ƒS.positions.bottomcenter);
        await AV.ƒS.update(5);
        // ƒS.Sound.play(sound.dancerTheme, 0.05, true);
        // ƒS.Sound.fade(sound.dancerTheme, 1, 3);
        spatialSound.start();
        await AV.ƒS.Text.print("Starte den Sound mit Enter und navigiere nun mit deinen Pfeiltasten, bis du etwas hörst.\
    <br>Du kannst dich aber auch von der Soundquelle vollständig entfernen, wenn du deine Ruhe haben möchtest, damit du dein Hörvermögen schonst.");
        await signalDelay10();
        // Verschiedene Sounds laufen lassen
        AV.ƒS.Sound.play(AV.sound.hmmConfused, 1);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0003);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0004);
        AV.ƒS.Sound.play(AV.sound.hahaha, 1);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0005);
        AV.ƒS.Sound.play(AV.sound.hmpfOne, 1);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0006);
        // ƒS.Character.hide(characters.Anastasia);
        // await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positions.bottomcenter);
        // ƒ.Loop.stop();
        AV.ƒS.Speech.clear();
        AV.ƒS.Speech.hide();
        await signalDelay2();
        // ƒS.Sound.fade(sound.mission, 0, 1);
        // enableSpatialSound();
        // ƒ.Loop.stop();
    }
    AV.Premiere = Premiere;
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
    // window.addEventListener("load", init);
    class DezibelMeter {
        static activateDecibelMeter() {
            DezibelMeter.isOn = true;
            document.getElementById("avg-level").hidden = false;
            document.getElementById("avg-level-text").hidden = false;
            document.getElementById("dB").hidden = false;
            DezibelMeter.dezibelMeter();
        }
        static deactivateDecibelMeter() {
            DezibelMeter.isOn = false;
            document.getElementById("avg-level").hidden = true;
            document.getElementById("avg-level-text").hidden = true;
            document.getElementById("dB").hidden = true;
        }
        static dezibelMeter() {
            navigator.mediaDevices.getUserMedia({ audio: true, video: false })
                .then(function (stream) {
                const context = new AudioContext();
                let analyser = context.createAnalyser();
                const source = context.createMediaStreamSource(stream);
                source.connect(analyser);
                // Damit man sich nicht selbst hört
                // source.connect(context.destination);
                // let audio: HTMLAudioElement = <HTMLAudioElement> document.getElementById("player");
                // audio.srcObject = stream;
                analyser.minDecibels = -120;
                analyser.fftSize = 1024;
                const sampleBuffer = new Float32Array(analyser.fftSize);
                function loop() {
                    analyser.getFloatFrequencyData(sampleBuffer);
                    let average = 0;
                    for (let i = 0; i < sampleBuffer.length; i++) {
                        average += sampleBuffer[i];
                    }
                    let finalAverage = average / sampleBuffer.length - analyser.minDecibels;
                    // Display value.
                    displayNumber("avg", finalAverage);
                    if (DezibelMeter.isOn) {
                        requestAnimationFrame(loop);
                    }
                }
                function displayNumber(id, value) {
                    const meter = document.getElementById(id + "-level");
                    const text = document.getElementById(id + "-level-text");
                    text.textContent = value.toFixed(2);
                    meter.value = isFinite(value) ? value : meter.min;
                }
                loop();
            })
                //@ts-ignore
                .catch(function (err) {
                //@ts-ignore
            });
        }
    }
    DezibelMeter.isOn = true;
    AV.DezibelMeter = DezibelMeter;
})(AV || (AV = {}));
var AV;
(function (AV) {
    async function End() {
        console.log("The End");
        AV.ƒS.Text.setClass("black");
        await AV.ƒS.Text.print("Dies war ein klitzekleiner Einblick in verschiedene Situationen, bei denen man daran erinnert wird, \
    dass man etwas schlechter hört. Es kommt nur darauf an, das Beste daraus zu machen :)<br>Ich hoffe das Spiel hat Spaß gemacht!");
        await AV.ƒS.update(2);
        // ƒS.Text.close();
    }
    AV.End = End;
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
        dancerTheme: "Audio/Themes/dancerTheme.wav",
        // Sound
        click: "Audio/Sound/click.mp3",
        Beat: "./Audio/Sound/Beat.mp3",
        cutie: "Audio/Sound/cutie.mp3",
        pinch: "Audio/Sound/pinch.flac",
        punch: "Audio/Sound/punch.mp3",
        shower: "Audio/Sound/shower.wav",
        drop: "Audio/Sound/drop31.wav",
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
        black: {
            name: "BlackBG",
            background: "Images/Backgrounds/bg_black.png"
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
        oldStreet: {
            name: "OldStreet",
            background: "Images/Backgrounds/Old_Street.png"
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
        },
        festivalC: {
            name: "OldFestival",
            background: "Images/Backgrounds/Old_FestivalC.png"
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
        },
        StrangerWoman: {
            name: "Stranger Woman",
            origin: AV.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Elaine_normal.png",
                mad: "Images/Characters/Elaine_mad.png",
                innocent: "Images/Characters/Elaine_innocent.png"
            }
        },
        Anastasia: {
            name: "Anastasia",
            origin: AV.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Anastasia_normal.png",
                smile: "Images/Characters/Anastasia_smile.png",
                innocent: "Images/Characters/Anastasia_innocent.png",
                unsure: "Images/Characters/Anastasia_unsure.png"
            }
        },
        Mama: {
            name: "Mama",
            origin: AV.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Anastasia_normal.png",
                smile: "Images/Characters/Anastasia_smile.png",
                innocent: "Images/Characters/Anastasia_innocent.png",
                unsure: "Images/Characters/Anastasia_unsure.png"
            }
        },
        Twins: {
            name: "Zwillinge",
            origin: AV.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Twins_normal.png",
                shocked: "Images/Characters/Twins_shocked.png",
                smile: "Images/Characters/Twins_smile.png",
                surprised: "Images/Characters/Twins_surprised.png"
            }
        },
        Ned: {
            name: "Ned",
            origin: AV.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Ned_normal.png"
            }
        },
        Sed: {
            name: "Sed",
            origin: AV.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Sed_normal.png"
            }
        },
        Dancer: {
            name: "Tänzerin",
            origin: AV.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/dancer.png"
            }
        }
    };
    // export let items = {
    //   Chips: {
    //     name: "Chips",
    //     description: "Tasty crisps",
    //     image: "Images/Items/ChipsPackung.png",
    //     static: false,
    //     handler: hndItem
    //   },
    //   Lollipops: {
    //     name: "Lollipops",
    //     description: "Yummy Lollis",
    //     image: "Images/Items/Lollipops.png",
    //     static: false,
    //     handler: hndItem
    //   }
    // };
    // data I want to save
    AV.dataForSave = {
        Protagonist: {
            name: "Player"
        }
    };
    // MENU - AUDIO functions
    let volume = 1.0;
    function incrementSound() {
        if (volume >= 100)
            return;
        volume += 0.5;
        AV.ƒS.Sound.setMasterVolume(1.3);
    }
    AV.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        AV.ƒS.Sound.setMasterVolume(0.7);
    }
    AV.decrementSound = decrementSound;
    function showCredits() {
        AV.ƒS.Text.addClass("credits");
        AV.ƒS.Text.print("- Background Credits to Noraneko Games, on Twitter @NoranekoGames /  Noranekokgames.itch.io<br>\
    - Music Credits to Tim Beek, on Twitter @timbeekmusic, Homepage http://www.timbeek.com<br>\
    - Character and Dancer Background Credits to Riem Yasin");
    }
    AV.showCredits = showCredits;
    function showHelp() {
        AV.ƒS.Text.addClass("help");
        AV.ƒS.Text.print("<h3>Shortcuts</h3>Inventory: I<br>Save: F8 <br> Load: F9 <br>Close Game Menu: M <br>Continue Visual Novel with Space or LMC");
    }
    AV.showHelp = showHelp;
    // MENU - create Menu with Buttons
    let inGameMenu = {
        save: "Save",
        load: "Load",
        turnUpVolume: "🔊",
        turndownVolume: "🔈",
        credits: "Credits",
        help: "Help"
    };
    async function buttonFunctionalities(_option) {
        console.log(_option);
        if (_option == inGameMenu.save) {
            await AV.ƒS.Progress.save();
        }
        else if (_option == inGameMenu.load) {
            await AV.ƒS.Progress.load();
        }
        else if (_option == inGameMenu.turnUpVolume) {
            incrementSound();
        }
        else if (_option == inGameMenu.turndownVolume) {
            decrementSound();
        }
        // if (_option == inGameMenu.close) {
        //   gameMenu.close();
        // }
        // if (_option == inGameMenu.open) {
        //   gameMenu.open();
        // }
        if (_option == inGameMenu.credits) {
            showCredits();
        }
        if (_option == inGameMenu.help) {
            showHelp();
        }
    }
    // true heißt hier offen und false geschlossen
    AV.menu = true;
    // SAVE N LOAD function
    // shortcuts to save and load game progress
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case AV.ƒ.KEYBOARD_CODE.F8:
                console.log("Save Game Progress");
                await AV.ƒS.Progress.save();
                break;
            case AV.ƒ.KEYBOARD_CODE.F9:
                console.log("Load Game Progress");
                await AV.ƒS.Progress.load();
                break;
            // Englische Tastatur beachten, Öffnen und Schließen des Inventars mit derselben Taste
            case AV.ƒ.KEYBOARD_CODE.M:
                if (AV.menu) {
                    console.log("Close Game Menu");
                    AV.gameMenu.close();
                    AV.menu = false;
                }
                else {
                    console.log("Open Game Menu");
                    AV.gameMenu.open();
                    AV.menu = true;
                }
                break;
        }
    }
    // shortcuts to open and close the inventory
    document.addEventListener("keydown", hndKeypressForInventory);
    async function hndKeypressForInventory(_event) {
        switch (_event.code) {
            case AV.ƒ.KEYBOARD_CODE.I:
                console.log("Open Inventory");
                await AV.ƒS.Inventory.open();
                break;
            case AV.ƒ.KEYBOARD_CODE.ESC:
                console.log("Close Inventory");
                await AV.ƒS.Inventory.open();
                AV.ƒS.Inventory.close();
                break;
        }
    }
    // Animations available in all scenes
    function leftToRight() {
        return {
            start: { translation: AV.ƒS.positions.bottomleft },
            end: { translation: AV.ƒS.positions.bottomright },
            duration: 3,
            playmode: AV.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    AV.leftToRight = leftToRight;
    function midToLeft() {
        return {
            start: { translation: AV.ƒS.positions.bottomcenter },
            end: { translation: AV.ƒS.positionPercent(30, 100) },
            duration: 3,
            playmode: AV.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    AV.midToLeft = midToLeft;
    function rightToOutOfCanvas() {
        return {
            start: { translation: AV.ƒS.positionPercent(30, 100) },
            end: { translation: AV.ƒS.positionPercent(120, 100) },
            duration: 3,
            playmode: AV.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    AV.rightToOutOfCanvas = rightToOutOfCanvas;
    function midToOutOfCanvas() {
        return {
            start: { translation: AV.ƒS.positionPercent(60, 100) },
            end: { translation: AV.ƒS.positionPercent(120, 100) },
            duration: 3,
            playmode: AV.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    AV.midToOutOfCanvas = midToOutOfCanvas;
    function outOfCanvasToMid() {
        return {
            start: { translation: AV.ƒS.positionPercent(120, 100) },
            end: { translation: AV.ƒS.positionPercent(60, 100) },
            duration: 3,
            playmode: AV.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    AV.outOfCanvasToMid = outOfCanvasToMid;
    function outOfCanvasToLeft() {
        return {
            start: { translation: AV.ƒS.positionPercent(120, 100) },
            end: { translation: AV.ƒS.positions.bottomleft },
            duration: 3,
            playmode: AV.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    AV.outOfCanvasToLeft = outOfCanvasToLeft;
    // horizontal and vertical Shaker 
    async function horizontalShake() {
        let scene = document.getElementsByTagName("scene")[0];
        for (let i = 0; i < 15; i++) {
            if (i % 2 == 0) {
                scene.style.transform = `translateX(20px)`;
            }
            else {
                scene.style.transform = `translateX(-20px)`;
            }
            await new Promise(resolve => setTimeout(resolve, 40));
        }
        scene.style.transform = `translateX(0px)`;
    }
    AV.horizontalShake = horizontalShake;
    async function verticalShake() {
        let scene = document.getElementsByTagName("scene")[0];
        for (let i = 0; i < 15; i++) {
            if (i % 2 == 0) {
                scene.style.transform = `translateY(20px)`;
            }
            else {
                scene.style.transform = `translateY(-20px)`;
            }
            await new Promise(resolve => setTimeout(resolve, 40));
        }
        scene.style.transform = `translateY(0px)`;
    }
    AV.verticalShake = verticalShake;
    // function hndItem(_event: CustomEvent): void {
    //   console.log(_event);
    // }
    window.addEventListener("load", start);
    function start(_event) {
        // MENU
        AV.gameMenu =
            AV.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
        let scenes = [
            { scene: AV.HearingLoss, name: "Welcome to an almost muted world" },
            { scene: AV.StrangerWoman, name: "Confronting a stranger with hardness of hearing" },
            { scene: AV.Home, name: "Arriving at home" },
            { scene: AV.Premiere, name: "Meeting with friends" },
            { scene: AV.End, name: "The End" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        AV.dataForSave = AV.ƒS.Progress.setData(AV.dataForSave, uiElement);
        // start the sequence
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
                // this.viewport.draw();
                this.viewport.calculateTransforms();
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
            const audio = new AV.ƒ.Audio(AV.sound.dancerTheme);
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