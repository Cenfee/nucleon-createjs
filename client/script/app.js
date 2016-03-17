//自定义的全局变量
var canvas, stage, images, ss, properties,
    homeView,
    homeModel;

// 全局属性
properties =
{
    width: 550,
    height: 400,
    fps: 24,
    color: "#FFFFFF",
    webfonts: {},
    manifest: []
};

function init() {
	// --- write your JS code here ---
	
	canvas = document.getElementById("canvas");
	images = images||{};
	ss = ss||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadFile({src:"asset/common/index_atlas_.json", type:"spritesheet", id:"index_atlas_"}, true);
	loader.loadManifest(properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
	var queue = evt.target;
	ss["index_atlas_"] = queue.getResult("index_atlas_");


	stage = new createjs.Stage(canvas);

	createjs.Ticker.setFPS(properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

    //可以考虑视图不保持引用
    homeView = new HomeView();

    homeModel = new HomeModel();
}
