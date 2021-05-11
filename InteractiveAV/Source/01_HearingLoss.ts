namespace AV {
  export async function HearingLoss(): ƒS.SceneReturn {
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

    ƒS.Speech.hide();
    // dataForSave.started = true;

    ƒS.Text.addClass("start");
    await ƒS.Text.print("Willkommen!<br><br>Hier wird eine Einleitung stehen.\
    <p>Viel Spaß beim Spielen.</p><br>\
    <p><b>Save: F8</p><p><b>Load: F9</p>");
    ƒS.Text.close();
    ƒS.Speech.show();


    // text speed in milliseconds, while paragraphs in seconds
    ƒS.Speech.setTickerDelays(20, 2);

    // for moments with individual delays
    let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
    let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);

    // Duration in seconds
    ƒS.Sound.fade(sound.again, 0.3, 0.07, true);


    // Start the Scene!
    await ƒS.Speech.hide();
    await ƒS.Location.show(locations.trainOld);
    await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
    await ƒS.Speech.tell(null, text.Narrator.T0000);
    await ƒS.Speech.tell(null, text.Narrator.T0001);
    await ƒS.Speech.tell(null, text.Narrator.T0002);
    await ƒS.Speech.tell(null, text.Narrator.T0003);
    await ƒS.Speech.tell(null, text.Narrator.T0004);
    await ƒS.Speech.tell(null, text.Narrator.T0005);
    await ƒS.Speech.hide();

    await ƒS.Location.show(locations.hospital);
    await ƒS.update(transitions.flash.duration, transitions.flash.alpha, transitions.flash.edge);
    await ƒS.Character.show(characters.Doctor, characters.Doctor.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.Doctor, "Hallo, ...");
    await ƒS.Speech.tell(null, "<i>Er hat wohl meinen Namen vergessen.</i>");

    // Name field - Player can type his name in here
    dataForSave.Protagonist.name = await ƒS.Speech.getInput();
    console.log(dataForSave.Protagonist.name);


    // Punkte verteilen
    // dataForSave.score += 10;


    await ƒS.Speech.tell(characters.Doctor, "Hallo, " + dataForSave.Protagonist.name + ".");
    await ƒS.Speech.tell(characters.Doctor, "Du hast eine Sc....empf....keit.");
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
    await ƒS.Character.hide(characters.Doctor);
    await ƒS.Speech.hide();
    await ƒS.update(1);
    await ƒS.Location.show(locations.trainOld);
    // await ƒS.update(transitions.flash.duration, transitions.flash.alpha, transitions.flash.edge);
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


    let trainMeetingWithAdelinde = await ƒS.Menu.getInput(meetAdelinde, "meetingAdelinde");

    switch (trainMeetingWithAdelinde) {
      case meetAdelinde.iGreetBack:
        ƒS.Sound.play(sound.click, 1);
        //continue writing on this path here
        await ƒS.Speech.tell(dataForSave.Protagonist, "Hi, Ade. Lange nicht gesehen, was?");
        await ƒS.Speech.tell(characters.Adelinde, "Was?! Wirklich?? Ich dachte wir-... Ahh tut mir leid.");
        await ƒS.Speech.tell(null, "Typisch, Ade. Sie ist schon immer sehr leichtgläubig gewesen.");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Beruhige dich. Keine Sorge, ist nur eine Woche her, seit wir das letzte mal gesprochen haben.");
        await ƒS.Speech.tell(characters.Adelinde, "Ohh, ich dachte schon mein Gedächtnis lässt mich im Stich. Dann ist ja gut.");
        ƒS.Speech.clear();
        await ƒS.update(1);
        break;
      case meetAdelinde.iIgnoreHer:
        ƒS.Sound.play(sound.click, 1);
        await ƒS.Speech.tell(characters.Adelinde, "Hallo?");
        await ƒS.Speech.tell(null, "<i>Vielleicht sollte ich doch-</i>");
        await ƒS.Speech.tell(characters.Adelinde, "Ignorierst du mich etwa?");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Was? Nein ich-");
        ƒS.Character.hide(characters.Adelinde);
        await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.smile, ƒS.positions.bottomcenter);
        await ƒS.update(0.1);    
        await ƒS.Speech.tell(characters.Adelinde, "Ich mache doch nur Witze, " + dataForSave.Protagonist.name + ".");
        await ƒS.Speech.tell(characters.Adelinde, "Du kennst mich doch.");
        ƒS.Character.hide(characters.Adelinde);
        await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positions.bottomcenter);
        await ƒS.update(0.1);    
        ƒS.Speech.clear();
        await ƒS.update(1);
        break;
      case meetAdelinde.iJustLookAtHer:
        ƒS.Sound.play(sound.click, 1);
        await ƒS.Speech.tell(characters.Adelinde, "Haaa-lloooo.");
        await ƒS.Speech.tell(characters.Adelinde, "Erdeee an " + dataForSave.Protagonist.name + "!");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Angekommen.");
        await ƒS.Speech.tell(characters.Adelinde, "Gut, ich dachte ich verliere dich schon an die Aliens.");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Keine Sorge, so schnell bist du mich nicht los.");
        await ƒS.Speech.tell(characters.Adelinde, "Schad-.. Ich meine puh, ein Glück.");
        await ƒS.Speech.tell(null, "<i>Adelinde, wie sie lebt und leibt.</i>");
        ƒS.Speech.clear();
        await ƒS.update(1);
        break;
    }



    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0001);


    ƒS.Speech.clear();
    ƒS.Speech.hide();

    // Musik ausblenden
    ƒS.Sound.fade(sound.again, 0, 1);
  }
}