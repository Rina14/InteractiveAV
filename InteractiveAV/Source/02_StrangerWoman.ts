namespace AV {
  export async function StrangerWoman(): ƒS.SceneReturn {
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
        T0000: "Auf geht's! Ich hole noch schnell einen Einkaufswagen, du kannst schon einmal reingehen, ",
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
      }
    };


    // Hide dB-Meter with its text
    document.getElementById("avg-level").hidden = true;
    document.getElementById("avg-level-text").hidden = true;
    document.getElementById("dB").hidden = true;




    let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
    let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
    // let pressK: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.getKeypress(ƒ.KEYBOARD_CODE.K)]);
    // await pressK();


    ƒS.Speech.hide();

    ƒS.Sound.play(sound.mission, 0.1, true);
    ƒS.Sound.fade(sound.mission, 0.3, 4);

    await ƒS.Location.show(locations.oldStreet);


    await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positions.bottomcenter);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0000 + dataForSave.Protagonist.name + ".");
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0000, true, "Player");
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0001);
    ƒS.Speech.hide();
    await ƒS.Character.animate(characters.Adelinde, characters.Adelinde.pose.shytalk, midToOutOfCanvas());
    ƒS.Character.hide(characters.Adelinde);
    await ƒS.update(2);
    await ƒS.Speech.tell(null, text.Narrator.T0000);
    await ƒS.Speech.tell(characters.StrangerWoman, text.StrangerWomen.T0000);
    ƒS.Sound.play(sound.punch, 1);
    await horizontalShake();
    await ƒS.Character.show(characters.StrangerWoman, characters.StrangerWoman.pose.mad, ƒS.positionPercent(30, 100));
    await ƒS.Speech.tell(characters.StrangerWoman, text.StrangerWomen.T0001);
    await ƒS.update(0.5);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0002, true, "Player");
    await ƒS.Speech.tell(characters.StrangerWoman, text.StrangerWomen.T0002);
    await ƒS.Speech.tell(null, text.Narrator.T0001);


    await signalDelay1();


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
        await ƒS.Speech.tell(dataForSave.Protagonist, "Snd Sie sicher, dass Sie mich meinen?", true, "Player");
        await ƒS.Speech.tell(characters.StrangerWoman, "Wie bitte?!");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Sie haben mich schon richtig verstanden.", true, "Player");
        await ƒS.Speech.tell(characters.StrangerWoman, "#### von dir, wie ####### du?");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Was?", true, "Player");
        await ƒS.Speech.tell(null, "<i>Mist.</i>");
        await ƒS.Speech.tell(characters.StrangerWoman, "Hörst du schlecht?");
        // A choice within a choice to reply to Elaine
        let replyToElaine = {
          iSayYes: "Bejahen.",
          iSayNo: "Verneinen."
        };

        let talkBack = await ƒS.Menu.getInput(replyToElaine, "choices");

        switch (talkBack) {
          case replyToElaine.iSayYes:
            ƒS.Sound.play(sound.click, 1);
            //continue writing on this path here
            await ƒS.Speech.tell(dataForSave.Protagonist, "Und wenn dem so wäre?", true, "Player");
            await ƒS.Speech.tell(characters.StrangerWoman, "Hmm, dann hast du mich wohl nicht verstanden.");
            await ƒS.Speech.tell(dataForSave.Protagonist, "Habe ich tatsächlich nicht.", true, "Player");
            await ƒS.Speech.tell(characters.StrangerWoman, "...");
            await ƒS.Speech.tell(null, "<i>Ob das ein Fehler war?</i>");
            await ƒS.Speech.tell(characters.StrangerWoman, "Verstehe.");
            await ƒS.Speech.tell(characters.StrangerWoman, "Schon gut. Vergiss es.");
            await ƒS.Speech.tell(null, "<i>Ja.. hoffentlich zieht sie jetzt ab..</i>");
            await ƒS.Character.hide(characters.StrangerWoman);
            await ƒS.Character.show(characters.StrangerWoman, characters.StrangerWoman.pose.normal, ƒS.positionPercent(30, 100));
            await ƒS.update(0.1);
            await ƒS.Speech.tell(characters.StrangerWoman, "Wobei...");
            await ƒS.Speech.tell(characters.StrangerWoman, "Entschuldige bitte wegen eben. Ich habe mich nur verlaufen und finde einfach diese ####straße nicht.");
            await ƒS.Speech.tell(null, "<i>Hmm.. naja, was soll's.</i>");
            await ƒS.Speech.tell(dataForSave.Protagonist, "Könnten Sie das bitte wiederholen?", true, "Player");
            await ƒS.Speech.tell(characters.StrangerWoman, "Ähh, ####straße. Weißt du wo das ist?");
            await ƒS.Speech.tell(dataForSave.Protagonist, "Tut mir leid, ich habe den Namen der Straße immer noch nicht verstanden..", true, "Player");
            await ƒS.Character.hide(characters.StrangerWoman);
            await ƒS.Character.show(characters.StrangerWoman, characters.StrangerWoman.pose.mad, ƒS.positionPercent(30, 100));
            await ƒS.update(0.1);
            await ƒS.Speech.tell(characters.StrangerWoman, "Machst du dich etwa über mich lustig?");
            await ƒS.Speech.tell(dataForSave.Protagonist, "Nein, wirklich nicht. Ich höre einfach nur schlecht.", true, "Player");
            await ƒS.Speech.tell(characters.StrangerWoman, "SANDSTRASSE!!");
            await ƒS.Speech.tell(dataForSave.Protagonist, "Achso. Das weiß ich leider nicht.", true, "Player");
            await ƒS.Character.hide(characters.StrangerWoman);
            await ƒS.Character.show(characters.StrangerWoman, characters.StrangerWoman.pose.normal, ƒS.positionPercent(30, 100));
            await ƒS.update(0.1);
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            await ƒS.update(1);
            break;
          case replyToElaine.iSayNo:
            ƒS.Sound.play(sound.click, 1);
            await ƒS.Speech.tell(dataForSave.Protagonist, "Nein.", true, "Player");
            await ƒS.Speech.tell(null, "<i>Der muss ich gar nichts sagen. Soll sie doch denken, ich veräppel sie...</i>");
            await ƒS.Speech.tell(characters.StrangerWoman, "Aha.");
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            await ƒS.update(1);
            break;
        }
        // continue choice one - reply ironically
        await ƒS.Speech.tell(characters.StrangerWoman, "Na, toll.. Wo muss ich nur hin?");
        await ƒS.Character.hide(characters.StrangerWoman);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(null, "<i>Und da geht sie einfach weg.<p>Super.</i>");
        await ƒS.Speech.tell(null, "<i>Oh man. Zum Glück sind nicht alle so drauf.</i>");
        await ƒS.Speech.tell(null, "<i>Allerdings ist das trotzdem ein blödes Gefühl..</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1);
        break;
      case meetElaine.iObey:
        ƒS.Sound.play(sound.click, 1);
        await ƒS.Speech.tell(null, "<i>Ich habe gerade so gar keine Lust auf Stress.</i>");
        await ƒS.Speech.tell(characters.StrangerWoman, "Geht doch.");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Naja, Sie waren diejenige, die mich angerempelt hat und nicht umgekehrt.", true, "Player");
        await ƒS.Speech.tell(characters.StrangerWoman, "Stell dich nicht so an.");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Hören Sie, ich möchte keinen Streit anfachen.", true, "Player");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Wieso gehen Sie nicht einfach weiter?", true, "Player");
        await ƒS.Speech.tell(characters.StrangerWoman, "Sag mir nicht ### ich zu tun ####, verstanden?");
        await ƒS.Speech.tell(null, "<i>Gut, das habe ich noch verstanden. Hoffentlich geht sie jetzt einfach.</i>");
        await ƒS.Speech.tell(characters.StrangerWoman, "### ##### ### ####.");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Was?", true, "Player");
        await ƒS.Speech.tell(characters.StrangerWoman, "ich sagte: 'einen ###### #### ####'.");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Einen was?", true, "Player");
        await ƒS.Character.hide(characters.StrangerWoman);
        await ƒS.Character.show(characters.StrangerWoman, characters.StrangerWoman.pose.innocent, ƒS.positionPercent(30, 100));
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.StrangerWoman, "Bemitleidenswert.");
        await ƒS.Speech.tell(null, "<i>Was zum Henker war das denn bitte?! Aber sonst geht's der Frau gut?</i>");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Blöde Ziege...", true, "Player");
        await ƒS.Character.hide(characters.StrangerWoman);
        await ƒS.Character.show(characters.StrangerWoman, characters.StrangerWoman.pose.mad, ƒS.positionPercent(30, 100));
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.StrangerWoman, "Das habe ich gehört.");
        await ƒS.Speech.tell(null, "<i>Ups.</i>");
        await ƒS.Speech.tell(null, "<i>Ihrem Verhalten nach zu urteilen, hat sie mich aber ganz sicher beleidigt..</i>");
        await ƒS.Speech.tell(null, "<i>Ihre Haltung und ihr Blick sprechen auch dafür!</i>");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Naja, wenn Sie mich beleidigen, haben Sie das wohl verdient. Meinen Sie nicht?", true, "Player");
        await ƒS.Speech.tell(characters.StrangerWoman, "Ich meinte 'EINEN SCHÖNEN TAG NOCH.'");
        await ƒS.Speech.tell(dataForSave.Protagonist, "...", true, "Player");
        await ƒS.Speech.tell(characters.StrangerWoman, "Aber hauptsache gleich beleidigend werden.");
        await ƒS.Character.hide(characters.StrangerWoman);
        await ƒS.update(0.1);
        await ƒS.Speech.tell(null, "<i>Ich fühle mich schrecklich..</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1);
        break;
      case meetElaine.imBeingRude:
        ƒS.Sound.play(sound.click, 1);
        await ƒS.Speech.tell(null, "<i>Aber wenn man mir schon so kommt...</i>");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Nö.", true, "Player");
        await ƒS.Speech.tell(characters.StrangerWoman, "Wie bitte?! So kannst du nicht mit mir reden!");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Hören Sie sich eigentlich selbst zu?", true, "Player");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Sie hätten mich auch einfach nett darum bitten können.", true, "Player");
        await ƒS.Speech.tell(characters.StrangerWoman, "Tsk.");
        ƒS.Character.hide(characters.StrangerWoman);
        await ƒS.Speech.tell(null, "<i>Und da ist sie auch schon wieder weg... Gut für mich.</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1);
        break;
      case meetElaine.iLookForHelp:
        ƒS.Sound.play(sound.click, 1);
        await ƒS.Speech.tell(null, "<i>Komm schon, Adelinde. Wo bleibst du.</i>");
        await ƒS.Speech.tell(null, "<i>Ach, sie spricht noch mit einer Bekannten.</i>");
        await ƒS.Speech.tell(dataForSave.Protagonist, "...", true, "Player");
        await ƒS.Speech.tell(characters.StrangerWoman, "Hallo?");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Hi.", true, "Player");
        await ƒS.Speech.tell(characters.StrangerWoman, "Das ist alles?");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Wollen Sie sich nicht entschuldigen?", true, "Player");
        await ƒS.Speech.tell(characters.StrangerWoman, "Guter Witz.");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Bitte?", true, "Player");
        await ƒS.Speech.tell(characters.StrangerWoman, "Das ist ja wohl deine Aufgabe.");
        await ƒS.Speech.tell(dataForSave.Protagonist, "Ah ja, wirklich? Angerempelt haben Sie mich aber.", true, "Player");
        await ƒS.Speech.tell(null, "<i>Unglaublich, dass mir das ausgerechnet heute passieren muss.</i>");
        await ƒS.Speech.tell(characters.StrangerWoman, "Tsk.");
        await ƒS.Character.hide(characters.StrangerWoman);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(null, "<i>Na, Gott sei Dank ist sie gegangen. Wäre blöd gelaufen, wenn ich etwas falsch verstanden hätte.</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1);
        break;
    }


    await ƒS.Character.animate(characters.Adelinde, characters.Adelinde.pose.shytalk, outOfCanvasToMid());
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0002);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0003, true, "Player");
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0003);
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0004);
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0005);
    await ƒS.Speech.tell(dataForSave.Protagonist, text.Protagonist.T0004, true, "Player");
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0006);
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0007);
    await ƒS.Speech.tell(null, text.Narrator.T0002);



    ƒS.Speech.hide();
    ƒS.Character.hide(characters.Adelinde);
    await ƒS.update(1);
    await ƒS.Location.show(locations.black);
    await ƒS.update(2);
    ƒS.Text.setClass("black");
    await ƒS.Text.print("Ihr seid zusammen einkaufen gegangen, du hast dir ein paar Snacks besorgt und dich abschließend auf den Heimweg gemacht.");
    ƒS.Text.close();
    await ƒS.update(1);
    // ƒS.Inventory.add(items.Chips);
    // ƒS.Inventory.add(items.Lollipops);


    // await ƒS.Inventory.open();



    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await signalDelay2();
    ƒS.Sound.fade(sound.mission, 0, 1);


  }
}
