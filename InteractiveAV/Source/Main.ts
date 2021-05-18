namespace AV {
  //zugriff auch innerhalb anderer dateien durch export; fudgecore ist extern nicht teil des programms deshalb muss es erst importiert werden
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

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
    }
  };

  // data I want to save
  export let dataForSave = {
    score: 0,
    Protagonist: {
      name: "Player"
    }
  };


  let gameMenuOptions = {
    save: "Save",
    load: "Load"
    // close: "Aus"
  };


  // Variable nur zum Löschen für GameMenu
  // let gameMenu: ƒS.Menu;

  async function saveNload(_option: string): Promise<void> {
    console.log(_option);
    if (_option == gameMenuOptions.load) {
      await ƒS.Progress.load();
    }
    else if (_option == gameMenuOptions.save) {
      await ƒS.Progress.save();
    }

    // if (_option == gameMenuOptions.close)
    //   gameMenu.close();
  }

  // SAVE N LOAD function
  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        // dataForSave.Protagonist.name = dataForSave.namePlayer;
        break;
    }
  }

  // Audio Test
  window.addEventListener("load", start);
  function start(_event: Event): void {
    // to close menu
    // let gameMenu = 
    ƒS.Menu.create(gameMenuOptions, saveNload, "gameMenu");
    
    // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
    let scenes: ƒS.Scenes = [
      { scene: HearingLoss, name: "Welcome to an almost muted world" },
      { scene: Friendship, name: "Estimate your value" },
      { scene: AudioTest, name: "Audio test" }
    ];


    // start the sequence
    ƒS.Progress.setData(dataForSave);
    ƒS.Progress.go(scenes);


  }
}