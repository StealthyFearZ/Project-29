    class Slingshot{
        constructor(bodyA,pointB){
            var prop= {
                bodyA : bodyA,
                pointB : pointB,
                stiffness : 0.04,
                length : 10
            }
            this.pointB= pointB;
        this.sling = Constraint.create(prop);
            World.add(world,this.sling);  
        }
        display(){
            if(this.sling.bodyA){
            var ptA=this.sling.bodyA.position;
            var ptB= this.pointB;
            push();
           
            stroke(48,22,8);
                strokeWeight(7);
            line(ptA.x,ptA.y,ptB.x,ptB.y);

            pop();
        }
        }
        attach(body){
            this.sling.bodyA= body;
            
        }
        fly() {
        this.sling.bodyA= null;
        }
        }