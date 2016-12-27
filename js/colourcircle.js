function ColourCircle(innercol, outercol, x, y, stage){
	//this.container = null;
	this.scale = stage.canvas.width/1200;
	this.radius = 22.5*this.scale;
	this.strokewidth = 9.5*this.scale;
	this.innercol = innercol;
	this.outercol = outercol;
	this.circle = null;
	this.dragging = false;
	//this.createContainer = function(){
	//	this.container = new createjs.Container();
	//}

	this.setContainerPosition = function(x,y){
		this.circle.x = x;
		this.circle.y = y;
		stage.addChild(this.circle);
		stage.update();
	}

	this.setDragDropListeners = function(){
		var c = this.circle;
		var d = this;
		var s = stage;
		this.circle.on("mousedown", function (evt) {
			this.offset = {x: c.x - evt.stageX, y: c.y - evt.stageY};
			this.dragging = false;
		});
		this.circle.on("pressmove", function (evt) {
			c.x = evt.stageX + this.offset.x;
			c.y = evt.stageY + this.offset.y;
			this.dragging = true;
		});
		this.circle.on("click", function (evt) {
			if (this.dragging!=true){
				//it's a click
				console.log("click");
			}
			this.dragging = false;
		});
	}

	this.init = function(){
		var circle = new createjs.Shape();
		circle.graphics.beginFill(this.innercol).drawCircle(0,0,this.radius);
		circle.graphics.beginStroke(this.outercol);
		circle.graphics.setStrokeStyle(this.strokewidth);
		circle.graphics.drawCircle(0,0,this.radius);
		this.circle = circle;
		this.setContainerPosition(x,y);
		this.setDragDropListeners();
		stage.update();
		//console.log(this.container);
	}
}