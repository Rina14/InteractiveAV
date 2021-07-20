namespace AV {
  export async function StrangerWoman(): ƒS.SceneReturn {
    console.log("Start StrangerWoman");

    let text = {
      Narrator: {
        T0000: "<i>Dann mal r-...</i>",
        T0001: "<i>Manchen ist der Begriff Höflichkeit wohl ein Fremdwort.</i>",
        T0002: "<i> </i>"
      },
      Protagonist: {
        T0000: "Alles klar. Dann bis gleich, Ade.",
        T0001: "Bis gleich.",
        T0002: "Ja?"
      },
      Adelinde: {
        T0000: "Auf geht's! Ich hole noch schnell einen Einkaufswagen, du kannst schon einmal reingehen.",
        T0001: "Bis gleich."
      },
      StrangerWomen: {
        T0000: "So ein Mist!",
        T0001: "Ahh, hey du da.",
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
    let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
    // let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
    // let pressK: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.getKeypress(ƒ.KEYBOARD_CODE.K)]);
    // await pressK();


    ƒS.Speech.hide();

    ƒS.Sound.play(sound.mission, 0.1, true);
    ƒS.Sound.fade(sound.mission, 0.3, 4);

    await ƒS.Location.show(locations.oldStreet);


    await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positionPercent(60, 100));
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0000 + dataForSave.Protagonist.name + ".");
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0000, true, "Player");
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0001);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0001, true, "Player");
    await ƒS.Character.animate(characters.Adelinde, characters.Adelinde.pose.shytalk, midToOutOfCanvas());
    await ƒS.update(2);
    await ƒS.Speech.tell(null, text.Narrator.T0000);
    await ƒS.Speech.tell(characters.StrangerWoman, text.StrangerWomen.T0000);
    //  OPTIONAL: Kamera wackeln lassen
    await horizontalShake();
    await ƒS.Character.show(characters.Elaine, characters.Elaine.pose.mad, ƒS.positionPercent(30, 100));
    await ƒS.Speech.tell(characters.StrangerWoman, text.StrangerWomen.T0001);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0002, true, "Player");
    await ƒS.Speech.tell(characters.StrangerWoman, text.StrangerWomen.T0002);
    await ƒS.Speech.tell(null, text.Narrator.T0001);



    await signalDelay2();


    ƒS.Sound.play(sound.click, 1);

    let meetElaine = {
      iReplyIronically: "Ironisch antworten.",
      iObey: "Der Frau aus dem Weg gehen.",
      imBeingRude: "Im selben Ton antworten.",
      iLookForHelp: "Verständnislos in die Gegend schauen."
    };


    let rudeStrangerWoman = await ƒS.Menu.getInput(meetElaine, "choices");

    switch (rudeStrangerWoman) {
      case meetElaine.iReplyIronically:
        ƒS.Sound.play(sound.click, 1);
        //continue writing on this path here
        await ƒS.Speech.tell(dataForSave.Protagonist, "Sie sind sicher, dass Sie mich meinen?", true, "Player");
        await ƒS.Speech.tell(characters.Elaine, "Wie bitte?!");
        await ƒS.Speech.tell(null, "");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Sie haben mich schon richtig verstanden.", true, "Player");
        await ƒS.Speech.tell(characters.Elaine, "#### von dir, wie ####### du?");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Was?", true, "Player");
        await ƒS.Speech.tell(null, "Mist.");
        await ƒS.Speech.tell(characters.Elaine, "Hörst du schlecht?");
        // a choice within a choice
        let replyToElaine = {
          iSayYes: "Bejahen.",
          iSayNo: "Verneinen"
        };

        let talkBack = await ƒS.Menu.getInput(meetElaine, "choices");

        switch (talkBack) {
          case replyToElaine.iSayYes:
            ƒS.Sound.play(sound.click, 1);
            //continue writing on this path here
            await ƒS.Speech.tell(dataForSave.Protagonist, "Und wenn dem so wäre?", true, "Player");
            await ƒS.Speech.tell(characters.Elaine, "Hmm, dann hast du mich wohl nicht verstanden.");
            await ƒS.Speech.tell(dataForSave.Protagonist, "Habe ich tatsächlich nicht.", true, "Player");
            await ƒS.Speech.tell(characters.Elaine, "...");
            await ƒS.Speech.tell(null, "Ob das ein Fehler war?");
            await ƒS.Speech.tell(characters.Elaine, "Verstehe.");
            await ƒS.Speech.tell(characters.Elaine, "Schon gut. Vergiss es.");
            ƒS.Speech.clear();
            await ƒS.update(1);
            break;
          case replyToElaine.iSayNo:
            ƒS.Sound.play(sound.click, 1);
            //continue writing on this path here
            await ƒS.Speech.tell(dataForSave.Protagonist, "Sie sind sicher, dass Sie mich meinen?", true, "Player");
            await ƒS.Speech.tell(characters.Elaine, "Wie bitte?!");
            await ƒS.Speech.tell(null, "");
            ƒS.Speech.clear();
            await ƒS.update(1);
            break;
        }
        await ƒS.Speech.tell(dataForSave.Protagonist, "Sie haben mich schon richtig verstanden.", true, "Player");
        ƒS.Speech.clear();
        await ƒS.update(1);
        break;
      case meetElaine.iObey:
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
        await ƒS.update(1);
        break;
      case meetElaine.imBeingRude:
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
        await ƒS.update(1);
        break;
      case meetElaine.iLookForHelp:
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
        await ƒS.update(1);
        break;
    }












    ƒS.Sound.fade(sound.mission, 0, 1);


  }
}
