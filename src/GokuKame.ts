import { Container, Sprite } from "pixi.js";

export class GokuKame extends Container{

    constructor(){
        super();
        const gokuChiquito: Sprite = Sprite.from("Goku");
        const nubeVoladora: Sprite = Sprite.from("Nube");
        const kameHame: Sprite = Sprite.from("Kame");

        gokuChiquito.scale.set(0.5,0.5);
        gokuChiquito.position.set(500,60)
        nubeVoladora.scale.set(2,2);
        nubeVoladora.position.set(100,70)
        kameHame.scale.set(0.5,0.5);
        kameHame.position.set(250,-360);
        kameHame.angle = 45;

        this.addChild(gokuChiquito);
        this.addChild(nubeVoladora);
        this.addChild(kameHame);


    }
}