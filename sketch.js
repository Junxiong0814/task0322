
let x = 1;
let Xtimes = 10;
let Ytimes = 10;
//let mb;
//let mb2;
//let mb3;
let mbarray = [];
function setup() {
   createCanvas(600, 600, WEBGL);//決定使用3D的方式進行渲染
  for(let i = 0; i < Xtimes;i = i+1){
    for(let j = 0; j < Xtimes;j = j+1){
  push();
    noStroke();
    fill(i*40,100,i*10);
   translate(-width/2+i*(width/Xtimes),-height/2+j*(height/Ytimes),10);//移動(x,y,z)
   rotateX(mouseX *1);//繞原點轉動
   rotateY(mouseY * 0.1);//繞原點轉動
   rotateZ(mouseY * 5);
   cylinder(width/50+sin(PI/i)*width/50);//先生成大小不一樣
    console.log('i的值是'+i);
}

function draw() {
   background(200);
   //box(width/5);
  //移動物件for loop
  //for for(let i = 0; i<vaiue;i = i+1)(函式)
  //巢狀結構
  let r = random(255);
  
   
  pop();
    }
  }
  console.log('畫面更新');
  for(let i = 0; i < 5; i+=1){
    mbarray.push(new myBox(50,-height/5+(height/7)*i,0,50));
  }
  
}
function draw(){
  background(mouseX,mouseY,50+5*sin(x));
  mbarray.forEach((v)=>{v.display();})
 
}
class myBox{
  
  constructor(x,y,z, size){
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.mx = 20;
    
  }

  display(){
    push();
    translate(this.x,this.y,this.z);
    if(mouseX-width/2 > this.x-this.size/4 &&
       mouseX-width/2 < this.x+this.size/4 &&
       mouseY-width/2 > this.y-this.size/4 &&
       mouseY-width/2 < this.y+this.size/4
      ){
      rotateX(frameCount*0.1);
      rotateY(frameCount*0.1);
      rotateZ(50*sin(x));
      this.mx = this.mx+1;
    }
    
    
    cylinder(mouseX*0.2*sin(x),mouseY*0.2*sin(x));

    
    
    
    pop();
    this.move();
   
  }
  move(){
    if(this.x >  width/2){this.mx = -10*sin(x);}
    if(this.x < -width/2){this.mx = 10*sin(x);}
    this.x = this.x + this.mx;
    if(this.y >  width/2){this.mx = -10*sin(x);}
    if(this.y < -width/2){this.mx = 10*sin(x);}
    this.y = this.y + this.mx;
    
  }
  
  
  }
