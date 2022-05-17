import { Container, Sprite, Text, Texture } from "pixi.js";
import { Button } from "../ui/Button";
import { keyboard } from "../utils/keyboard";

export class UIDemo extends Container{
    private buttonMouse:Button;
    private buttonTouch:Sprite;
    private buttonPointer:Sprite;
    private lastKeyPressed:Text;

    constructor() {
        super();
        const dialog = new Container();
        dialog.x = 100;
        dialog.y = 50;

        const background = Sprite.from("Panel");
        background.scale.set (0.4);
        dialog.addChild(background);

        this.buttonMouse = new Button(Texture.from("Button Default Mouse"),
        Texture.from("Button Over Mouse"),
        Texture.from("Button Down Mouse")
//        this.onButtonClick.bind(this)
        );
        this.buttonMouse.on("buttonClick", this.onButtonClick, this);
        this.buttonMouse.position.set(445,301);
/*        this.buttonMouse.anchor.set(0.5);
        this.buttonMouse.scale.set (0.5);
        //this.buttonMouse.x = background.width / 2 - this.buttonMouse.width * 0.6;
        //this.buttonMouse.y = this.buttonMouse.height + 20;
        this.buttonMouse.on("mousedown", this.onMouseDown, this)
        this.buttonMouse.on("mouseup", this.onMouseUp, this)
        this.buttonMouse.on("mouseover", this.onMouseOver, this)
        this.buttonMouse.on("mouseout", this.onMouseOut, this)
        this.buttonMouse.interactive = true;*/
        dialog.addChild(this.buttonMouse);
        
        this.buttonTouch = Sprite.from("Button Default Touch");
        this.buttonTouch.position.set(204,304);
        this.buttonTouch.anchor.set(0.5);
        this.buttonTouch.scale.set (0.5);
        this.buttonTouch.on("touchstart", this.onTouchStart, this)
        this.buttonTouch.on("touchend", this.onTouchEnd, this)
        this.buttonTouch.interactive = true;
        dialog.addChild(this.buttonTouch);

        this.buttonPointer = Sprite.from("Button Default Pointer");
        this.buttonPointer.position.set(325,301);
        this.buttonPointer.anchor.set(0.5);
        this.buttonPointer.scale.set (0.5);
        this.buttonPointer.on("pointerdown", this.onPointerDown,this);
        this.buttonPointer.on("pointerup", this.onPointerUp, this);
        this.buttonPointer.interactive = true;
        dialog.addChild(this.buttonPointer);

        this.lastKeyPressed = new Text("Esperando...", {fontSize: 48});
        this.lastKeyPressed.position.set(325,553);
        this.lastKeyPressed.anchor.set(0.5);
        this.lastKeyPressed.scale.set (0.5);
        this.lastKeyPressed.x = background.width / 2;
        //lastKeyPressed.y = this.buttonPointer.y + 175;
        dialog.addChild(this.lastKeyPressed);

//        document.addEventListener("keydown", this.onKeyDown.bind(this))
//        document.addEventListener("keyup", this.onKeyup.bind(this))

        this.addChild(dialog);
        keyboard.down.on("KeyB", this.onKeyB, this)
        keyboard.up.on("KeyB", this.onKeyBUp, this)

    }

/*    private onKeyDown(e:KeyboardEvent):void{
        console.log("key pressed!", e.code);
        this.lastKeyPressed.text = e.code;
        if(e.code == "KeyA"){
            console.log("apretamos la A!")
        }
    }

    private onKeyup(e:KeyboardEvent):void{
        console.log("key release!", e.code);
    }
*/
    private onKeyB():void{
        console.log("apreté la B", this);
    } 
    private onKeyBUp():void{
        console.log("solté la B", this);
    } 
    private onButtonClick():void{
//        console.log("click del nuevo boton", keyboard.state.get("KeyA"));
        console.log("click del nuevo boton", this);

    }
/*    private onMouseDown():void {
        //console.log("mouse down");
        this.buttonMouse.texture = Texture.from("Button Down Mouse");
    }

    private onMouseUp():void {
        console.log("El boton hará algo");
        this.buttonMouse.texture = Texture.from("Button Over Mouse");
    }

    private onMouseOver():void {
        //console.log("mouse Enter");
        this.buttonMouse.texture = Texture.from("Button Over Mouse");
    }

    private onMouseOut():void {
        //console.log("mouse Exit");
        this.buttonMouse.texture = Texture.from("Button Default Mouse");
    }
*/

    private onTouchStart():void {
        this.buttonTouch.texture = Texture.from("Button Down Touch");     
        console.log("touch down");
    }

    private onTouchEnd():void {
        console.log("touch up");
        this.buttonTouch.texture = Texture.from("Button Default Touch");     
    }

    private onPointerDown():void {
        console.log("pointer down");
        this.buttonPointer.texture = Texture.from("Button Down Pointer");
    }

    private onPointerUp():void {
        console.log("pointer up");
        this.buttonPointer.texture = Texture.from("Button Default Pointer");
    }

}