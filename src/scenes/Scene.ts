import { Container, Graphics, Text, Texture, NineSlicePlane } from "pixi.js";
import { GokuKame } from "../game/GokuKame";

export class Scene extends Container {
    constructor(){
        super();
        const gokuPoder: GokuKame = new GokuKame();
        this.addChild(gokuPoder);

        const myGraph: Graphics = new Graphics();

        myGraph.clear();

        myGraph.lineStyle({color: 0xFF00FF, width: 10, alpha: 1});
        myGraph.beginFill(0x00FF00,1);
        myGraph.drawCircle(0,0,100);
        myGraph.endFill();
        myGraph.drawCircle(50,50,100)

        myGraph.position.set(1280/2, 720/2);
        this.addChild(myGraph);

        // texto titulo
        const myText: Text = new Text("Hello World", {fontSize: 130, fill: 0x061BF8, fontFamily: "Comic Sans MS"});
        myText.text = "Tarea 3";
        myText.position.set(550,125);
        myText.scale.set(0.3);
     
        const usrTxt: Text = new Text("usuario", {fontSize: 60, fill: 0xEDF90E, fontFamily: "Segoe UI"})
        usrTxt.text = "CésarSesma";
        usrTxt.position.set(480,450);
        usrTxt.scale.set(0.3);

        const frnTxt: Text = new Text("friend", {fontSize: 60, fill: 0xEDF90E, fontFamily: "Segoe UI"})
        frnTxt.text = "Amigos";
        frnTxt.position.set(480,522);
        frnTxt.scale.set(0.3);

        const infTxt: Text = new Text("info", {fontSize: 60, fill: 0xEDF90E, fontFamily: "Segoe UI"})
        infTxt.text = "Información";
        infTxt.position.set(480,585);
        infTxt.scale.set(0.3);


        const scrTxt: Text = new Text("score", {fontSize: 60, fill: 0xEDF90E, fontFamily: "Segoe UI"})
        scrTxt.text = "100215,35";
        scrTxt.position.set(785,450);
        scrTxt.scale.set(0.3);

        const lnkTxt: Text = new Text("link", {fontSize: 60, fill: 0xEDF90E, fontFamily: "Segoe UI"})
        lnkTxt.text = "Link";
        lnkTxt.position.set(750,522);
        lnkTxt.scale.set(0.3);

        const shdTxt: Text = new Text("shared", {fontSize: 60, fill: 0xEDF90E, fontFamily: "Segoe UI"})
        shdTxt.text = "Compartir";
        shdTxt.position.set(750,585);
        shdTxt.scale.set(0.3);

        // Nine-slice Plane
        const panel = new NineSlicePlane(
            Texture.from("Panel"),
            5,5,5,5
        );
        this.addChild(panel);
        panel.width = 300;
        panel.height= 300;
        panel.scale.set(2.5);
        panel.position.set(250,0);

        const lvlup = new NineSlicePlane(
            Texture.from("Levelup"),
            5,5,5,5
        );
        this.addChild(lvlup);
        lvlup.width = 300;
        lvlup.height= 300;
        lvlup.scale.set(1.5);
        lvlup.position.set(400,20);

        const estrella = new NineSlicePlane(
            Texture.from("Estrella"),
            5,5,5,5
        );
        this.addChild(estrella);
        estrella.width = 400;
        estrella.height= 300;
        estrella.scale.set(1);
        estrella.position.set(330,125);

        const estrella2 = new NineSlicePlane(
            Texture.from("Estrella"),
            5,5,5,5
        );
        this.addChild(estrella2);
        estrella2.width = 400;
        estrella2.height= 300;
        estrella2.scale.set(1);
        estrella2.position.set(460,125);

        const premio = new NineSlicePlane(
            Texture.from("Premio"),
            5,5,5,5
        );
        this.addChild(premio);
        premio.width = 400;
        premio.height= 300;
        premio.scale.set(1.75);
        premio.position.set(415,20);

        const barra = new NineSlicePlane(
            Texture.from("Barra"),
            5,5,5,5
        );
        this.addChild(barra);
        barra.width = 400;
        barra.height= 300;
        barra.scale.set(1);
        barra.position.set(400,235);

        this.addChild(myText);
        this.addChild(usrTxt);
        this.addChild(lnkTxt);
        this.addChild(infTxt);
        this.addChild(scrTxt);
        this.addChild(frnTxt);
        this.addChild(shdTxt);

    }

}