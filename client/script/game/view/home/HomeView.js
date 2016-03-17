(HomeView = function(mode,startPosition,loop)
{
        this.initialize(mode,startPosition,loop,{});

        // 图层 2
        this.instance = new HomeViewRed();
        this.instance.setTransform(477,79,1,1,0,0,0,45.5,55.5);

        this.timeline.addTween(createjs.Tween.get(this.instance).to({x:96,y:303},34).wait(1));

        // 图层 1
        this.instance_1 = new HomeViewHead();
        this.instance_1.setTransform(83.5,86.5,1,1,0,0,0,76,76);

        this.timeline.addTween(createjs.Tween.get(this.instance_1).to({rotation:66,x:457.4,y:288.4},34).wait(1));


        stage.addChild(this);

}).prototype = new createjs.MovieClip();

