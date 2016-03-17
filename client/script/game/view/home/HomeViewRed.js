/**
 * Created by chenxuanfei on 2016/3/17.
 */

(HomeViewRed = function(mode,startPosition,loop)
{
    this.initialize(mode,startPosition,loop,{});

    // 图层 1
    this.instance = new HomeViewRedImage();

    this.timeline.addTween(createjs.Tween.get(this.instance).wait(1));

    this.nominalBounds = new createjs.Rectangle(0,0,91,111);

}).prototype = new createjs.MovieClip();


(HomeViewRedImage = function()
{
    this.spriteSheet = ss["index_atlas_"];
    this.gotoAndStop(1);
}).prototype = new createjs.Sprite();
