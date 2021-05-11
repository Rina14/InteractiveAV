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
        let text;
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
        await AV.ƒS.Character.show(AV.characters.Adelinde, AV.characters.Adelinde.pose.shytalk, AV.ƒS.positionPercent(60, 30));
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
    //zugriff auch innerhalb anderer dateien durch export; fudgecore ist extern nicht teil des programms deshalb muss es erst importiert werden
    AV.ƒ = FudgeCore;
    AV.ƒS = FudgeStory;
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
    // let gameMenuOptions = {
    //   save: "Save",
    //   load: "Load"
    // close: "Aus"
    // };
    // let gameMenu = ƒS.Menu.create(gameMenuOptions, saveNload, "gameMenu");
    // async function saveNload(_option: string): Promise<void> {
    //   console.log(_option);
    //   if (_option == gameMenuOptions.load) {
    //     await ƒS.Progress.load();
    //   }
    //   else if (_option == gameMenuOptions.save) {
    //     await ƒS.Progress.save();
    //   }
    // if (_option == gameMenuOptions.close)
    //   gameMenu.close();
    // }
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
    window.addEventListener("load", start);
    function start(_event) {
        // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
        let scenes = [
            { scene: AV.HearingLoss, name: "Welcome to an almost muted world" },
            { scene: AV.Friendship, name: "Estimate your value" }
        ];
        // start the sequence
        AV.ƒS.Progress.setData(AV.dataForSave);
        AV.ƒS.Progress.go(scenes);
    }
})(AV || (AV = {}));
//# sourceMappingURL=AV.js.map