//Design for the ground - blueprint

class Cannonball {
    //PROPERTIES
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.radius = 30
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
        this.image = loadImage("Images/cannonball.png")
    }

    //FUNCTIONS
    display(){
        push(); //adds new properties
        imageMode(CENTER); //Instructs the computer to take the x & y as the centre of rectangle
        image(this.image,  this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();  //removes last added properties
    }
    shoot(){

        var newAngle = cannon.angle - 30 //degrees
        newAngle = newAngle *(3.14/180) //converting degrees to radians
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5)
        Matter.Body.setStatic(this.body, false) 
        Matter.Body.setVelocity(this.body, {
            x: velocity.x * (180/3.14),
            y: velocity.y * (180/3.14)
        })
    }

    remove(index){
        Matter.Body.setVelocity(this.body,{
            x:0, y:0
        })
        //Arrow function - removes confusion between different objects - used only inside a class
        setTimeout(()=>{
            World.remove(world, this.body) //removing from world
            delete cannonballs[index] //deleting from array
        }, 1000)
    }
}

/*
trex.visible

this - keyword that refers to the object to be created later

trex = createSprite(50, 60, 50, 50)
*/