namespace AV {
  export async function Friendship(): ƒS.SceneReturn {
    console.log("Start Friendship");

    let text: {
      Narrator: {
        T0000: "<i></i>",
        T0001: "<i></i>",
        T0002: "<i> </i>"
      }
      Adelinde: {
        T0000: "Hey, "
      }
    };


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




    await ƒS.Location.show(locations.city);

    // await ƒS.Character.animate(characters.Aoi, characters.Aoi.pose.normal, animation);
    // await ƒS.update(2);
    // await ƒS.Speech.tell(characters.Aoi, "Welcome, welcome to FUDGE-Story~~");
    // await ƒS.Speech.tell(characters.Aoi, "Hello " + dataForSave.Protagonist.name);

    await ƒS.Character.show(characters.Adelinde, characters.Adelinde.pose.shytalk, ƒS.positionPercent(60, 30));
    await ƒS.Speech.tell(characters.Adelinde, text.Adelinde.T0000 + dataForSave.Protagonist.name + "!");
    await ƒS.Speech.tell(dataForSave.Protagonist, "Hey, Ade! So ein Zufall dich hier zu treffen.");







    // await ƒS.Character.hide(characters.Aoi);
    // let pose: ƒ.Node = await ƒS.Character.get(characters.Aoi).getPose("Images/Characters/placeholder_girl.png");
    // pose.removeComponent(pose.getComponent(ƒ.ComponentAnimator));

    // await ƒS.Character.animate(characters.Aoi, characters.Aoi.pose.normal, animation1);
    // await ƒS.update(2);


    ƒS.Sound.fade(sound.again, 0, 1);

  }
}
