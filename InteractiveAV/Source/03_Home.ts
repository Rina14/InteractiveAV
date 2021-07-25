namespace AV {
  export async function Home(): ƒS.SceneReturn {
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
    let signalDelay15: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(15)]);
    // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);
    let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
    let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);

    // ƒS.Sound.fade(sound.again, 0, 1);



    ƒS.Speech.hide();
    await ƒS.Location.show(locations.livingRoom);
    // await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positionPercent(60, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(null, text.Narrator.T0000);
    await ƒS.Speech.tell(null, text.Narrator.T0001);
    await ƒS.Location.show(locations.bathroom);
    await ƒS.update(1);
    await ƒS.Speech.tell(null, text.Narrator.T0002);
    await signalDelay2();
    ƒS.Sound.fade(sound.shower, 1, 1, true);
    await ƒS.Location.show(locations.bathroomFoggy);
    await ƒS.update(3);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0000, true, "Player");
    await ƒS.Speech.tell(null, text.Narrator.T0003);
    await ƒS.Speech.tell(null, text.Narrator.T0004);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0001, true, "Player");
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0002, true, "Player");
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0000);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0000, true, "Player");
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0001);
    await signalDelay2();
    ƒS.Sound.fade(sound.shower, 0, 1);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0003, true, "Player");
    await signalDelay1();
    await ƒS.Location.show(locations.livingRoom);
    await ƒS.update(1);
    await ƒS.Character.show(characters.Anastasia, characters.Anastasia.pose.unsure, ƒS.positions.bottomcenter);
    await ƒS.update(1);
    await ƒS.Speech.tell(null, text.Narrator.T0005);
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0002);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0004, true, "Player");
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0003);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0005, true, "Player");
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0006, true, "Player");
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0004);
    await ƒS.Speech.tell(null, text.Narrator.T0006);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0007, true, "Player");


    await signalDelay2();


    ƒS.Sound.play(sound.click, 1);

    let answeringMom = {
      iAgree: "Zweifeln.",
      iInsist: "Sie beruhigen und darauf bestehen, dass alles okay ist."
    };


    let brokenVase = await ƒS.Menu.getInput(answeringMom, "choices");

    switch (brokenVase) {
      case answeringMom.iAgree:
        ƒS.Sound.play(sound.click, 1);
        await ƒS.Speech.tell(null, "<i>Jetzt bin ich mir irgendwie unsicher.</i>");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Vielleicht hast du recht.", true, "Player");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Denn jetzt wo du es erwähnst, fällt mir ein, dass da glaube ich irgendetwas war.. aber so richtig darauf geachtet, habe ich ehrlich gesagt nicht.", true, "Player");
        ƒS.Character.hide(characters.Anastasia);
        await ƒS.update(0.2);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1);
        break;
      case answeringMom.iInsist:
        ƒS.Sound.play(sound.click, 1);
        await ƒS.Speech.tell(null, "<i>Ich glaube sie macht sich einfach zu viele Sorgen.</i>");
        await ƒS.Speech.tell(null, "<i>Meine Situation ist schließlich noch ungewohnt für uns beide.</i>");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Ich denke wirklich, du machst dir zu viele Sorgen.", true, "Player");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Bestimmt hätte ich das bemerkt. Ich würde jetzt aber schlafen gehen.", true, "Player");
        ƒS.Character.hide(characters.Anastasia);
        await ƒS.update(0.2);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1);
        break;
    }



    await ƒS.Character.show(characters.Anastasia, characters.Anastasia.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0005);
    // Warum sprichst du eigentlich so laut? / Ich habe dir etwas mitgebracht -> Töne ausprobieren
    // await ƒS.Speech.tell(characters.Unknown, text.Anastasia.T0006);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0008, true, "Player");
    await ƒS.Location.show(locations.bathroomFoggy);
    await ƒS.update(0.5);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0009, true, "Player");
    ƒS.Character.hide(characters.Anastasia);
    await ƒS.Character.animate(characters.Anastasia, characters.Anastasia.pose.innocent, midToLeft());
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0006);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0010, true, "Player");
    await ƒS.Speech.tell(null, text.Narrator.T0007);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0011, true, "Player");
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0007);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0012, true, "Player");
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0008);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0013, true, "Player");
    await ƒS.Speech.tell(characters.Mama, "Das werden wir!");
    await ƒS.Speech.tell(null, "<i>Dafür liebe ich meine Mutter.</i>");
    await ƒS.Location.show(locations.livingRoom);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0009);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0014, true, "Player");
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0010);
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0011);
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0012);
    await ƒS.Speech.tell(null, text.Narrator.T0008);
    await ƒS.Text.print("Bitte lasse für diese Funktion den Zugriff auf dein Mikrofon zu.");
    ƒS.Text.close();
    await ƒS.update(1);
    // Anzeige dB-Meter
    DezibelMeter.activateDecibelMeter();
    await signalDelay15();
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0013);
    await ƒS.Speech.tell(characters.Mama, text.Anastasia.T0014);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0015, true, "Player");
    ƒS.Character.hide(characters.Anastasia);
    await ƒS.update(1);
    DezibelMeter.activateDecibelMeter();
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0016, true, "Player");
    await ƒS.Speech.tell(null, text.Narrator.T0009);
    await ƒS.Speech.tell(null, text.Narrator.T0010);


    // dB-Meter ausschalten
    DezibelMeter.deactivateDecibelMeter();

    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await signalDelay2();
    // ƒS.Sound.fade(sound.mission, 0, 1);


  }
}
