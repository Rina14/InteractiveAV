namespace AV {
  export async function HearingLoss(): ƒS.SceneReturn {
    console.log("Start Hearing Loss");

    let cmpAudio: ƒ.ComponentAudio;
    let distortion: WaveShaperNode = ƒ.AudioManager.default.createWaveShaper();
    let audioCutie: ƒ.Audio;
    let audioDrop: ƒ.Audio;

    let text = {
      Narrator: {
        T0000: "<i>...</i>",
        T0001: "<i>Ich kann es immer noch nicht fassen.</i>",
        T0002: "<i>Vielleicht verstehe ich es auch nur noch nicht richtig,\
                aber was bedeutet das nun konkret für mich?</i>",
        T0003: "<i>So viel wird sich ja hoffentlich nicht für mich ändern...</i>",
        T0004: "<i>Oder?</i>",
        T0005: "<i>Was meinte der Doc noch gleich?</i>",
        T0006: "<i>Ah.. Cochlea. Ich hätte zwar gewusst, was dies bedeutet, aber es kommt anscheinend so rüber, als ob das nicht der Fall wäre.</i>",
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
        T0005: "Oh, entschuldige bitte, ja, da gibt es tatsächlich etwas, das ich dir gerne erzählen würde.",
        T0006: "Ehrlich gesagt bist du die Erste, die es erfährt... Naja abgesehen von meinen Eltern.",
        T0007: "So spektakulär ist es eigentlich nicht, denke ich.",
        T0008: "Ich trage nun Hörgeräte bzw. ich bin schwerhörig geworden.",
        T0009: "Nein, keine Sorge. Ich...",
        T0010: "Hm, klar. Ich habe sonst nicht wirklich etwas vor heute."
      },
      Adelinde: {
        T0000: "Hey, ",
        T0001: "Wie geht### dir ####? Irgendwelche ######?",
        T0002: "Ich habe gefragt, ob irgendetwas Neues bei dir ansteht.",
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
    let signalDelay40: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(40)]);
    let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
    let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
    // let pressK: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.getKeypress(ƒ.KEYBOARD_CODE.K)]);

    // await pressK();


    // text speed in milliseconds, while paragraphs in seconds
    ƒS.Speech.setTickerDelays(20, 2);

    ƒS.Speech.hide();

    ƒS.Text.addClass("start");
    await ƒS.Text.print("Herzlich Willkommen!<br><br>Hast du dich einmal gefragt, \
    wie es wohl wäre, wenn du plötzlich schwerhörig wirst? Was würde sich für dich verändern?\
    Welche neuen Herausforderungen kämen auf dich zu? \
    Hier verschaffst du dir einen kleinen Einblick in der Welt einer schwerhörigen Person.\
    <p>Viel Spaß beim Spielen!</p><br>\
    <p><b>Speichern: F8</p><p><b>Laden: F9</p><p><b>Weiter mit Leertaste oder LMC</p>");
    ƒS.Text.close();
    ƒS.Speech.show();


    // GEMU STARTO
    // Duration in seconds
    ƒS.Sound.play(sound.again, 0.05, true);
    ƒS.Sound.fade(sound.again, 0.2, 4);


    // Start the Scene!
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.trainBeach);
    await ƒS.update(transitions.swirl.duration, transitions.swirl.alpha, transitions.swirl.edge);
    await ƒS.Speech.tell(null, text.Narrator.T0000);
    await ƒS.Speech.tell(null, text.Narrator.T0001);
    await ƒS.Speech.tell(null, text.Narrator.T0002);
    await ƒS.Speech.tell(null, text.Narrator.T0003);
    await ƒS.Speech.tell(null, text.Narrator.T0004);
    await ƒS.Speech.tell(null, text.Narrator.T0005);
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.hospital);
    await ƒS.update(transitions.mosaik.duration, transitions.mosaik.alpha, transitions.mosaik.edge);
    await ƒS.Character.show(characters.Doctor, characters.Doctor.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.Doctor, "Hallo, ...");
    await ƒS.Speech.tell(null, "<i>Er hat wohl meinen Namen vergessen.</i>");

    // Name field - Player can type his name in here
    dataForSave.Protagonist.name = await ƒS.Speech.getInput();
    console.log(dataForSave.Protagonist.name);

    await ƒS.Speech.tell(characters.Doctor, "Hallo, " + dataForSave.Protagonist.name + ".");
    await ƒS.Speech.tell(characters.Doctor, "Du hast eine Sc###empf####keit.");
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0000, true, "Player");
    await ƒS.Speech.tell(characters.Doctor, text.Doctor.T0000);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0001, true, "Player");
    await ƒS.Speech.tell(characters.Doctor, text.Doctor.T0001);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0002, true, "Player");
    await ƒS.Speech.tell(characters.Doctor, text.Doctor.T0002);
    await ƒS.Speech.tell(characters.Doctor, text.Doctor.T0003);
    await ƒS.Speech.tell(characters.Doctor, text.Doctor.T0004);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0003, true, "Player");
    await ƒS.Speech.tell(characters.Doctor, text.Doctor.T0005);
    await ƒS.Speech.tell(null, text.Narrator.T0006);
    await ƒS.Speech.tell(characters.Doctor, "Hier im Freien kannst du nun die Hörgeräte direkt testen und den Klang bewerten.");
    await ƒS.Speech.tell(characters.Doctor, "Außerdem möchte ich dir noch ein neu entwickeltes Gerät mitgeben.\
    Damit kannst du verschiedene Töne abspielen und anschließend bewerten, wie gut du diese hörst und in ihrer Stärke wahrnimmst.");
    await ƒS.Speech.tell(characters.Doctor, "Darüber hinaus solltest du dich nun häufiger damit beschäftigen und testen, wie und mit welchem technischen Gerät \
    du im Alltag am besten zurechtkommst.");
    await ƒS.Speech.tell(characters.Doctor, "Zum Beispiel im Studium.");
    await ƒS.Speech.tell(characters.Doctor, "Es könnte gut sein, dass hier neue Herausforderungen auf dich zukommen.");
    await ƒS.Speech.tell(characters.Doctor, "Hierfür gibt es spezielle Geräte wie eine FM-Anlage, \
    die dir das Hören vereinfachen soll. Dies solltest du mit einem Hörgeräteakustiker absprechen, damit auch die Kosten in Bezug auf die Deckung durch die Krankenkasse geklärt werden.");
    await ƒS.Speech.tell(dataForSave.Protagonist, "Was mache ich aber nun bei Sprachprüfungen?", true, "Player");
    await ƒS.Speech.tell(characters.Doctor, "Da deine Sprachverständnis stark beeinträchtigt ist, gibt es zudem gewisse Rechte für Schwerhörige.\
    Nicht nur, dass du bei einem Grad der Behinderung (GdB) von 50 einen Schwerbehindertenausweis beantragen kannst...");
    await ƒS.Speech.tell(characters.Doctor, "Sondern, dass du auch ein Recht auf Prüfungszeitverlängerung hast.");
    await ƒS.Speech.tell(dataForSave.Protagonist, "Das klingt theoretisch sehr fair. Ich bin aber irgendwie sicher, dass ich hier noch auf großes Unverständnis treffen werden", true, "Player");
    await ƒS.Speech.tell(characters.Doctor, "Das sind Rechte, die gewährt werden müssen. Genaueres klärst du am besten direkt mit der Hochschule ab.");
    await ƒS.Speech.tell(characters.Doctor, "Ich stelle dir die notwendigen Atteste zur Bestätigung der Schwerhörigkeit aus.");
    await ƒS.Speech.tell(dataForSave.Protagonist, "Alles klar. Vielen Dank Doktor Ryu!", true, "Player");

    // Text print für Audio GraphInsertion
    await ƒS.Text.print("Teste das Gerät, das dir der Doktor mitgegeben hat. \
    <br>Benutze hierfür jeweils eine beliebige Pfeiltaste und drücke anschließend Enter.<br>Dann ertönen verschiedene Sounds und du kannst schauen, wie gut du diese hörst.\
    In der Regel sollte ein Mensch ohne Hörprobleme diese klar und deutlich wahrnehmen. Bei Hörgeschädigten kann es sein, dass diese gar nicht wahrgenommen werden.");
    // Audio Funktion GraphInsertion
    ƒS.Sound.fade(sound.again, 0, 2);
    enableAudioTest();
    await ƒS.Character.hide(characters.Doctor);
    ƒS.Speech.hide();
    await ƒS.update(1);
    await signalDelay40();
    disableAudioTest();
    ƒS.Sound.play(sound.again, 0.05, true);
    ƒS.Sound.fade(sound.again, 0.2, 4);

    await ƒS.Location.show(locations.trainBeach);
    await ƒS.update(0.5);
    await ƒS.Speech.tell(null, text.Narrator.T0007);
    await signalDelay1();
    await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positions.bottomcenter);
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0000 + dataForSave.Protagonist.name + "!");
    await ƒS.Speech.tell(null, text.Narrator.T0010);



    await signalDelay2();


    ƒS.Sound.play(sound.click, 1);

    let meetAdelinde = {
      iGreetBack: "Adelinde zurückgrüßen",
      iIgnoreHer: "Adelinde ignorieren",
      iJustLookAtHer: "Sie stumm anstarren"
    };


    let trainMeetingWithAdelinde = await ƒS.Menu.getInput(meetAdelinde, "choices");

    switch (trainMeetingWithAdelinde) {
      case meetAdelinde.iGreetBack:
        ƒS.Sound.play(sound.click, 1);
        //continue writing on this path here
        await ƒS.Speech.tell(dataForSave.Protagonist, "Hi, Ade. Lange nicht gesehen, was?", true, "Player");
        await ƒS.Speech.tell(characters.Adelinde, "Was?! Wirklich?? Ich dachte wir-... Ahh tut mir leid.");
        await ƒS.Speech.tell(null, "<i>Typisch, Ade. Sie ist schon immer sehr leichtgläubig gewesen.</i>");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Beruhige dich. Keine Sorge, ist nur eine Woche her, seit wir das letzte mal gesprochen haben.", true, "Player");
        await ƒS.Speech.tell(characters.Adelinde, "Ohh, ich dachte schon mein Gedächtnis lässt mich im Stich. Dann ist ja gut.");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1);
        break;
      case meetAdelinde.iIgnoreHer:
        ƒS.Sound.play(sound.click, 1);
        await ƒS.Speech.tell(characters.Adelinde, "Hallo?");
        await ƒS.Speech.tell(null, "<i>Vielleicht sollte ich doch-</i>");
        await ƒS.Speech.tell(characters.Adelinde, "Ignorierst du mich etwa?");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Was? Nein ich-", true, "Player");
        ƒS.Character.hide(characters.Adelinde);
        await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.smile, ƒS.positions.bottomcenter);
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Adelinde, "Ich mache doch nur Witze, " + dataForSave.Protagonist.name + ".");
        await ƒS.Speech.tell(characters.Adelinde, "Du kennst mich doch.");
        await ƒS.Character.hide(characters.Adelinde);
        await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positions.bottomcenter);
        await ƒS.update(0.1);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1);
        break;
      case meetAdelinde.iJustLookAtHer:
        ƒS.Sound.play(sound.click, 1);
        await ƒS.Speech.tell(characters.Adelinde, "Haaalloooo.");
        await ƒS.Speech.tell(characters.Adelinde, "Erdeee an " + dataForSave.Protagonist.name + "!");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Angekommen.", true, "Player");
        await ƒS.Speech.tell(characters.Adelinde, "Gut, ich dachte ich verliere dich schon an die Aliens.");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Keine Sorge, so schnell bist du mich nicht los.", true, "Player");
        await ƒS.Speech.tell(characters.Adelinde, "Schad-..");
        // Adelinde laugh mit Augen zu anzeigen
        // await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.laugh, ƒS.positions.bottomcenter);
        // await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Adelinde, "..Ich meine puh, ein Glück.");
        await ƒS.Speech.tell(null, "<i>Adelinde, wie sie lebt und leibt.</i>");
        await ƒS.Character.hide(characters.Adelinde);
        await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positions.bottomcenter);
        await ƒS.update(0.1);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1);
        break;
    }




    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0001);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0004, true, "Player");
    await ƒS.Character.hide(characters.Adelinde);
    await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.smile, ƒS.positions.bottomcenter);
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0002);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0005, true, "Player");
    await ƒS.Character.hide(characters.Adelinde);
    await ƒS.Location.show(locations.trainTunnel);
    await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positions.bottomcenter);
    await ƒS.update(0.1);
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0003);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0006, true, "Player");
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0004);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0007, true, "Player");
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0005);
    await ƒS.Speech.tell(null, text.Narrator.T0011);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0008, true, "Player");
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0006);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0009, true, "Player");

    //  BLACK
    ƒS.Speech.hide();
    ƒS.Character.hide(characters.Adelinde);
    await ƒS.update(0.5);
    await ƒS.Location.show(locations.black);
    await ƒS.update(2);
    ƒS.Text.setClass("black");
    await ƒS.Text.print("<br><br><br><br>Nächster Halt: Marktgasse.<br>Ausstieg in Fahrtrichtung rechts.");
    ƒS.Text.close();
    await ƒS.update(2);

    await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.smile, ƒS.positions.bottomcenter);
    await ƒS.Location.show(locations.trainTunnel);
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0007);
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0008);
    await ƒS.Location.show(locations.trainBeach);
    await ƒS.update(0.5);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0010, true, "Player");
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0009);



    ƒS.Character.hide(characters.Adelinde);
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    // Musik ausblenden
    ƒS.Sound.fade(sound.again, 0, 1);

    await signalDelay2();








    

    // Audio test function

    async function enableAudioTest(): Promise<void> {
      window.addEventListener("keydown", handleKeydownForAudio);
      audioCutie = new ƒ.Audio(sound.cutie);
      // await audioBeep.asyncLoad("Sound/Beep.mp3")
      audioDrop = new ƒ.Audio(sound.drop);
      // await audioUfo.asyncLoad("Sound/Beat.mp3")
      cmpAudio = new ƒ.ComponentAudio(audioCutie, false, false);
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
          ƒ.Debug.log("Cutie");
          cmpAudio.setAudio(audioCutie);
          break;
        case ƒ.KEYBOARD_CODE.ARROW_RIGHT:
          ƒ.Debug.log("Drop");
          cmpAudio.setAudio(audioDrop);
          break;
        // case ƒ.KEYBOARD_CODE.NUMPAD1:
        //   ƒ.Debug.log("Drop");
        //   cmpAudio.setAudio(audioDrop);
        //   break;
      }
    }

    function disableAudioTest(): void {
      window.removeEventListener("keydown", handleKeydownForAudio);
      console.log("Audio Test disabled");
    }
  }
}