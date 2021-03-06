import { Application, Loader, Ticker } from 'pixi.js'
import { assets } from './assets';
import { TickerScene } from './scenes/TickerScene';
import { keyboard } from './utils/keyboard';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

keyboard.initialize();

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

Loader.shared.add(assets);
Loader.shared.onComplete.add(()=>{
const myScene = new TickerScene();
app.stage.addChild(myScene);
Ticker.shared.add(function(deltaFrame){
	myScene.update(Ticker.shared.deltaMS, deltaFrame)
})
});

Loader.shared.load();