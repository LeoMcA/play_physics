
var realLength = 100;//cm
var length = 500;//pixels
var scale = 500/100;
var frequency = 10;//Hz
var velocity = 335;//m/s
var lambda =velocity/frequency*100;//cm
var lambdaSc = lambda*1*scale;//;
//var period = 160;//1/lambda;//wavenumber
var side = 200;
var amp = side/4;
var dampingFlag=false;//applies damping to non-harmonics
//var dampingFlag=false;//no damping to non-harmonics
var doubleFlag = true;
//var doubleFlag = false;//true;
var plotPoints = new Array();


var n1 = 500;
var n2 = 4;//1.33 1.5


window.onload= function(){


  document.getElementById("myRange2").value=1*n2;
  document.getElementById("myRange1").value=1*n1;
  changeN1();
  changeN2();
  if(doubleFlag){document.getElementById("double").checked=true;}
  else{document.getElementById("single").checked=true;}
  //alert(""+document.getElementById("myRange1").value+" "+document.getElementById("myRange2").value);
  //document.getElementById("myRange1").value = ""+frequency;

  var canvas = document.getElementById("my_Canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(40, 80, 520, 240);
  ctx.fillStyle = "#000000";
  ctx.fillRect(48, 95, 504, 210);
  ctx.fillRect(510, 95, 20, 210);//volume
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(45, 200, 510, 1);

//length arrow
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    //ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.moveTo(300, 60);//center
    ctx.lineTo(50, 60);//L arrow head
    ctx.lineTo(60,50);//L arrow top
    ctx.lineTo(50, 60);//L arrow head
    ctx.lineTo(60, 70);//L arrow bot
    ctx.lineTo(50, 60);//L arrow head
    ctx.lineTo(550, 60);//R arrow head
    ctx.lineTo(540,50);//R arrow top
    ctx.lineTo(550, 60);//R arrow head
    ctx.lineTo(540, 70);//R arrow bot
    ctx.stroke();
    ctx.closePath();


  //document.getElementById("myRange1").value = ""+frequency;
  //changeN1();
  plotWave();
}

function plotWave(){

  var yValR = 0;//reverse wave

  var canvas = document.getElementById("my_Canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(40, 80, 520, 240);
  ctx.fillStyle = "#005000";
  ctx.fillRect(48, 95, 504, 210);
  ctx.fillStyle = "#000000";
  ctx.fillRect(570, 95, 20, 210);//volume
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(45, 200, 510, 1);
  ctx.fillStyle = "#ffffff";//length text
  ctx.fillRect(265, 30, 150, 22);

  //length arrow
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#000000";
      //ctx.fillStyle = "#FF0000";
      ctx.beginPath();
      ctx.moveTo(300, 60);//center
      ctx.lineTo(50, 60);//L arrow head
      ctx.lineTo(60,50);//L arrow top
      ctx.lineTo(50, 60);//L arrow head
      ctx.lineTo(60, 70);//L arrow bot
      ctx.lineTo(50, 60);//L arrow head
      ctx.lineTo(550, 60);//R arrow head
      ctx.lineTo(540,50);//R arrow top
      ctx.lineTo(550, 60);//R arrow head
      ctx.lineTo(540, 70);//R arrow bot
      ctx.stroke();
      ctx.closePath();
      ctx.fillStyle = "#000000";
      ctx.font = "16px serif";
      var lenTxt = "Length = "+realLength+" cm";
      ctx.fillText(""+lenTxt, 270, 45);
      //ctx.fillText("Length", 270, 45);
      ctx.fillText("Vol", 568, 320);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#00ff00";
  //ctx.fillStyle = "#FF0000";
  ctx.beginPath();
  //ctx.moveTo(50, 200);

//  for(i=0;i<length;i++){
//    var yVal = side/2 * Math.sin(2*Math.PI*i/(length/2));
//    ctx.lineTo(25+i, 50-yVal);
//  }

/*  for(i=0;i<length;i++){
    var yVal1 = side/10 * Math.sin(2*Math.PI*i/(period/2));
    var yVal2 = side/10 * Math.sin(2*Math.PI*(2*length-i)/(period/2));
    var yVal3 = side/10 * Math.sin(2*Math.PI*(2*length+i)/(period/2));
    var yVal4 = side/10 * Math.sin(2*Math.PI*(4*length-i)/(period/2));
    var yVal5 = side/10 * Math.sin(2*Math.PI*(4*length+i)/(period/2));
    var yVal0 = yVal1 - yVal2+yVal3-yVal4+yVal5;
    ctx.lineTo(25+i, 50-yVal0);
  }*/
var yVal = 0;
var diff1 = 0;
var diff2 = 0;
var diffX = 1;
var maximum = 0;
var volume = 0;
var looper = 3;//should be odd number?
//{loop for last value only
    var i2 = length;
    yVal = 0;
  yVal = yVal + amp * Math.cos(2*Math.PI*i2/(lambdaSc));
for(j=2;j<looper;j=j+2){
    amp = amp/2;
    yVal = yVal + amp * Math.cos(2*Math.PI*(j*length-i2)/(lambdaSc));
    amp = amp/2;
    yVal = yVal + amp * Math.cos(2*Math.PI*(j*length+i2)/(lambdaSc));
  }
  diff2=side/2 - Math.abs(yVal);//-1*yVal;//
    amp = side/4;
  //end of last value loop
for(i=0;i<length+1;i++){
    yVal = 0;
  yVal = yVal + amp * Math.cos(2*Math.PI*i/(lambdaSc));
//for(j=2;j<looper;j=j+2){
//    amp = amp/2;
var j=2;
    yVal = yVal + amp * Math.cos(2*Math.PI*(j*length-i)/(lambdaSc));
//    amp = amp/2;
//    yVal = yVal + amp * Math.cos(2*Math.PI*(j*length+i)/(lambdaSc));
//  }
  if(i==0){
  ctx.moveTo(50, 200-yVal);
    diff1=side/2 - Math.abs(yVal);}//diff calculations are to make sure ends of string do not move
  //else if(i==length){diff2=-1*yVal;}
  if(i==length){maximum=Math.abs(yVal);
  //alert(""+maximum);
  }//volume based on last value


  //var yVal0 = yVal+(-diff1*(length-i)+diff2*(i))/length;
  var yVal0 =yVal;
  //if(i==0){
  //ctx.moveTo(50, 200-yVal0);}
  //if(Math.abs(diff1)>Math.abs(diff2)){diffX=Math.abs(diff1)}else{diffX=Math.abs(diff2)}
  if(dampingFlag){
  diffX=Math.floor(diffX+1);//Math.floor(diffX+1);//Math.floor(Math.sqrt(diffX/2)+1);/

  //document.getElementById("dummy4").innerHTML="diffX="+diffX+"<br>lambda="+Math.round(lambda);
  yVal0=yVal0/diffX;
  }
  yValR = yVal0;

  /*  if(i<length/2){
    diffX=diff1;
    //var yVal0 = yVal+diffX/(Math.sqrt(i)+1);
    //var yVal0 = yVal+diffX/(i+1);
    //var yVal0 = yVal+diffX;
    var yVal0 = yVal+(diff1*(length-i)+diff2*(i))/length;
  }
    else{
      diffX=diff2;
      //var yVal0 = yVal+diffX/(Math.sqrt(length-i)+1);
      //var yVal0 = yVal+diffX/(length-i+1);
      //var yVal0 = yVal+diffX;
      var yVal0 = yVal+(diff1*(length-i)+diff2*(i))/length;
    }*/
    amp = side/4;
    //yVal0 = yVal;
    //var yVal0 = yVal;
    plotPoints[i] = -1*yValR;
    ctx.lineTo(50+i, 200-yVal0);
  }

/*  for(i=0;i<25;i++){
    ctx.lineTo(25+i, 50-i);
  }
  for(i=0;i<50;i++){
    ctx.lineTo(50+i, 25+i);
  }
  for(i=0;i<25;i++){
    ctx.lineTo(100+i, 75-i);
  }*/
  ctx.stroke();
  ctx.closePath();

  if(doubleFlag){
  ctx.beginPath();
  //ctx.moveTo(50, 200);

for(i=0;i<length+1;i++){
  var yValR2 = plotPoints[i];
  if(i==0){
  ctx.moveTo(50, 200-yValR2);
    document.getElementById("dummy5").innerHTML=" "+Math.ceil(200-yValR2);}
  ctx.lineTo(50+i, 200-yValR2);
}
ctx.stroke();
ctx.closePath();}
  //ctx.fill();
  volume = Math.pow(maximum*2/side,2)*200;
  //alert(""+maximum);
  var volOffset = -50;
  var redN = Math.round(volume-volOffset);
  if(redN>255){redN=255;}
  var greenN = 255 + volOffset - volume;
  if(greenN<0){greenN=0;}
  else if(greenN>255){greenN=510-greenN;}
  ctx.fillStyle = "#ffff00";
  //ctx.fillStyle = "rgba("+redN+","+greenN+","+" 0,"+" 1)";
  ctx.fillStyle = "rgba("+"255,"+"255,"+" 0,"+" 1)";
  ctx.fillRect(572, 303-volume, 16, volume);//volume
}


function changeN2(){
  //n2 = parseInt(document.getElementById("myRange2").value)/100;//valueAsNumber(slider2.value);
  n2 = parseInt(document.getElementById("myRange2").value)-2;//valueAsNumber(slider2.value);
  var n210 = Math.round(Math.pow(10, n2)*10)/10;
  document.getElementById("dial2").innerHTML="x "+n210;
  n2 = n210;
  findFreq();
  //plotNewMoveQ()
}

  function changeN1(){
    n1= parseInt(document.getElementById("myRange1").value)/100;//valueAsNumber(slider2.value);
      document.getElementById("dial1").innerHTML=""+n1+"";
      findFreq();
    //plotNewMoveQ()
  }

function findFreq(){
frequency = n1*n2;
lambda = velocity/frequency*100;
lambdaSc = lambda*1*scale;
document.getElementById("dummy4").innerHTML="freq ="+Math.round(frequency)+" Hz";
plotWave();

}

function changeLine(n){
  if(n.value=="single"){doubleFlag=false;}
  else{doubleFlag=true;}
  plotWave();
}

function changeLenD(){
  realLength =  realLength - 5;
  if(realLength<5){realLength=200;}
  document.getElementById("dragB").value="length ="+realLength+"cm";
  scale = 500/realLength;
  findFreq();
}

function changeLenU(){
  realLength =  realLength + 5;
  if(realLength>200){realLength=5;}
  document.getElementById("dragB").value="length ="+realLength+"cm";
  scale = 500/realLength;
  findFreq();
}
