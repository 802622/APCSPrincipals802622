class Triangle {
    constructor(x, y, dx, dy, id) {
      this.clr = color(random(255), random(255), random(255));
      this.loc = createVector(x, y);
      this.vel = createVector(dx, dy);
      this.id = id;
      this.acc = createVector(0, .1);
  
      this.run = function () {
        this.checkEdges();
        this.update();
        this.render();
      }
  
      this.checkEdges = function () {
        if (this.loc.x < 0) {
          this.loc.x = 800; //left
        }
        if (this.loc.x > width) { //right
          this.loc.x = 0;
        }
        if (this.loc.y < 0) { //down
          this.loc.y = 800;
        }
        if (this.loc.y > height) { //up
          this.loc.y = 0;
        }
      }
      this.update = function () {
        if (id > -1) {
        var dist2 = this.loc.dist(secondBall.loc);
          var dist = this.loc.dist(mainBall.loc);
          if (dist > 450) {
            this.Force = p5.Vector.sub(mainBall.loc, this.loc);
            this.Force.normalize();
            this.Force.mult(0.8);
            this.vel.add(this.Force);
            this.vel.add(this.acc);
          }
          if (dist < 1) {
            this.Force = p5.Vector.sub(this.loc, mainBall.loc);
            this.Force.normalize();
            this.Force.mult(0.8);
            this.vel.add(this.Force);
            this.vel.add(this.acc);
          }   
        // if (dist2 > 250) {
        //     this.Force = p5.Vector.sub(secondBall.loc, this.loc);
        //     this.Force.normalize();
        //     this.Force.mult(0.8);
        //     this.vel.add(this.Force);
        //     this.vel.add(this.acc);
        //   }
          if (dist2 < 350) {
            this.Force = p5.Vector.sub(this.loc, secondBall.loc);
            this.Force.normalize();
            this.Force.mult(0.8);
            this.vel.add(this.Force);
            this.vel.add(this.acc);
          }
          this.loc.add(this.vel); //add velocity to make gravity
        }
          this.vel.limit(2);
         this.loc.add(this.vel);
      }
      this.render = function () {
          //PushManager()
          //translate(this.loc.x, this.loc.y)
        fill(this.clr);
        if (this.id>-1){
          var a = this.loc.x+10;
          var b = this.loc.y+8;
          var i = this.loc.x+5;
          var j = this.loc.y+10
        triangle(this.loc.x, this.loc.y, a,b,i,j); //render ball, change if you want other shapes
      } else{
    //   fill(this.clr);
      var a = this.loc.x+50;
      var b = this.loc.y+80;
      var i = this.loc.x+150;
      var j = this.loc.y+10;
      triangle(this.loc.x, this.loc.y, a, b,i,j);
    }
    }
  }
  }
  