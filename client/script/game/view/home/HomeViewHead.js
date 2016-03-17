/**
 * Created by chenxuanfei on 2016/3/17.
 */
(HomeViewHead = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 图层 1
    this.instance = new HomeViewHeadImage();

    this.timeline.addTween(createjs.Tween.get(this.instance).wait(1));

    this.nominalBounds = new createjs.Rectangle(0,0,152,152);
}).prototype = new createjs.MovieClip();



(HomeViewHeadImage = function() {
    this.spriteSheet = ss["index_atlas_"];
    this.gotoAndStop(0);
}).prototype = new createjs.Sprite();
