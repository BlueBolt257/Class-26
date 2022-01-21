

class Cannon{
    constructor(x,y,w,h,a){
        
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.angle = a
        this.cannonimage = loadImage("Images/canon.png")
        this.cannonbase = loadImage("Images/cannonBase.png")
    }
    
    display(){
        push()
        
        translate(this.x,this.y) //movement without rotation
        rotate(this.angle)
        imageMode(CENTER)
        image(this.cannonimage,0,0,this.w,this.h) //x, y = 0 when translate() is used
        pop()

        image(this.cannonbase,70,28,200,200)

        if(keyIsDown(LEFT_ARROW) && this.angle > -30){
            this.angle = this.angle - 1
        }
        if(keyIsDown(RIGHT_ARROW) && this.angle < 70){
            this.angle = this.angle + 1
        }
        //console.log(this.angle)
    }
}

/*
ANGLES - degrees

Unit - Radians

degree : 0 - 360
radian : 0 - 2pi

pi = 22/7 or 3.14

0 deg = 0 rad
360 deg = 2pi rad
180 deg = pi rad
90 deg = pi/2 rad
60 deg = pi/3 rad
45 deg = pi/4 rad
30 deg = pi/6 rad

Convert angle to radians
angle * pi/180 randians

*/


























