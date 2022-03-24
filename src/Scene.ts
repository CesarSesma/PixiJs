import { Container } from "pixi.js";
import { GokuKame } from "./GokuKame";

export class Scene extends Container {
    constructor(){
        super();
        const gokuPoder: GokuKame = new GokuKame();
        this.addChild(gokuPoder);
    }

}