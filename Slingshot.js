class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.joint = Constraint.create(options);
        World.add(world, this.joint);
    }

    display(){
        if (this.joint.bodyA) {
            var pointA = this.joint.bodyA.position;
            var pointB = this.joint.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
   }
    
}