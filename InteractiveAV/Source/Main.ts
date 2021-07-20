namespace AV {
  //zugriff auch innerhalb anderer dateien durch export; fudgecore ist extern nicht teil des programms deshalb muss es erst importiert werden
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  export import ƒAid = FudgeAid;


  //damit man weiß, dass das Programm läuft
  console.log("Start");

  //Objekte, man kann auf die entsprechenden Daten zugreifen
  // define transitions
  export let transitions = {
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
  export let sound = {
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
  export let locations = {
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
  export let characters = {
    Narrator: {
      name: ""
    },
    // Protagonist: {
    //   name: "Player"
    // },
    Aoi: {
      name: "Aoi",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/placeholder_girl.png"
      }
    },
    Ryu: {
      name: "Ryu",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/Ryu_normal.png"
      }
    },
    Adelinde: {
      name: "Adelinde",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        smile: "Images/Characters/Adelinde_smile.png",
        shytalk: "Images/Characters/Adelinde_shytalk.png",
        motionless: "Images/Characters/Adelinde_motionless.png"
      }
    },
    Doctor: {
      name: "Doktor Ryu",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/Ryu_normal.png"
      }
    },
    StrangerWoman: {
      name: "Stranger Woman",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/Elaine_normal.png",
        mad: "Images/Characters/Elaine_mad.png",
        innocent: "Images/Characters/Elaine_innocent.png"
      }
    },
    Elaine: {
      name: "Elaine",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/Elaine_normal.png",
        mad: "Images/Characters/Elaine_mad.png",
        innocent: "Images/Characters/Elaine_innocent.png"
      }
    }
  };

  export let items = {
    Fudge: {
      name: "Fudge Item",
      description: "A delicious cube of fudge, adds 10 to your health",
      image: "Images/Characters/Ryu_normal.png",
      static: true,
      handler: hndItem
    }
  };


  // data I want to save
  export let dataForSave = {
    score: 0,
    Protagonist: {
      name: "Player"
    }
  };


  // MENU - AUDIO functions
  let volume: number = 1.0;

  export function incrementSound(): void {
    if (volume >= 100)
      return;
    volume += 0.5;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function decrementSound(): void {
    if (volume <= 0)
      return;
    volume -= 0.5;
    ƒS.Sound.setMasterVolume(volume);
  }


  export function showCredits(): void {
    ƒS.Text.addClass("credits");
    ƒS.Text.print("Hello Test Test");
  }

  export function showAbout(): void {
    ƒS.Text.addClass("about");
    ƒS.Text.print("Save: F8,<br> Load: F9, <br>Close Game Menu: M");
  }


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



  // MENU - create Menu with buttons
  export let gameMenu: ƒS.Menu;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    if (_option == inGameMenu.save) {
      await ƒS.Progress.save();
    }
    else if (_option == inGameMenu.load) {
      await ƒS.Progress.load();
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
  export let menu: boolean = true;

  // SAVE N LOAD function
  // shortcuts to save and load game progress
  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save Game Progress");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load Game Progress");
        await ƒS.Progress.load();
        break;
      // Englische Tastatur beachten, Öffnen und Schließen des Inventars mit derselben Taste
      case ƒ.KEYBOARD_CODE.M:
        if (menu) {
          console.log("Close Game Menu");
          gameMenu.close();
          menu = false;
        }
        else {
          console.log("Open Game Menu");
          gameMenu.open();
          menu = true;
        }
        break;
    }
  }

  // shortcuts to open and close the inventory
  document.addEventListener("keydown", hndKeypressForInventory);
  async function hndKeypressForInventory(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.I:
        console.log("Open Inventory");
        await ƒS.Inventory.open();
        break;
      case ƒ.KEYBOARD_CODE.ESC:
        console.log("Close Inventory");
        await ƒS.Inventory.open();
        ƒS.Inventory.close();
        break;
    }
  }

  // Animations available in all scenes
  export function leftToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft },
      end: { translation: ƒS.positions.bottomright },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function rightToOutOfCanvas(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30, 100) },
      end: { translation: ƒS.positionPercent(120, 100) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function midToOutOfCanvas(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(60, 100) },
      end: { translation: ƒS.positionPercent(120, 100) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }



  // horizontal and vertical Shaker 
  
  export async function horizontalShake(): Promise<void> {
    let scene: HTMLElement = <HTMLElement>document.getElementsByTagName("scene")[0];

    for (let i: number = 0; i < 15; i++) {
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


  export async function verticalShake(): Promise<void> {
    let scene: HTMLElement = <HTMLElement>document.getElementsByTagName("scene")[0];

    for (let i: number = 0; i < 15; i++) {
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




  function hndItem(_event: CustomEvent): void {
    console.log(_event);
  }


  window.addEventListener("load", start);
  function start(_event: Event): void {
    // MENU
    gameMenu =
      ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");

    // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
    let scenes: ƒS.Scenes = [
      // { scene: HearingLoss, name: "Welcome to an almost muted world" },
      { scene: StrangerWoman, name: "Estimate your value" },
      { scene: GraphInsertion, name: "Graph Insertion" },
      { scene: SpatialSoundScene, name: "Spatial Sound" }

    ];


    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);


    // start the sequence
    ƒS.Progress.go(scenes);
  }
}