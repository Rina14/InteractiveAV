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
        // Punkte verteilen
        // dataForSave.score += 10;
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
        await AV.ƒS.Character.hide(AV.characters.Doctor);
        AV.ƒS.Speech.hide();
        await AV.ƒS.update(1);
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
        AV.ƒS.Speech.hide();
        AV.ƒS.Character.hide(AV.characters.Adelinde);
        await AV.ƒS.update(0.2);
        await AV.ƒS.Location.show(AV.locations.black);
        await AV.ƒS.update(0.5);
        AV.ƒS.Text.setClass("trainStation");
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
        let signalDelay2 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(2)]);
        // let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
        // let pressK: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.getKeypress(ƒ.KEYBOARD_CODE.K)]);
        // await pressK();
        AV.ƒS.Speech.hide();
        AV.ƒS.Sound.play(AV.sound.mission, 0.1, true);
        AV.ƒS.Sound.fade(AV.sound.mission, 0.3, 4);
        await AV.ƒS.Location.show(AV.locations.oldStreet);
        await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.ƒS.positionPercent(60, 100));
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
        await AV.horizontalShake();
        await AV.ƒS.Character.show(AV.characters.Elaine, AV.characters.Elaine.pose.mad, AV.ƒS.positionPercent(30, 100));
        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, text.StrangerWomen.T0001);
        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, text.Protagonist.T0002, true, "Player");
        await AV.ƒS.Speech.tell(AV.characters.StrangerWoman, text.StrangerWomen.T0002);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0001);
        await signalDelay2();
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
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Sie sind sicher, dass Sie mich meinen?", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.Elaine, "Wie bitte?!");
                await AV.ƒS.Speech.tell(null, "");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Sie haben mich schon richtig verstanden.", true, "Player");
                await AV.ƒS.Speech.tell(AV.characters.Elaine, "#### von dir, wie ####### du?");
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Was?", true, "Player");
                await AV.ƒS.Speech.tell(null, "Mist.");
                await AV.ƒS.Speech.tell(AV.characters.Elaine, "Hörst du schlecht?");
                // a choice within a choice
                let replyToElaine = {
                    iSayYes: "Bejahen.",
                    iSayNo: "Verneinen"
                };
                let talkBack = await AV.ƒS.Menu.getInput(meetElaine, "choices");
                switch (talkBack) {
                    case replyToElaine.iSayYes:
                        AV.ƒS.Sound.play(AV.sound.click, 1);
                        //continue writing on this path here
                        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Und wenn dem so wäre?", true, "Player");
                        await AV.ƒS.Speech.tell(AV.characters.Elaine, "Hmm, dann hast du mich wohl nicht verstanden.");
                        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Habe ich tatsächlich nicht.", true, "Player");
                        await AV.ƒS.Speech.tell(AV.characters.Elaine, "...");
                        await AV.ƒS.Speech.tell(null, "Ob das ein Fehler war?");
                        await AV.ƒS.Speech.tell(AV.characters.Elaine, "Verstehe.");
                        await AV.ƒS.Speech.tell(AV.characters.Elaine, "Schon gut. Vergiss es.");
                        AV.ƒS.Speech.clear();
                        await AV.ƒS.update(1);
                        break;
                    case replyToElaine.iSayNo:
                        AV.ƒS.Sound.play(AV.sound.click, 1);
                        //continue writing on this path here
                        await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Sie sind sicher, dass Sie mich meinen?", true, "Player");
                        await AV.ƒS.Speech.tell(AV.characters.Elaine, "Wie bitte?!");
                        await AV.ƒS.Speech.tell(null, "");
                        AV.ƒS.Speech.clear();
                        await AV.ƒS.update(1);
                        break;
                }
                await AV.ƒS.Speech.tell(AV.dataForSave.Protagonist, "Sie haben mich schon richtig verstanden.", true, "Player");
                AV.ƒS.Speech.clear();
                await AV.ƒS.update(1);
                break;
            case meetElaine.iObey:
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
                await AV.ƒS.update(1);
                break;
            case meetElaine.imBeingRude:
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
                await AV.ƒS.update(1);
                break;
            case meetElaine.iLookForHelp:
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
                await AV.ƒS.update(1);
                break;
        }
        AV.ƒS.Sound.fade(AV.sound.mission, 0, 1);
    }
    AV.StrangerWoman = StrangerWoman;
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
        // ƒS.Sound.fade(sound.again, 0, 1);
        AV.ƒS.Speech.hide();
        await AV.ƒS.Location.show(AV.locations.festivalC);
        await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.ƒS.positionPercent(60, 100));
        await AV.ƒS.update(1);
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, text.Adelinde.T0000);
        enableAudioTest();
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "1");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "2");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "3");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "4");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "5");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "6");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "7");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "8");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "9");
        await AV.ƒS.Speech.tell(AV.characters.Adelinde, "10");
        disableAudioTest();
        // Audio test function
        async function enableAudioTest() {
            window.addEventListener("keydown", handleKeydownForAudio);
            audioBeep = new AV.ƒ.Audio(AV.sound.cutie);
            // await audioBeep.asyncLoad("Sound/Beep.mp3")
            audioUfo = new AV.ƒ.Audio(AV.sound.pinch);
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
        let spatialSound = new AV.SpatialSound();
        spatialSound.start();
        // Audio in 2D-Welt, Knoten hinter der 2D-Welt platzieren
        // ƒS.Sound.fade(sound.again, 0, 1);
        AV.ƒS.Speech.hide();
        await AV.ƒS.Location.show(AV.locations.festivalC);
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
    // window.addEventListener("load", init);
    function dezibelMeter() {
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
                requestAnimationFrame(loop);
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
    AV.dezibelMeter = dezibelMeter;
})(AV || (AV = {}));
var AV;
(function (AV) {
    async function EndingOne() {
        console.log("Start Ending One");
    }
    AV.EndingOne = EndingOne;
})(AV || (AV = {}));
var AV;
(function (AV) {
    async function EndingTwo() {
        console.log("Start Ending Two");
    }
    AV.EndingTwo = EndingTwo;
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
        cutie: "Audio/Sound/cutie.mp3",
        pinch: "Audio/Sound/pinch.flac",
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
        Elaine: {
            name: "Elaine",
            origin: AV.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Elaine_normal.png",
                mad: "Images/Characters/Elaine_mad.png",
                innocent: "Images/Characters/Elaine_innocent.png"
            }
        }
    };
    AV.items = {
        Fudge: {
            name: "Fudge Item",
            description: "A delicious cube of fudge, adds 10 to your health",
            image: "Images/Characters/Ryu_normal.png",
            static: true,
            handler: hndItem
        }
    };
    // data I want to save
    AV.dataForSave = {
        score: 0,
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
        AV.ƒS.Sound.setMasterVolume(volume);
    }
    AV.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        AV.ƒS.Sound.setMasterVolume(volume);
    }
    AV.decrementSound = decrementSound;
    function showCredits() {
        AV.ƒS.Text.addClass("credits");
        AV.ƒS.Text.print("Hello Test Test");
    }
    AV.showCredits = showCredits;
    function showAbout() {
        AV.ƒS.Text.addClass("about");
        AV.ƒS.Text.print("Save: F8,<br> Load: F9, <br>Close Game Menu: M");
    }
    AV.showAbout = showAbout;
    // MENU - create Menu with Buttons
    let inGameMenu = {
        save: "Save",
        load: "Load",
        // close: "Close",
        turnUpVolume: "🔊",
        turndownVolume: "🔈",
        credits: "Credits",
        about: "About",
        // open: "Open"
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
        if (_option == inGameMenu.about) {
            showAbout();
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
    function hndItem(_event) {
        console.log(_event);
    }
    window.addEventListener("load", start);
    function start(_event) {
        // MENU
        AV.gameMenu =
            AV.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
        let scenes = [
            // { scene: HearingLoss, name: "Welcome to an almost muted world" },
            { scene: AV.StrangerWoman, name: "Estimate your value" },
            { scene: AV.GraphInsertion, name: "Graph Insertion" },
            { scene: AV.SpatialSoundScene, name: "Spatial Sound" }
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
                    // case ƒ.KEYBOARD_CODE.ENTER:
                    //   //play Sound
                    //   console.log("Play Audio");
                    //   if (this.cmpAudio.isPlaying)
                    //     this.cmpAudio.play(false);
                    //   else
                    //     this.cmpAudio.play(true);
                    //   break;
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