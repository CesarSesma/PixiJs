import { Application, Container, Loader, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize", ()=>{
//	console.log("resiceado!");
	const scaleX = window.innerWidth / app.screen.width;
	const scaley = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaley);

//	const screenWidth = app.screen.width * scale;
	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth)/2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight)/2);

//	app.view.style.width = screenWidth + "100px"
	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";
});
window.dispatchEvent(new Event("resize"));

Loader.shared.add({url:"./pikachu.png", name:"myPikachu"})
Loader.shared.add({url:"./sombrero.png", name:"Sombrero"})
Loader.shared.add({url:"./hierbaOri.png", name:"Yuyos"})
Loader.shared.add({url:"./goku.png", name:"Goku"})
Loader.shared.add({url:"./nube.png", name:"Nube"})
Loader.shared.add({url:"./kamehameOri.png", name:"Kame"})

Loader.shared.onComplete.add(()=>{

const clampy: Sprite = Sprite.from("myPikachu");

clampy.x = 100;
clampy.y = 100;
clampy.scale.x = 0.5;
clampy.scale.y = 0.5;

//clampy.angle = -45;
//clampy.angle = 45;

const sombrerito: Sprite = Sprite.from("Sombrero");
const yuyos: Sprite = Sprite.from("Yuyos");

const pikachuWithSombrerito: Container = new Container();

//yuyos.position.set(50,550)
//yuyos.scale.set(0.3,0.3);
//app.stage.addChild(clampy);
//app.stage.addChild(sombrerito);
//app.stage.addChild(yuyos);

pikachuWithSombrerito.addChild(yuyos);
pikachuWithSombrerito.addChild(clampy);
pikachuWithSombrerito.addChild(sombrerito);

pikachuWithSombrerito.scale.set(0.5);
pikachuWithSombrerito.x = -50;
pikachuWithSombrerito.y = 450;

//console.log(sombrerito.toGlobal(new Point()));
//console.log(sombrerito.parent.toGlobal(sombrerito.position));

//640 x 360
const aux = sombrerito.parent.toLocal(new Point(640,360));
sombrerito.position.x = aux.x;
sombrerito.position.y = aux.y;	
sombrerito.scale.set(0.5,0.5)
sombrerito.position.set(125,40)

app.stage.addChild(pikachuWithSombrerito);
//-------------------------------------------------------------------------------------------
const gokuChiquito: Sprite = Sprite.from("Goku");
const nubeVoladora: Sprite = Sprite.from("Nube");
const kameHame: Sprite = Sprite.from("Kame");
//app.stage.addChild(gokuChiquito);
//app.stage.addChild(nubeVoladora);
//app.stage.addChild(kameHame);

gokuChiquito.scale.set(0.5,0.5);
gokuChiquito.position.set(500,60)

nubeVoladora.scale.set(2,2);
nubeVoladora.position.set(100,70)

kameHame.scale.set(0.5,0.5);
kameHame.position.set(250,-360);
kameHame.angle = 45;

const gokuPoder: Container = new Container();
gokuPoder.addChild(gokuChiquito);
gokuPoder.addChild(nubeVoladora);
gokuPoder.addChild(kameHame);

app.stage.addChild(gokuPoder);
//-------------------------------------------------------------------------------------------

});

Loader.shared.load();