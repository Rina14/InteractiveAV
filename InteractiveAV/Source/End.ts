namespace AV {
  export async function End(): ƒS.SceneReturn {
    console.log("The End");

    ƒS.Text.setClass("black");
    await ƒS.Text.print("Dies war ein klitzekleiner Einblick in verschiedene Situationen, bei denen man daran erinnert wird, \
    dass man etwas schlechter hört. Es kommt nur darauf an, das Beste daraus zu machen :)<br>Ich hoffe das Spiel hat Spaß gemacht!");
    await ƒS.update(2);
    // ƒS.Text.close();




    
  }
}
