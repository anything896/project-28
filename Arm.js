class Hand{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.arm1 = Constraint.create(options);
        World.add(world, this.arm1);
    }
fly(){
    this.arm1.bodyA=null
}
    display(){
        if(this.arm1.bodyA){
            
        
        var pointA = this.arm1.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}
