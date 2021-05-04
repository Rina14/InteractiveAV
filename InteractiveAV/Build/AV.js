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
                T0006: "<i>Achso.. Cochlea. Was das ist wusste ich zwar selbst, aber nun gut...</i>"
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
            Ryu: {
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: ""
            }
        };
        /** Ticker */
        AV.ƒS.Speech.setTickerDelays(30, 2);
        // for moments with individual delays
        let signalDelay2 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(2)]);
        let signalDelay1 = AV.ƒS.Progress.defineSignal([() => AV.ƒS.Progress.delay(1)]);
        AV.ƒS.Sound.fade(AV.sound.again, 0.1, 0.1, true);
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
        await AV.ƒS.Speech.tell(AV.characters.Doctor, "Du hast eine Sc....empf....keit.");
        await AV.ƒS.Speech.tell(AV.characters.Protagonist, text.Protagonist.T0000);
        await AV.ƒS.Speech.tell(AV.characters.Doctor, text.Doctor.T0000);
        await AV.ƒS.Speech.tell(AV.characters.Protagonist, text.Protagonist.T0001);
        await AV.ƒS.Speech.tell(AV.characters.Doctor, text.Doctor.T0001);
        await AV.ƒS.Speech.tell(AV.characters.Protagonist, text.Protagonist.T0002);
        await AV.ƒS.Speech.tell(AV.characters.Doctor, text.Doctor.T0002);
        await AV.ƒS.Speech.tell(AV.characters.Doctor, text.Doctor.T0003);
        await AV.ƒS.Speech.tell(AV.characters.Doctor, text.Doctor.T0004);
        await AV.ƒS.Speech.tell(AV.characters.Protagonist, text.Protagonist.T0003);
        await AV.ƒS.Speech.tell(AV.characters.Doctor, text.Doctor.T0005);
        await AV.ƒS.Speech.tell(null, text.Narrator.T0006);
        await AV.ƒS.Character.hide(AV.characters.Doctor);
        await AV.ƒS.Speech.hide();
        await AV.ƒS.update(1);
        await AV.ƒS.Location.show(AV.locations.trainOld);
        await AV.ƒS.update(0.1);
        AV.ƒS.Sound.fade(AV.sound.again, 0, 1);
    }
    AV.HearingLoss = HearingLoss;
})(AV || (AV = {}));
var AV;
(function (AV) {
    async function Friendship() {
        console.log("Animation");
        // let text: {
        //   Narrator: {
        //     T0000: "<i></i>",
        //     T0001: "<i></i>",
        //     T0002: "<i> </i>"
        //   }
        //   Sue: {
        //     T0000: "Hi! Schön Dich kennenzulernen."
        //   }
        // };
        let animation = {
            start: { translation: AV.ƒS.positions.bottomleft, rotation: -20, scaling: new AV.ƒS.Position(0.5, 1.5), color: AV.ƒS.Color.CSS("blue", 0) },
            end: { translation: AV.ƒS.positions.bottomright, rotation: 20, scaling: new AV.ƒS.Position(1.5, 0.5), color: AV.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: AV.ƒS.ANIMATION_PLAYMODE.REVERSELOOP
        };
        let animation1 = {
            start: { translation: AV.ƒS.positions.bottomleft, rotation: 20, scaling: new AV.ƒS.Position(0.5, 1.5), color: AV.ƒS.Color.CSS("blue", 0) },
            end: { translation: AV.ƒS.positions.bottomright, rotation: 40, scaling: new AV.ƒS.Position(1.5, 0.5), color: AV.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: AV.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
        await AV.ƒS.Location.show(AV.locations.city);
        await AV.ƒS.Character.animate(AV.characters.Aoi, AV.characters.Aoi.pose.normal, animation);
        await AV.ƒS.update(2);
        await AV.ƒS.Speech.tell(AV.characters.Aoi, "Welcome, welcome to FUDGE-Story~~");
        await AV.ƒS.Character.hide(AV.characters.Aoi);
        let pose = await AV.ƒS.Character.get(AV.characters.Aoi).getPose("Images/Characters/placeholder_girl.png");
        pose.removeComponent(pose.getComponent(AV.ƒ.ComponentAnimator));
        await AV.ƒS.Character.animate(AV.characters.Aoi, AV.characters.Aoi.pose.normal, animation1);
        await AV.ƒS.update(2);
        // await ƒS.Character.show(characters.Sue, characters.Sue.pose.normal, ƒS.positions.bottomcenter);
        // await ƒS.update(2);
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
        Protagonist: {
            name: "Player"
        },
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
            name: "Doktor",
            origin: AV.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Ryu_normal.png"
            }
        }
    };
    //pc kann nicht wissen, wann und ob eine Rückmeldung kommt, diese könnte auch ausbleiben, weshalb er asynchron weitermacht
    // solange warten, bis speichern/laden erfolgreich war
    //cpu kann halt nicht alleine weiterarbeiten, weil sie auf externe Daten angewiesen ist und man nicht weiß, wann diese ankommen
    // kann auch sein, dass nix ankommt
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
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
        let scenes = [
            { scene: AV.HearingLoss, name: "Welcome to an almost muted world" }
            // { scene: Friendship, name: "Am I worth it?" }
        ];
        // start the sequence
        AV.ƒS.Progress.go(scenes);
    }
})(AV || (AV = {}));
//# sourceMappingURL=AV.js.map