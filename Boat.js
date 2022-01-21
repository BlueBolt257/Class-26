class Boat {
    constructor(x,y,w,h, boatPos){
        var options = {
            restitution: 0.7      
         }
        this.w = w
        this.h = h
        this.boatPos = boatPos;
        this.body = Bodies.rectangle(x,y,this.w,this.h,options)
        World.add(world, this.body)
        this.image = loadImage("Images/boat.png")
    }
    
    display(){
        push()

        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image, 0, this.boatPos, this.w, this.h)
        
        pop()
    }
    remove(index){
        //Arrow function - removes confusion between different objects - used only inside a class
        setTimeout(()=>{
            World.remove(world, this.body) //removing from world
            delete boats[index] //deleting from array
        }, 2000)
    }

    
}








