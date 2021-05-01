namespace AV {
  export async function Text(): ƒS.SceneReturn {
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



    ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
    await ƒS.Location.show(locations.city);
    await ƒS.update(2);
    // await ƒS.Character.show(characters.Sue, characters.Sue.pose.normal, ƒS.positionPercent(60, 100));
    await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomcenter);
    // await ƒS.Character.animate(characters.Ryu, characters.Ryu.pose.normal, animation);
    // await ƒS.update(2);
    await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0000);
    await ƒS.Speech.tell(characters.Ryu, "Fremder.");
    // await ƒS.Character.hide(characters.Ryu);
    // await ƒS.Character.show(characters.Sue, characters.Sue.pose.normal, ƒS.positions.bottomcenter);
    // await ƒS.update(2);





    ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
  }
}