/// <reference types="../../aid/build/fudgeaid" />
declare namespace AV {
    function HearingLoss(): ƒS.SceneReturn;
}
declare namespace AV {
    function StrangerWoman(): ƒS.SceneReturn;
}
declare namespace AV {
    function Home(): ƒS.SceneReturn;
}
declare namespace AV {
    function Premiere(): ƒS.SceneReturn;
}
declare namespace AV {
    class DezibelMeter {
        static isOn: boolean;
        static activateDecibelMeter(): void;
        static deactivateDecibelMeter(): void;
        static dezibelMeter(): void;
    }
}
declare namespace AV {
    function End(): ƒS.SceneReturn;
}
declare namespace AV {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    export import ƒAid = FudgeAid;
    let transitions: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        jigsaw: {
            duration: number;
            alpha: string;
            edge: number;
        };
        mosaik: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        energy: string;
        extremeaction: string;
        again: string;
        dystopian: string;
        emptyStreets: string;
        mission: string;
        mystery: string;
        nightclub: string;
        theProtagonist: string;
        surveillance: string;
        truth: string;
        vengeance: string;
        dancerTheme: string;
        click: string;
        cutie: string;
        punch: string;
        shower: string;
        drop: string;
        hahaha: string;
        ha_haa: string;
        hmmOne: string;
        hmmConfused: string;
        hmpfOne: string;
        sighOne: string;
        sighTwo: string;
        uhHuhCuriousOne: string;
        uhHuhCuriousTwo: string;
        uhHuhCuriousThree: string;
        uhHuhQuestionable: string;
        ummOne: string;
    };
    let locations: {
        city: {
            name: string;
            background: string;
        };
        bathroom: {
            name: string;
            background: string;
        };
        bathroomFoggy: {
            name: string;
            background: string;
        };
        black: {
            name: string;
            background: string;
        };
        apartment: {
            name: string;
            background: string;
        };
        dancerBG: {
            name: string;
            background: string;
        };
        cafe: {
            name: string;
            background: string;
        };
        encoreKitchen: {
            name: string;
            background: string;
        };
        encoreRoomDay: {
            name: string;
            background: string;
        };
        encoreRoomNight: {
            name: string;
            background: string;
        };
        livingRoom: {
            name: string;
            background: string;
        };
        hospital: {
            name: string;
            background: string;
        };
        oldStreet: {
            name: string;
            background: string;
        };
        smallApartmentKitchen: {
            name: string;
            background: string;
        };
        trainOld: {
            name: string;
            background: string;
        };
        trainBeach: {
            name: string;
            background: string;
        };
        trainTunnel: {
            name: string;
            background: string;
        };
        festivalC: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Adelinde: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                smile: string;
                shytalk: string;
                motionless: string;
            };
        };
        Doctor: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        StrangerWoman: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                mad: string;
                innocent: string;
            };
        };
        Anastasia: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                innocent: string;
                unsure: string;
            };
        };
        Mama: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                innocent: string;
                unsure: string;
            };
        };
        Twins: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                shocked: string;
                smile: string;
                surprised: string;
            };
        };
        Ned: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Sed: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Dancer: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
    let dataForSave: {
        Protagonist: {
            name: string;
        };
    };
    function incrementSound(): void;
    function decrementSound(): void;
    function showCredits(): void;
    function showHelp(): void;
    let gameMenu: ƒS.Menu;
    let menu: boolean;
    function leftToRight(): ƒS.AnimationDefinition;
    function midToLeft(): ƒS.AnimationDefinition;
    function rightToOutOfCanvas(): ƒS.AnimationDefinition;
    function midToOutOfCanvas(): ƒS.AnimationDefinition;
    function outOfCanvasToMid(): ƒS.AnimationDefinition;
    function outOfCanvasToLeft(): ƒS.AnimationDefinition;
    function horizontalShake(): Promise<void>;
    function verticalShake(): Promise<void>;
}
declare namespace AV {
    class SpatialSound {
        private out;
        private camera;
        private speedCameraRotation;
        private speedCameraTranslation;
        private cmpAudio;
        private mtxRotatorX;
        private mtxRotatorY;
        private mtxTranslator;
        private mtxInner;
        private mtxOuter;
        private cntMouseX;
        private cntMouseY;
        private viewport;
        start(): void;
        private update;
        private hndPointerMove;
        private hndWheelMove;
        private startInteraction;
        private move;
    }
}
