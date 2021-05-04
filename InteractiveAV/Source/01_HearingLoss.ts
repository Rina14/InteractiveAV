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
        T0006: "<i>Achso.. Cochlea. Was das ist wusste ich zwar selbst, aber nun gut...</i>"
      },
      Protagonist: {
        T0000: "Wie bitte?",
        T0001: "Und das bedeutet?",
        T0002: "Okay, und wann werde ich wieder gesund? Ich habe schließlich\
                nichts großartiges gemacht, um das zu bekommen.",
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
                Es wird eine Weile brauchen, bis du dich daran gewöhnt hast.",
        T0005: "Cochlea-Implantate. Die Cochlea ist die Hörschnecke, in der die feinen Haarzellen sitzen.\
                Hier kann ein Implantat eingepflanzt werden, falls Hörgeräte nicht mehr die gewünschte Leistung erbringen.",
        T0006: ""
      },
      Ryu: {
        T0000: "",
        T0001: "",
        T0002: "",
        T0003: "",
        T0004: ""
      }
    };


    /** Ticker */
    ƒS.Speech.setTickerDelays(30, 2);

    // for moments with individual delays
    let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
    let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);

    ƒS.Sound.fade(sound.again, 0.1, 0.1, true);


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

    await ƒS.Location.show(locations.hospital);
    await ƒS.update(transitions.flash.duration, transitions.flash.alpha, transitions.flash.edge);
    await ƒS.Character.show(characters.Doctor, characters.Doctor.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.Doctor, text.Doctor.T0000);
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
    await ƒS.Speech.tell(characters.Doctor, text.Doctor.T0000);
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
    await ƒS.Speech.tell(characters.Doctor, text.Doctor.T0001);
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
    await ƒS.Speech.tell(characters.Doctor, text.Doctor.T0002);
    await ƒS.Speech.tell(characters.Doctor, text.Doctor.T0003);
    await ƒS.Speech.tell(characters.Doctor, text.Doctor.T0004);
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003);
    await ƒS.Speech.tell(characters.Doctor, text.Doctor.T0005);
    await ƒS.Speech.tell(null, text.Narrator.T0006);
    await ƒS.Character.hide(characters.Doctor);
    await ƒS.Speech.hide();
    await ƒS.update(1);
    await ƒS.Location.show(locations.trainOld);
    await ƒS.update(0.1);

    ƒS.Sound.fade(sound.again, 0, 1);
  }
}