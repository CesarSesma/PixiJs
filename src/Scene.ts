import { AnimatedSprite, Container, Texture } from "pixi.js";
import { GokuKame } from "./GokuKame";

export class Scene extends Container {
    constructor(){
        super();
        const gokuPoder: GokuKame = new GokuKame();
        this.addChild(gokuPoder);

        const vegetaAnimated: AnimatedSprite = new AnimatedSprite
        ([
            Texture.from("Vegeta0"),
            Texture.from("Vegeta1"),
            Texture.from("Vegeta2"),
            Texture.from("Vegeta3"),
            Texture.from("Vegeta4"),
            Texture.from("Vegeta5"),
            Texture.from("Vegeta6"),
            Texture.from("Vegeta7"),
            Texture.from("Vegeta8"),
            Texture.from("Vegeta9"),
            Texture.from("Vegeta10"),
            Texture.from("Vegeta11"),
            Texture.from("Vegeta12"),
            Texture.from("Vegeta13"),
            Texture.from("Vegeta14"),
            Texture.from("Vegeta15"),
            Texture.from("Vegeta16"),
            Texture.from("Vegeta17"),
            Texture.from("Vegeta18"),
            Texture.from("Vegeta19"),
            Texture.from("Vegeta20"),
            Texture.from("Vegeta21"),
            Texture.from("Vegeta22"),
            Texture.from("Vegeta23")
        ],true);
        vegetaAnimated.play();
        vegetaAnimated.animationSpeed = 0.2;
        this.addChild(vegetaAnimated);

    }

}