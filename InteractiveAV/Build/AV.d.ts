/// <reference types="../../aid/build/fudgeaid" />
declare namespace AV {
    function HearingLoss(): ƒS.SceneReturn;
}
declare namespace AV {
    function StrangerWoman(): ƒS.SceneReturn;
}
declare namespace AV {
    function GraphInsertion(): ƒS.SceneReturn;
}
declare namespace AV {
    function SpatialSoundScene(): ƒS.SceneReturn;
}
declare namespace AV {
    function dezibelMeter(): void;
}
declare namespace AV {
    function EndingOne(): ƒS.SceneReturn;
}
declare namespace AV {
    function EndingTwo(): ƒS.SceneReturn;
}
declare namespace AV {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    export import ƒAid = FudgeAid;
    export let transitions: {
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
        flash: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    export let sound: {
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
        click: string;
        Beep: string;
        Beat: string;
        hypnotic: string;
        Ufo: string;
        cutie: string;
        pinch: string;
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
    export let locations: {
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
    export let characters: {
        Narrator: {
            name: string;
        };
        Aoi: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Ryu: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
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
        Elaine: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                mad: string;
                innocent: string;
            };
        };
    };
    export let items: {
        Fudge: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
    };
    export let dataForSave: {
        score: number;
        Protagonist: {
            name: string;
        };
    };
    export function incrementSound(): void;
    export function decrementSound(): void;
    export function showCredits(): void;
    export function showAbout(): void;
    export let gameMenu: ƒS.Menu;
    export let menu: boolean;
    export function leftToRight(): ƒS.AnimationDefinition;
    export function rightToOutOfCanvas(): ƒS.AnimationDefinition;
    export function midToOutOfCanvas(): ƒS.AnimationDefinition;
    export function horizontalShake(): Promise<void>;
    export function verticalShake(): Promise<void>;
    function hndItem(_event: CustomEvent): void;
    export {};
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
