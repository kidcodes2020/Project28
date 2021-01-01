class Tree {
    constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.width=450;
		this.height=600;
		this.thickness=10;
		
		this.image=loadImage("Picture/Mangoes/tree.png")
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true})
		//this.leftBody=Bodies.rectangle(0, this.y-this.height/2, this.thickness, this.height, {isStatic:false})
		//this.rightBody=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:false})
		
		World.add(world, this.body)
		//World.add(world, this.leftBody)
		//World.add(world, this.rightBody);

	}
	display()
	{
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y+10);
			fill("white");
			imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height)
			pop()
			
	}
}