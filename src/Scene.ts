import { AnimatedSprite, Container, Graphics, Texture, Text, NineSlicePlane } from "pixi.js";
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

        const myGraph: Graphics = new Graphics();

        myGraph.clear();

        myGraph.lineStyle({color: 0xFF00FF, width: 10, alpha: 1});
        myGraph.beginFill(0x00FF00,1);
        myGraph.drawCircle(0,0,100);
        myGraph.endFill();
        myGraph.drawCircle(50,50,100)

        myGraph.position.set(1280/2, 720/2);
        this.addChild(myGraph);

        // texto
        const myText: Text = new Text("Hello World", {fontSize: 150, fill: 0xFF0000, fontFamily: "Comic Sans MS"});
        myText.text = "asasasa";
        myText.position.x = 500;
        myText.angle = 75;
        myText.scale.set(1);
        this.addChild(myText);
     
        // Nine-slice Plane
        const panel = new NineSlicePlane(
            Texture.from("Panel"),
            35,35,35,35
        );
        this.addChild(panel);
        panel.width = 500;
        panel.height= 300;
        panel.scale.set(2);
        panel.position.set(100,100);


    }

}