"use strict";
var Tutorial;
(function (Tutorial) {
    async function Text() {
        console.log("Text");
        let text = {
            Narrator: {
                T0000: "<i></i>\
        bla",
                T0001: "<i></i>",
                T0002: "<i></i>",
                T0003: "<i></i>",
                T0004: "<i></i>"
            },
            Protagonist: {
                T0000: "",
                T0001: "Hallo.",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: "",
                T0006: ""
            },
            Ryu: {
                T0000: "Willkommen.",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: ""
            }
        };
        Tutorial.ƒS.Sound.fade(Tutorial.sound.backgroundTheme, 0.2, 0.1, true);
        await Tutorial.ƒS.Location.show(Tutorial.locations.city);
        await Tutorial.ƒS.update(2);
        // await ƒS.Character.show(characters.Sue, characters.Sue.pose.normal, ƒS.positionPercent(60, 100));
        await Tutorial.ƒS.Character.show(Tutorial.characters.Ryu, Tutorial.characters.Ryu.pose.normal, Tutorial.ƒS.positions.bottomcenter);
        // await ƒS.Character.animate(characters.Ryu, characters.Ryu.pose.normal, animation);
        // await ƒS.update(2);
        await Tutorial.ƒS.Speech.tell(Tutorial.characters.Ryu, text.Ryu.T0000);
        await Tutorial.ƒS.Speech.tell(Tutorial.characters.Ryu, "Fremder.");
        // await ƒS.Character.hide(characters.Ryu);
        // await ƒS.Character.show(characters.Sue, characters.Sue.pose.normal, ƒS.positions.bottomcenter);
        // await ƒS.update(2);
        Tutorial.ƒS.Sound.fade(Tutorial.sound.backgroundTheme, 0, 1);
    }
    Tutorial.Text = Text;
})(Tutorial || (Tutorial = {}));
var Tutorial;
(function (Tutorial) {
    async function Animation() {
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
            start: { translation: Tutorial.ƒS.positions.bottomleft, rotation: -20, scaling: new Tutorial.ƒS.Position(0.5, 1.5), color: Tutorial.ƒS.Color.CSS("blue", 0) },
            end: { translation: Tutorial.ƒS.positions.bottomright, rotation: 20, scaling: new Tutorial.ƒS.Position(1.5, 0.5), color: Tutorial.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Tutorial.ƒS.ANIMATION_PLAYMODE.REVERSELOOP
        };
        let animation1 = {
            start: { translation: Tutorial.ƒS.positions.bottomleft, rotation: 20, scaling: new Tutorial.ƒS.Position(0.5, 1.5), color: Tutorial.ƒS.Color.CSS("blue", 0) },
            end: { translation: Tutorial.ƒS.positions.bottomright, rotation: 40, scaling: new Tutorial.ƒS.Position(1.5, 0.5), color: Tutorial.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Tutorial.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
        await Tutorial.ƒS.Location.show(Tutorial.locations.city);
        await Tutorial.ƒS.Character.animate(Tutorial.characters.Sue, Tutorial.characters.Sue.pose.normal, animation);
        await Tutorial.ƒS.update(2);
        await Tutorial.ƒS.Speech.tell(Tutorial.characters.Sue, "Welcome, welcome to FUDGE-Story~~");
        await Tutorial.ƒS.Character.hide(Tutorial.characters.Sue);
        let pose = await Tutorial.ƒS.Character.get(Tutorial.characters.Sue).getPose("Images/Characters/placeholder_girl.png");
        pose.removeComponent(pose.getComponent(Tutorial.ƒ.ComponentAnimator));
        await Tutorial.ƒS.Character.animate(Tutorial.characters.Sue, Tutorial.characters.Sue.pose.normal, animation1);
        await Tutorial.ƒS.update(2);
        // await ƒS.Character.show(characters.Sue, characters.Sue.pose.normal, ƒS.positions.bottomcenter);
        // await ƒS.update(2);
    }
    Tutorial.Animation = Animation;
})(Tutorial || (Tutorial = {}));
var Tutorial;
(function (Tutorial) {
    //zugriff auch innerhalb anderer dateien durch export; fudgecore ist extern nicht teil des programms deshalb muss es erst importiert werden
    Tutorial.ƒ = FudgeCore;
    Tutorial.ƒS = FudgeStory;
    //damit man weiß, dass das Programm läuft
    console.log("Start");
    //Objekte, man kann auf die entsprechenden Daten zugreifen
    // define transitions
    Tutorial.transitions = {
        clock: {
            duration: 3,
            alpha: "../Free Transitions/circlewipe-ccw.jpg",
            edge: 1
        },
        jigsaw: {
            duration: 2,
            alpha: "../Free Transitions/jigsaw 08.png",
            edge: 0.4
        }
    };
    // define sounds as key-string-pairs with the url of the soundfile
    Tutorial.sound = {
        // Music
        backgroundTheme: "Audio/energy.mp3",
        // Sound
        click: "Audio/click.mp3"
    };
    // define locations as key-object-pairs, the objects with the properties name, background and an optional foreground
    Tutorial.locations = {
        city: {
            name: "CloudyCity",
            background: "Images/Backgrounds/bg_city_cloudy.png"
        }
    };
    // define characters as key-object-pairs, the objects with the properties name, origin and an array if poses, each again with a unique key
    Tutorial.characters = {
        Narrator: {
            name: ""
        },
        Sue: {
            name: "Sue",
            origin: Tutorial.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                normal: "Images/Characters/placeholder_girl.png"
            }
        },
        Ryu: {
            name: "Ryu",
            origin: Tutorial.ƒS.ORIGIN.BOTTOMCENTER,
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
            case Tutorial.ƒ.KEYBOARD_CODE.F4:
                console.log("Save");
                await Tutorial.ƒS.Progress.save();
                break;
            case Tutorial.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Tutorial.ƒS.Progress.load();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
        let scenes = [
            { scene: Tutorial.Text, name: "HowToText" },
            { scene: Tutorial.Animation, name: "HowToAnimate" }
        ];
        // start the sequence
        Tutorial.ƒS.Progress.go(scenes);
    }
})(Tutorial || (Tutorial = {}));
//# sourceMappingURL=Tutorial.js.map