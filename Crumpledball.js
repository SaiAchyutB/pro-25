class Crumpledball{
	constructor(x,y)
	{
		
		
		var options = {

			isStatic:false,
            restitution: 0.5,
            friction: 0,
            
			density:1.2
        }
        this.r = 43;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image=loadImage("paper.png")
        World.add(world, this.body);
		


	}
	display()
	{

		image(this.image,this.body.position.x,this.body.position.y,50,50);
	}

}

