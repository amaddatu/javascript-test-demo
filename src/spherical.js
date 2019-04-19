class Spherical{
    constructor(){
        this.position = 0;
    }
    jump(){
        return true;
    }
    moveForward(distance){
        if(distance >= 0){
            this.position += distance;
        }
        return this.position;
    }
}
module.exports = Spherical;