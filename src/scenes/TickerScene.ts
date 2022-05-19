import { AnimatedSprite, Container, Texture } from "pixi.js";
import { IUpdateable } from "../utils/IUddateable";

export class TickerScene extends Container implements IUpdateable {

    private sonicCorriendo: AnimatedSprite;
    constructor() {
        super();
        this.sonicCorriendo = new AnimatedSprite(
            [
                Texture.from("Sonic0"),
                Texture.from("Sonic1"),
                Texture.from("Sonic2"),
                Texture.from("Sonic3"),
                Texture.from("Sonic4"),
                Texture.from("Sonic5"),
                Texture.from("Sonic6"),
                Texture.from("Sonic7"),
            ], true
        );
        this.sonicCorriendo.play();
        this.sonicCorriendo.animationSpeed = 0.2;
        this.addChild(this.sonicCorriendo);

    //    Ticker.shared.add(this.update, this)
    }
    update(_deltaTime: number, deltaFrame: number): void {
        this.sonicCorriendo.update(deltaFrame);
        this.sonicCorriendo.x += 10;
    }
/*    public override update(_deltaTime: number, deltaFrame: number): void {
       this.sonicCorriendo.update(deltaFrame); 
    }
    private update(deltaFrame:number) {
//        deltaFrame = deltaFrame * 0;
        this.sonicCorriendo.update(deltaFrame);
//        console.log(deltaFrame, Ticker.shared.FPS);
        if(keyboard.state.get("KeyA")){
            this.sonicCorriendo.x++;
        }
    }*/
}