
var canvW=770;//840+50  770;//720+50
var multiplier = (canvW-50)/24;
var canvH=420;//330+60
var driverT=1;//seconds
var deltaTime=100;//millisec
var time = 0;
var timeMax = 20;//seconds
var objMassA= 100;
var objMassAx = 1;//mass multiplier --> x
var objMassB= 10;
var objMassBx = 1;
var objMassAxU = 1;//unit multiplier
var objMassBxU = 1;
var objVelA = 0;
var objVelB = 0;
var objVelAstart = 0;
var objVelBstart = 0;
var objVelAx = 1;
var objVelBx = 1;
var objVelAxU = 1;
var objVelBxU = 1;
var velAA = new Array();
var velBA = new Array();
var posAA = new Array();
var posBA = new Array();
var velScale = 1;
var objRadA = 10*Math.pow(objMassA, 0.2);
var objRadB = 10;//10*Math.pow(objMassB, 0.2);
var objRadaA = objRadA;
var objRadaB = objRadB;
var objRadaAold = objRadA;
var objRadaBold = objRadB;
var objRadbA = objRadA;
var objRadbB = objRadB;
var objPosA = canvW/2;
var objPosB = canvW/2;
var endPos = (objPosA+objPosB)/2;
var centreA = objPosA;
var centreB = objPosB;
var startForce = 20;
var springForce = startForce;
var startEnergy = 1e1;
var springX = -2*startEnergy/springForce;
var springK = -2*startEnergy/(Math.pow(springX, 2));
var objDispA = 0;
var objDispB = 0;
var objBumpA = 0;//the squash applied to each ball
var objBumpB = 0;
var bumpScale = 1;
var forceA = new Array();
var velAMaxMinA = new Array();
var objAccA = 0;
var objAccB = 0;
var oldForce = startForce;
var oldAccA = 0;
var oldAccB = 0;
var oldVelA = 0;
var oldVelB = 0;
var oldDispA = 0;
var oldDispB = 0;
var firstGoFlag = true;
var collisionFlag = true;
var makeChangesFlag=true;
var afterCollFlag = false;
var oneMoreFlag = false;
var flagAonB = true;
var collTime = 0;
var springMax = 0;
var forceMax = 0;
var forceTot = 0;
var forceAve = 0;
var forceTime = 0;
var velAMax = -10000000;
var velAMin = 10000000;
var impulse = 0;
var springT0 = 0;
var springT1 = 0;
var springT2 = 1e6;
var turn = 0;
var springTr0 = 0;
var springTr1 = 0;
var springTr2 = 1e6;
var elasticity = 1;
var percComp = 0;//percComp^2 + elasticity^2 = 1;
var compNow = 2;
var decompressFlag=false;
var forceUnits = "N";
var timeUnits = "ms";
var impulseUnits = "Ns";
var massUnits = "kg";
var speedUnits = "m/s";
var massUnitsA = "kg";
var speedUnitsA = "m/s";
var massUnitsB = "kg";
var speedUnitsB = "m/s";
var mvUnits = "Ns";
var keUnits = "J";
var muA = 0;
var muB = 0;
var muT = 0;
var mvA = 0;
var mvB = 0;
var mvT = 0;
var keA1 = 0;
var keA2 = 0;
var keT1 = 0;
var keB1 = 0;
var keB2 = 0;
var keT2 = 0;
var arrowSc = 4;
var arrLenA = 0;
var arrLenB = 0;
var arrAsign = 1;
var arrBsign = -1;

var driverAmp = 50;//pixels
var driverDisp = 0;
var myTimer1;
var maxL = canvW/2;
var maxR = canvH/2;
var maxA = 0;
//var objForce = 0;
//var springK = 1;
//var objDisp = 0;
var driverDisp = 0;
var drIntensity = 0.5;
var objAcc = 0;
var objMass= 10;
var objVel = 5;
var moveData = "";
var objDispMax = 1000000;
var dampPerc = 0.04;
var goFlag = false;
//var objScale = 0.2;
var edge = 30;
var xmin = 25;
var xmax = canvW-xmin;
var ymin = 30;
var ymax = canvH-ymin/2;
var midValX = (xmin+xmax)/2;
var midValY = (ymin+ymax)/2;
var Qx = 0;
var Qy = 0;
var Qarray = new Array();
var noOfQ = -1;
var QxA = new Array();
var QyA = new Array();
var QcolA = new Array();
var newQflag = false;//adding new charge to display
var oldQflag = false;//trying to move an old charge
var oldQchosen = -1;
var moveMirror = true;//false;//true;
var moveF = true;
var moveRay = false;
var arrXA = new Array();//hold x pos of arrow centre
var arrYA = new Array();
var noOfArr = 0;
var arrFXA = new Array();//hold x comp of force at arrow position
var arrFYA = new Array();
var arrAngle = new Array();//hold angle of arrow
var arrLength = 10;//half length of arrow
var arrNewLength = new Array();
var mirrorLX = 25;
var mirrorLY = canvH-100;
var mirrorRX = canvW-25;
var mirrorRY = canvH-100;
var mirrorMX = canvW/2;//canvH-30 + 30 /2
var mirrorMY = canvH-120;
var mirrorTX = mirrorLX+25;//position of mirror Text
var mirrorTY = mirrorLY+25;
var touchRadius = 20;
var touchFlag = "no";
var minX = 25;
var minY = 30;
var maxX = canvW-25;
var maxY = canvH-30;
var changeX = false;//moving mirror along top or bottom if TRUE
var mirrorAngle = 0;
var mirrorDX = canvW-60;
var mirrorDY = 0;
var mirrorGrad = 0;
var mirrorC = mirrorLY;
var rayLX = 140;
var rayLY = minY;
var rayRX = 140;
var rayRY = canvH-120;
var rayMX = 140;//canvH-30 + 30 /2
var rayMY = minY;
var rayLX2 = 140;
var rayLY2 = minY;
var rayRX2 = 140;
var rayRY2 = canvH-120;
var rayMX2 = 140;//canvH-30 + 30 /2
var rayMY2 = minY;
var rayTX = rayLX+25;//position of mirror Text
var rayTY = rayLY+25;
var touchRadiusRay = 20;
var touchFlagRay = "no";
var changeXRay = false;//moving mirror along top or bottom if TRUE
var rayAngle = Math.PI;
var rayDX = 0;
var rayDY = 0;
var rayGrad = 0;
var rayC = 0;
var normLX = 0;
var normLY = 0;
var normRX = 0;
var normRY = 0;
var normMX = 0;//
var normMY = 0;
var normTX = normLX+25;//position of N Text
var normTY = normLY+25;
var touchRadiusNorm = 20;
var touchFlagNorm = "no";
var changeXNorm = false;//moving mirror along top or bottom if TRUE
var normAngle = Math.PI;
var normDX = 0;
var normDY = 0;
var normGrad = 0;
var normC = 0;
var normL = 50;//half-length of normal;
var reflLX = 0;
var reflLY = 0;
var reflRX = 0;
var reflRY = 0;
var reflMX = 0;//
var reflMY2 = 0;
var reflLX2 = 0;
var reflLY2 = 0;
var reflRX2 = 0;
var reflRY2 = 0;
var reflMX2 = 0;//
var reflMY2 = 0;
var reflLXI = 0;
var reflLYI = 0;
var reflRXI = 0;
var reflRYI = 0;
var reflTX = reflLX+25;//position of mirror Text
var reflTY = reflLY+25;
var touchRadiusRefl = 20;
var touchFlagRefl = "no";
var changeXRefl = false;//moving mirror along top or bottom if TRUE
var reflAngle = Math.PI;
var reflAngle2 = Math.PI;
var reflDX = 0;
var reflDY = 0;
var reflGrad = 0;
var reflC = 0;
var reflL = canvW;//max length of reflected ray;
var meetAngle = 0;
var incAngle = 0;
var reflAngle = 0;
var refrAngle = 0;
var angle2 = new Array();
var angle3 = new Array();
var sin2 = new Array();
var sin3 = new Array();
var cos2 = new Array();
var cos3 = new Array();
var headL = 10;//length of arrow heads
var textFlag = true;
var bigD = Math.abs(rayRY-rayLY);
var actualD = 0;
var littleD = Math.abs(rayRX-maxX);
var projX =0;
var projY = 0;
var projAng = 0;
var timeNow = 12;
var dateNow = 150;
var latNow = 52;
var sunHigh = canvH/2;
var sunHigh2 = canvH/2;
var effectivelatitude = 52;
var sunPosition = 23.4;
var ns_flip = false;
var dateYear = 2023;
var leapYear = false;
var yearDown = 1;//1- can change both ways 2-won't go down again unless go past middle 3 - won't go up again
var yearUp = 1;

window.onload = function(){
    var events = new Events("myCanvas");
    var canvas = events.getCanvas();
    var context = events.getContext();
    var isMouseDown = false;
    var canvasImg = getCanvasImg(canvas);
    var points = [];
    //etElementById(myCanvas).width=canvW;
    //getElementById(myCanvas).height=canvH;
    //findVector();

    var dummyE1 = Math.pow(elasticity,2);
    var dummyE2 = 1-dummyE1;
    percComp = Math.pow(dummyE2, 0.5);
    //alert(""+percComp);

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width = canvW;
    ctx.canvas.height = canvH;
    // blue rectangle
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.lineWidth = "1";
    ctx.fillStyle = "blue";
    ctx.fillRect(xmin, ymin, maxX-25, ymax-70);
    ctx.fill();
    // box rectangle
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.lineWidth = "1";
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.rect(25, 30, canvW-50, canvH-60);
    ctx.stroke();
    // Green rectangle
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.lineWidth = "1";
    ctx.fillStyle = "green";
    ctx.fillRect(mirrorLX-6, mirrorLY, maxX-25+12, 70);
    ctx.fill();
    ctx.fillStyle = "black";

          ctx.lineWidth = "1";


                    ctx.lineWidth = "1";
                    //top ridge
                    ctx.moveTo(midValX, minY);
                    ctx.lineTo(midValX, minY-12);
                    for(e=midValX; e<xmax+1;e=e+5){
                    ctx.moveTo(e, minY);
                    ctx.lineTo(e, minY-5);
                    ctx.stroke();}
                    for(e=midValX; e>xmin-1;e=e-5){
                    ctx.moveTo(e, minY);
                    ctx.lineTo(e, minY-5);
                    ctx.stroke();}
                    for(e=midValX; e<xmax+8;e=e+15){
                    ctx.moveTo(e, minY);
                    ctx.lineTo(e, minY-8);
                    ctx.stroke();}
                    for(e=midValX; e>xmin-8;e=e-15){
                    ctx.moveTo(e, minY);
                    ctx.lineTo(e, minY-8);
                    ctx.stroke();}
                    for(e=midValX; e<xmax+16;e=e+multiplier){
                    ctx.moveTo(e, minY);
                    ctx.lineTo(e, minY-12);
                    ctx.stroke();}
                    for(e=midValX; e>xmin-16;e=e-multiplier){
                    ctx.moveTo(e, minY);
                    ctx.lineTo(e, minY-12);
                    ctx.stroke();}
                    //bottom ridge
                    ctx.moveTo(midValX, maxY);
                    ctx.lineTo(midValX, maxY+14);
                    for(e=midValX; e<xmax+1;e=e+5){
                    ctx.moveTo(e, maxY);
                    ctx.lineTo(e, maxY+5);
                    ctx.stroke();}
                    for(e=midValX; e>xmin-1;e=e-5){
                    ctx.moveTo(e, maxY);
                    ctx.lineTo(e, maxY+5);
                    ctx.stroke();}
                    for(e=midValX; e<xmax+1;e=e+15){
                    ctx.moveTo(e, maxY);
                    ctx.lineTo(e, maxY+8);
                    ctx.stroke();}
                    for(e=midValX; e>xmin-1;e=e-15){
                    ctx.moveTo(e, maxY);
                    ctx.lineTo(e, maxY+8);
                    ctx.stroke();}
                    for(e=midValX; e<xmax+1;e=e+multiplier){
                    ctx.moveTo(e, maxY);
                    ctx.lineTo(e, maxY+12);
                    ctx.stroke();}
                    for(e=midValX; e>xmin-1;e=e-multiplier){
                    ctx.moveTo(e, maxY);
                    ctx.lineTo(e, maxY+12);
                    ctx.stroke();}
                    //left ridge
                    //ctx.moveTo(minX, midValY);
                    //ctx.lineTo(minX-14, midValY);
                    for(e=minY+20; e<ymax-60;e=e+30){
                    ctx.moveTo(minX, e);
                    ctx.lineTo(minX-6, e);
                    ctx.stroke();}
                    //right ridge
                    for(e=minY+20; e<ymax-60;e=e+30){
                    ctx.moveTo(maxX, e);
                    ctx.lineTo(maxX+6, e);
                    ctx.stroke();}

                    //add numbers to edges
                    ctx.font = "10px Arial";
                    ctx.fillText("12",midValX-6, minY-18);
                    ctx.fillText("12",midValX-3, maxY+25);
                    //ctx.fillText("0",minX-22, midValY+4);
                    //ctx.fillText("0",maxX+18, midValY+4);
                    var ridgeCount = 13;
                    for(e=midValX+multiplier; e<xmax+31;e=e+multiplier){
                    ctx.fillText(""+ridgeCount,e-6, minY-18);
                    ridgeCount++;}
                    ridgeCount = 11;
                    for(e=midValX-multiplier; e>xmin-31;e=e-multiplier){
                    ctx.fillText(""+ridgeCount,e-4, minY-18);
                    ridgeCount--;}
                    //bottom ridge
                    ridgeCount = 13;
                    for(e=midValX+multiplier; e<xmax+31;e=e+multiplier){
                    ctx.fillText(""+ridgeCount,e-3, maxY+25);
                    ridgeCount++;}
                    ridgeCount = 11;
                    for(e=midValX-multiplier; e>xmin-31;e=e-multiplier){
                    ctx.fillText(""+ridgeCount,e-3, maxY+25);
                    ridgeCount--;}
                    //left ridge
                    ridgeCount = 90;
                    for(e=minY+20; e<ymax-60;e=e+30){
                    ctx.fillText(""+ridgeCount,minX-22, e+4);
                    ridgeCount=ridgeCount-10;}
                    //right ridge
                    ridgeCount = 90;
                    for(e=minY+20; e<ymax-60;e=e+30){
                    ctx.fillText(""+ridgeCount,maxX+9, e+4);
                    ridgeCount=ridgeCount-10;}

                    //markings on mirror line
                    ctx.moveTo((mirrorLX+mirrorRX)/2, (mirrorLY+mirrorRY)/2);
                    ctx.lineTo((mirrorLX+mirrorRX)/2, (mirrorLY+mirrorRY)/2+14);
                    /*for(e=mirrorLX; e<mirrorRX+1;e=e+10){
                    ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                    ctx.lineTo(e, (mirrorLY+mirrorRY)/2+6);
                    ctx.stroke();}*/
                    for(e=(mirrorLX+mirrorRX)/2; e<mirrorRX+1;e=e+90){
                    ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                    ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
                    ctx.stroke();}
                    for(e=(mirrorLX+mirrorRX)/2; e>mirrorLX-1;e=e-90){
                    ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                    ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
                    ctx.stroke();}
                    ctx.fillText("SW",(mirrorLX+mirrorRX)/2-90-6, (mirrorLY+mirrorRY)/2+25);
                    ctx.fillText("SE",(mirrorLX+mirrorRX)/2+90-6, (mirrorLY+mirrorRY)/2+25);
                    ctx.fillText("NW",(mirrorLX+mirrorRX)/2-270-6, (mirrorLY+mirrorRY)/2+25);
                    ctx.fillText("NE",(mirrorLX+mirrorRX)/2+270-6, (mirrorLY+mirrorRY)/2+25);
                    ctx.font = "20px Arial";
                    ctx.fillText("S",(mirrorLX+mirrorRX)/2-6, (mirrorLY+mirrorRY)/2+30);
                    ctx.fillText("W",(mirrorLX+mirrorRX)/2-180-6, (mirrorLY+mirrorRY)/2+30);
                    ctx.fillText("E",(mirrorLX+mirrorRX)/2+180-6, (mirrorLY+mirrorRY)/2+30);
                    ctx.fillText("N",(mirrorLX)-6, (mirrorLY+mirrorRY)/2+30);
                    ctx.fillText("N",(mirrorRX)-6, (mirrorLY+mirrorRY)/2+30);
                    //for(f=1;f<6;f++){
                    //ctx.fillText(""+f,((mirrorLX+mirrorRX)/2-3)-(f*50), ((mirrorLY+mirrorRY)/2+25));
                    //ctx.fillText(""+f,((mirrorLX+mirrorRX)/2-3)+(f*50), ((mirrorLY+mirrorRY)/2+25));
                    //}


          //ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
              ctx.beginPath();
              ctx.lineWidth = "1";
              ctx.strokeStyle = "black";
              ctx.moveTo(mirrorLX, mirrorLY);
              ctx.lineTo(mirrorRX, mirrorRY);
              //ctx.moveTo(30, canvH-120);
              //ctx.lineTo(canvW-60, canvH-120);
              ctx.stroke();
              //ctx.setLineDash([]);/*stop dashes*/

          //ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
              ctx.beginPath();
              ctx.lineWidth = "1";
              ctx.strokeStyle = "black";
              ctx.moveTo(mirrorLX, mirrorLY);
              ctx.lineTo(mirrorRX, mirrorRY);
              //ctx.moveTo(30, canvH-120);
              //ctx.lineTo(canvW-60, canvH-120);
              ctx.stroke();

                  //SUN
                  ctx.beginPath();
                      ctx.lineWidth = "4";
                      ctx.fillStyle = "yellow";
                      ctx.ellipse(objPosB, canvH/2, objRadaB-2, objRadbB-2, 0, 0, 2 * Math.PI);                      //ctx.arc(objPosB, canvH/2, objRadB, 0, 2 * Math.PI);
                      ctx.fill();
            plotNewFrame();

    document.getElementById("myRangeT").value=144;
    document.getElementById("myRangeD").value=172;
    document.getElementById("myRangeL").value=52;

    document.getElementById("saveButton").addEventListener("click", function(evt){
        // open new window with saved image so user
        // can right click and save to their computer
        window.open(canvas.toDataURL());
    }, false);

    canvas.addEventListener("mousedown", function(){
        var drawingPos = events.getMousePos();
        //newQflag = false;

        isMouseDown = true;
    }, false);

   canvas.addEventListener("mouseup", function(){
        var drawingPos = events.getMousePos();
        isMouseDown = false;
        touchFlag = "no";

       if (drawingPos !== null) {
              //points.push(drawingPos);
              Qx = drawingPos.x;
              Qy = drawingPos.y;
            }

        moveF=true;
        canvasImg = getCanvasImg(this);
    }, false);

    canvas.addEventListener("mouseout", function(){
        if (document.createEvent) {
            var evt = document.createEvent('MouseEvents');
            evt.initEvent("mouseup", true, false);
            this.dispatchEvent(evt);
        }
        else {
            this.fireEvent("onmouseup");
        }
    }, false);

    events.setStage(function(){
        if (isMouseDown) {
        }
    });
    //shakeDriver();
};

function plotNewFrame(){
    //dateNow = 150;
    //latNow = 52;
    sunPosition = sunPos(dateNow);
    effectivelatitude = effectLat(latNow,timeNow, sunPosition);
    sunHigh = sunHeight(effectivelatitude, sunPosition);
    if(latNow<sunPosition){ns_flip=true;}
    else{ns_flip=false;}
    //alert("effectivelatitude="+effectivelatitude+"; sunPosition="+sunPosition+"; sunHigh="+sunHigh);
    //document.getElementById("text").innerHTML="height = "+printNumber2(sunHigh)+printNumber2(timeNow)+"";
    var sunHighMod = sunHigh;
    var timeNowMod = timeNow;
    /*if(sunHigh>90){
      sunHighMod=90-(sunHigh-90);
      timeNowMod=timeNow;
      //timeNowMod=12-timeNow;
      //if(timeNowMod<0){timeNowMod=timeNowMod+24;}
    }
    else{
      sunHighMod=sunHigh;
      timeNowMod=timeNow;
    }*/
    sunHigh2 = minY+290-sunHighMod*3;
    sunWE = minX+multiplier*timeNowMod;

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width = canvW;
    ctx.canvas.height = canvH;
    // blue rectangle
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.lineWidth = "1";
    var whatSky = skyColor(sunHigh);
    var sunCol = sunColor2(sunHigh);
    // Create gradient
          var grd = ctx.createLinearGradient(canvW/2, ymin, canvW/2, ymax-70);//2*canvW
          var highlightPos = (sunHigh2-20)/(minY+290);//0.5
          if(highlightPos<0){highlightPos=0;}
          else if(highlightPos>1){highlightPos=1;}
          if(sunHigh>1){
          grd.addColorStop(0, "#0000FF");}//"rgb("+valR2+","+valG2+","+valB2+")");//"cyan"
          else{
          grd.addColorStop(0, whatSky);}
          grd.addColorStop(highlightPos, sunCol);
          if(sunHigh>1){
          grd.addColorStop(1, whatSky);}//"rgb("+valR2+","+valG2+","+valB2+")");//"cyan"
          else{
          grd.addColorStop(1, "#0000FF");}
          // Fill with gradient
          ctx.fillStyle = grd;
    //ctx.fillStyle = whatSky;//"blue";
    ctx.fillRect(xmin, ymin, maxX-25, ymax-70);
    ctx.fill();
    // box rectangle
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.lineWidth = "1";
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.rect(25, 30, canvW-50, canvH-60);
    ctx.stroke();
    //SUN
    if(sunHigh>-16){
    ctx.beginPath();
    ctx.lineWidth = "4";
    var whatCol = sunColor(sunHigh);
    ctx.fillStyle = whatCol;//"yellow";"#FF0000";//
    ctx.ellipse(sunWE, sunHigh2, objRadaB-2, objRadbB-2, 0, 0, 2 * Math.PI);                      //ctx.arc(objPosB, canvH/2, objRadB, 0, 2 * Math.PI);
    ctx.fill();}
    // Green rectangle
    var whatLand = landColor(sunHigh);
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.lineWidth = "1";
    ctx.fillStyle = whatLand;
    ctx.fillRect(mirrorLX-6, mirrorLY, maxX-25+12, 70);
    ctx.fill();
    ctx.fillStyle = "black";

          ctx.lineWidth = "1";


                    ctx.lineWidth = "1";
                    //top ridge
                    ctx.moveTo(midValX, minY);
                    ctx.lineTo(midValX, minY-12);
                    for(e=midValX; e<xmax+1;e=e+5){
                    ctx.moveTo(e, minY);
                    ctx.lineTo(e, minY-5);
                    ctx.stroke();}
                    for(e=midValX; e>xmin-1;e=e-5){
                    ctx.moveTo(e, minY);
                    ctx.lineTo(e, minY-5);
                    ctx.stroke();}
                    for(e=midValX; e<xmax+8;e=e+15){
                    ctx.moveTo(e, minY);
                    ctx.lineTo(e, minY-8);
                    ctx.stroke();}
                    for(e=midValX; e>xmin-8;e=e-15){
                    ctx.moveTo(e, minY);
                    ctx.lineTo(e, minY-8);
                    ctx.stroke();}
                    for(e=midValX; e<xmax+16;e=e+multiplier){
                    ctx.moveTo(e, minY);
                    ctx.lineTo(e, minY-12);
                    ctx.stroke();}
                    for(e=midValX; e>xmin-16;e=e-multiplier){
                    ctx.moveTo(e, minY);
                    ctx.lineTo(e, minY-12);
                    ctx.stroke();}
                    //bottom ridge
                    ctx.moveTo(midValX, maxY);
                    ctx.lineTo(midValX, maxY+14);
                    for(e=midValX; e<xmax+1;e=e+5){
                    ctx.moveTo(e, maxY);
                    ctx.lineTo(e, maxY+5);
                    ctx.stroke();}
                    for(e=midValX; e>xmin-1;e=e-5){
                    ctx.moveTo(e, maxY);
                    ctx.lineTo(e, maxY+5);
                    ctx.stroke();}
                    for(e=midValX; e<xmax+1;e=e+15){
                    ctx.moveTo(e, maxY);
                    ctx.lineTo(e, maxY+8);
                    ctx.stroke();}
                    for(e=midValX; e>xmin-1;e=e-15){
                    ctx.moveTo(e, maxY);
                    ctx.lineTo(e, maxY+8);
                    ctx.stroke();}
                    for(e=midValX; e<xmax+1;e=e+multiplier){
                    ctx.moveTo(e, maxY);
                    ctx.lineTo(e, maxY+12);
                    ctx.stroke();}
                    for(e=midValX; e>xmin-1;e=e-multiplier){
                    ctx.moveTo(e, maxY);
                    ctx.lineTo(e, maxY+12);
                    ctx.stroke();}
                    //left ridge
                    //ctx.moveTo(minX, midValY);
                    //ctx.lineTo(minX-14, midValY);
                    for(e=minY+20; e<ymax-60;e=e+30){
                    ctx.moveTo(minX, e);
                    ctx.lineTo(minX-6, e);
                    ctx.stroke();}
                    //right ridge
                    for(e=minY+20; e<ymax-60;e=e+30){
                    ctx.moveTo(maxX, e);
                    ctx.lineTo(maxX+6, e);
                    ctx.stroke();}
                    //sun position
                    ctx.beginPath();
                    ctx.fillStyle="red";
                    ctx.strokeStyle="red";
                    ctx.moveTo(minX, sunHigh2);
                    ctx.lineTo(minX-12, sunHigh2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(maxX, sunHigh2);
                    ctx.lineTo(maxX+12, sunHigh2);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.fillStyle="black";
                    ctx.strokeStyle="black";

                    //add numbers to edges
                    ctx.font = "10px Arial";
                    ctx.fillText("12",midValX-6, minY-18);
                    ctx.fillText("12",midValX-3, maxY+25);
                    //ctx.fillText("0",minX-22, midValY+4);
                    //ctx.fillText("0",maxX+18, midValY+4);
                    var ridgeCount = 13;
                    for(e=midValX+multiplier; e<xmax+31;e=e+multiplier){
                    ctx.fillText(""+ridgeCount,e-6, minY-18);
                    ridgeCount++;}
                    ridgeCount = 11;
                    for(e=midValX-multiplier; e>xmin-31;e=e-multiplier){
                    ctx.fillText(""+ridgeCount,e-4, minY-18);
                    ridgeCount--;}
                    //bottom ridge
                    ridgeCount = 13;
                    for(e=midValX+multiplier; e<xmax+31;e=e+multiplier){
                    ctx.fillText(""+ridgeCount,e-3, maxY+25);
                    ridgeCount++;}
                    ridgeCount = 11;
                    for(e=midValX-multiplier; e>xmin-31;e=e-multiplier){
                    ctx.fillText(""+ridgeCount,e-3, maxY+25);
                    ridgeCount--;}
                    //left ridge
                    ridgeCount = 90;
                    for(e=minY+20; e<ymax-60;e=e+30){
                    ctx.fillText(""+ridgeCount,minX-22, e+4);
                    ridgeCount=ridgeCount-10;}
                    //right ridge
                    ridgeCount = 90;
                    for(e=minY+20; e<ymax-60;e=e+30){
                    ctx.fillText(""+ridgeCount,maxX+9, e+4);
                    ridgeCount=ridgeCount-10;}

                    //markings on mirror line
                    if(sunHigh<4&&sunHigh>-18){
                    ctx.fillStyle = "yellow";
                    ctx.strokeStyle = "yellow";}
                    else if(sunHigh>=4){
                    ctx.fillStyle = "black";
                    ctx.strokeStyle = "black";
                    }
                    else{
                    ctx.fillStyle = "silver";
                    ctx.strokeStyle = "silver";}
                    ctx.moveTo((mirrorLX+mirrorRX)/2, (mirrorLY+mirrorRY)/2);
                    ctx.lineTo((mirrorLX+mirrorRX)/2, (mirrorLY+mirrorRY)/2+14);
                    /*for(e=mirrorLX; e<mirrorRX+1;e=e+10){
                    ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                    ctx.lineTo(e, (mirrorLY+mirrorRY)/2+6);
                    ctx.stroke();}*/
                    for(e=(mirrorLX+mirrorRX)/2; e<mirrorRX+1;e=e+90){
                    ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                    ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
                    ctx.stroke();}
                    for(e=(mirrorLX+mirrorRX)/2; e>mirrorLX-1;e=e-90){
                    ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                    ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
                    ctx.stroke();}
                    if(!ns_flip){
                    ctx.fillText("SE",(mirrorLX+mirrorRX)/2-90-6, (mirrorLY+mirrorRY)/2+25);
                    ctx.fillText("SW",(mirrorLX+mirrorRX)/2+90-6, (mirrorLY+mirrorRY)/2+25);
                    ctx.fillText("NE",(mirrorLX+mirrorRX)/2-270-6, (mirrorLY+mirrorRY)/2+25);
                    ctx.fillText("NW",(mirrorLX+mirrorRX)/2+270-6, (mirrorLY+mirrorRY)/2+25);
                    ctx.font = "20px Arial";
                    ctx.fillText("S",(mirrorLX+mirrorRX)/2-6, (mirrorLY+mirrorRY)/2+30);
                    ctx.fillText("E",(mirrorLX+mirrorRX)/2-180-6, (mirrorLY+mirrorRY)/2+30);
                    ctx.fillText("W",(mirrorLX+mirrorRX)/2+180-6, (mirrorLY+mirrorRY)/2+30);
                    ctx.fillText("N",(mirrorLX)-6, (mirrorLY+mirrorRY)/2+30);
                    ctx.fillText("N",(mirrorRX)-6, (mirrorLY+mirrorRY)/2+30);}
                    else{
                    ctx.fillText("NE",(mirrorLX+mirrorRX)/2-90-6, (mirrorLY+mirrorRY)/2+25);
                    ctx.fillText("NW",(mirrorLX+mirrorRX)/2+90-6, (mirrorLY+mirrorRY)/2+25);
                    ctx.fillText("SE",(mirrorLX+mirrorRX)/2-270-6, (mirrorLY+mirrorRY)/2+25);
                    ctx.fillText("SW",(mirrorLX+mirrorRX)/2+270-6, (mirrorLY+mirrorRY)/2+25);
                    ctx.font = "20px Arial";
                    ctx.fillText("N",(mirrorLX+mirrorRX)/2-6, (mirrorLY+mirrorRY)/2+30);
                    ctx.fillText("E",(mirrorLX+mirrorRX)/2-180-6, (mirrorLY+mirrorRY)/2+30);
                    ctx.fillText("W",(mirrorLX+mirrorRX)/2+180-6, (mirrorLY+mirrorRY)/2+30);
                    ctx.fillText("S",(mirrorLX)-6, (mirrorLY+mirrorRY)/2+30);
                    ctx.fillText("S",(mirrorRX)-6, (mirrorLY+mirrorRY)/2+30);}

                    //for(f=1;f<6;f++){
                    //ctx.fillText(""+f,((mirrorLX+mirrorRX)/2-3)-(f*50), ((mirrorLY+mirrorRY)/2+25));
                    //ctx.fillText(""+f,((mirrorLX+mirrorRX)/2-3)+(f*50), ((mirrorLY+mirrorRY)/2+25));
                    //}


          //ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
              ctx.beginPath();
              ctx.lineWidth = "1";
              //ctx.strokeStyle = "black";
              ctx.moveTo(mirrorLX, mirrorLY);
              ctx.lineTo(mirrorRX, mirrorRY);
              //ctx.moveTo(30, canvH-120);
              //ctx.lineTo(canvW-60, canvH-120);
              ctx.stroke();
              //ctx.setLineDash([]);/*stop dashes*/

          //ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
              ctx.beginPath();
              ctx.lineWidth = "1";
              ctx.strokeStyle = "black";
              ctx.moveTo(mirrorLX, mirrorLY);
              ctx.lineTo(mirrorRX, mirrorRY);
              //ctx.moveTo(30, canvH-120);
              //ctx.lineTo(canvW-60, canvH-120);
              ctx.stroke();

        //sun plot moved from here
}

function sunColor(h){//h=sun sunHeight
  var yelNum = h;
  var yelNum = Math.floor(yelNum);
  if(h<31){
    //h=h/2;
  yelNum = h;
  yelNum = Math.floor(yelNum);
  if(yelNum<0){yelNum=0}
  if(yelNum>15){yelNum=15}
  var yelText = yelNum.toString(16);
  //alert(""+yelText);
  var sunCol = "#FF"+yelText+yelText+"00";}
  else if(h>39){
    h=(h-40);///2;
  yelNum = h;
  yelNum = Math.floor(yelNum);
  if(yelNum<0){yelNum=0}
  if(yelNum>15){yelNum=15}
  var yelText = yelNum.toString(16);
  //alert(""+yelText);
  var sunCol = "#FFFF"+yelText+yelText;}
  else{
  var sunCol = "#FFFF00";
  }
  //document.getElementById("text").innerHTML="sun = "+sunCol+"<br>"+yelNum+"<br>"+h;
  return sunCol;
}

function sunColor2(h){//h=sun sunHeight
  var yelNum = h;
  var yelNum = Math.floor(yelNum);
  if(h<-12){
  var sunCol = "#000044";}
  else if(h<-6){
  var sunCol = "#0000aa";}
  else if(h<-3){
  var sunCol = "#aaaaFF";}
  else if(h<36){
    h=h/2;
  yelNum = h;
  yelNum = Math.floor(yelNum);
  if(yelNum<0){yelNum=0}
  if(yelNum>10){yelNum=10}
  var yelText = yelNum.toString(16);
  //alert(""+yelText);
  var sunCol = "#aa"+yelText+yelText+"55";}
  else{//else if(h>39){
    h=(h-40)/2;///2;
  yelNum = h;
  yelNum = Math.floor(yelNum);
  if(yelNum<5){yelNum=5}
  if(yelNum>15){yelNum=15}
  var yelText = yelNum.toString(16);
  //alert(""+yelText);
  var sunCol = "#aaaa"+yelText+yelText;}
  //else{  var sunCol = "#aaaa00";  }
  //document.getElementById("text").innerHTML="sun = "+sunCol+"<br>"+yelNum+"<br>"+h;
  return sunCol;
}

function skyColor(h){//h=sun sunHeight
  var yelNum = h;
  var yelNum = Math.floor(yelNum);
  if(h>73){
  yelNum = (h-74)/2;
  yelNum = Math.floor(yelNum);
  if(yelNum<0){yelNum=0}
  if(yelNum>8){yelNum=8}
  var yelText = yelNum.toString(16);
  var skyCol = "#"+yelText+yelText+"FFFF";}
  else if(h>43){
  yelNum = (h-44)/2;
  yelNum = Math.floor(yelNum);
  if(yelNum<0){yelNum=0}
  if(yelNum>15){yelNum=15}
  var yelText = yelNum.toString(16);
  var skyCol = "#00"+yelText+yelText+"FF";}
  else if(h>4){
  yelNum = (h-4);
  var yelNum2 = yelNum/2;
  yelNum = Math.floor(yelNum);
  yelNum2 = Math.floor(yelNum2);
  if(yelNum<0){yelNum=0}
  if(yelNum>15){yelNum=15}
  if(yelNum2<8){yelNum2=8}
  if(yelNum2>15){yelNum2=15}
  var yelNumX = 15-yelNum;
  var yelNumX2 = 15-yelNum2;
  var yelText = yelNum.toString(16);
  var yelText2 = yelNum2.toString(16);
  var yelTextX = yelNumX.toString(16);
  var yelTextX2 = yelNumX2.toString(16);
  var skyCol = "#"+yelTextX+yelTextX+yelTextX2+yelTextX2+yelText2+yelText2;}
  else if(h>-6){
  yelNum = (h+6);
  var yelNum2 = 2*yelNum;
  yelNum = Math.floor(yelNum);
  yelNum2 = Math.floor(yelNum2);
  if(yelNum<0){yelNum=0}
  if(yelNum>15){yelNum=15}
  var yelText = yelNum.toString(16);
  if(yelNum2<0){yelNum2=0}
  if(yelNum2>15){yelNum2=15}
  var yelText2 = yelNum2.toString(16);
  var skyCol = "#"+yelText2+yelText2+yelText+yelText+"88";}
  else if(h>-12){
  yelNum = (h+12);
  yelNum = Math.floor(yelNum);
  if(yelNum<0){yelNum=0}
  if(yelNum>15){yelNum=15}
  var yelText = yelNum.toString(16);
  var skyCol = "#0000"+yelText+yelText;}
  else{
  var skyCol = "#000000";
  }
  //document.getElementById("text2").innerHTML="skyt = "+skyCol+"<br>"+yelNum+"<br>"+h;
  return skyCol;
}

function landColor(h){//h=sun sunHeight
  var yelNum = h*4+75;//75 etc alters how quickly ground yellows/darkens
  yelNum = Math.floor(yelNum);
  var yelNum2 = 0;
  if(yelNum<0){yelNum=0}
  //158
  if(yelNum>200){yelNum2=yelNum-200;//158
    yelNum=200;}
  yelNum2 = Math.floor(yelNum2);
  var yelText = yelNum.toString(16);
  var yelText2 = yelNum2.toString(16);
  if(yelNum<16){yelText = "0"+yelText;}
  if(yelNum2<16){yelText2 = "0"+yelText2;}
  var landCol = "#"+yelText2+yelText+"00";
  return landCol;
}

function landColor2(h){//h=sun sunHeight
  var yelNum = h;
  var yelNum = Math.floor(yelNum);
  if(h>59){
  yelNum = (h-59)+128;
  yelNum = Math.floor(yelNum);
  if(yelNum<0){yelNum=0}
  if(yelNum>255){yelNum=255}
  var yelText = yelNum.toString(16);
  //if(yelNum<16){yelText = "0"+yelText;}
  var landCol = "#00"+yelText+"00";}
  /*else if(h>43){
  yelNum = (h-44)/2;
  yelNum = Math.floor(yelNum);
  if(yelNum<0){yelNum=0}
  if(yelNum>15){yelNum=15}
  var yelText = yelNum.toString(16);
  var skyCol = "#00"+yelText+yelText+"FF";}*/
  else if(h>1){
  yelNum = (h-1);
  var yelNum2 = yelNum;
  yelNum = Math.floor(yelNum);
  if(yelNum<0){yelNum=0}
  if(yelNum>8){yelNum=8}
  var yelText = yelNum.toString(16);
  var landCol = "#00"+yelText+yelText+"00";}
  else if(h<2){
  var landCol = "#000000";}
  else{
  var landCol = "#008000";
  }
  //document.getElementById("text2").innerHTML="skyt = "+skyCol+"<br>"+yelNum+"<br>"+h;
  return landCol;
}

function getCanvasImg(canvas){
    var img = new Image();
    img.src = canvas.toDataURL();
    return img;
}


function plotDriver(){

    time = time+deltaTime/1000;
    turn++;

  //  if(time>timeMax){
      //alert("timemax");
  //    stopDriver();}
//** driver osc
if(goFlag){
    if(springT0==0){
      springT0=time;
        springTr0=turn;
          }

    if(collisionFlag){//&&!oneMoreFlag&&springX>=0
      calcCollisionAonB();
    }
    else{
      }
    if(!collisionFlag){
    objPosA = centreA + objVelA*velScale;//objPosA + objVelA*velScale;
    objPosB = centreB + objVelB*velScale;//objPosB + objVelB*velScale;
      centreA=objPosA;
      centreB=objPosB;}
    /*  if(collisionFlag){
        centreA=endPos-objRadaA;
        centreB=endPos+objRadaB;
        //objPosA=centreA-objRadA;//+objRadaA;
        //objPosB=centreB+objRadB;//-objRadaB;
      }*/
      //if(turn>springT1&&turn<springT2+10){
  //posAA[turn]=centreA;
  //posBA[turn]=centreB;
//}
    if(objPosA<(canvW/4)){
      stopDriver();
    }
    if(objPosA>(canvW*3/4)){
      stopDriver();
    }
    if(objPosB<(canvW/4)){
      stopDriver();
    }
    if(objPosB>(canvW*3/4)){
      stopDriver();
    }
    /*if(turn>springTr2+50){
      //alert("turn="+turn+" springTr2="+springTr2);
      stopDriver();
    }*/
    /*if(!afterCollFlag&&!collisionFlag&&objVelB>=objVelA){
      //no contact possible
        document.getElementById("dummy2").innerHTML="No contact possible!";
        stopDriver();
    }*/
//} //goflag end bracket

    if(afterCollFlag){
        mvA = objMassA*objVelA;
        mvB = objMassB*objVelB;
        mvT = mvA+mvB;
        keA2 = 0.5*objMassA*Math.pow(objVelA, 2);
        keB2 = 0.5*objMassB*Math.pow(objVelB, 2);
        keT2 = keA2+keB2;
        /*if(objVelA<0.1){
        objVelA=0;}
        else{}
        if(objVelB<0.1){
        objVelB=0;}
        else{}*/
      //document.getElementById("dummy2").innerHTML="v<sub>A</sub> = "+ printNumber(objVelA)+" "+speedUnits+";  v<sub>B</sub> = "+ printNumber(objVelB)
      //+" "+speedUnits+"<br>p'<sub>A</sub> = "+ printNumber(mvA)+" "+mvUnits+ ";<br>  p'<sub>B</sub> = "+ printNumber(mvB)
      //+" "+mvUnits+"<br>ke'<sub>A</sub> = "+ printNumber(keA2)+" "+keUnits+ ";<br>  ke'<sub>B</sub> = "+ printNumber(keB2)+" "+keUnits;
      /*document.getElementById("dummy3").innerHTML="max compression = "+ springMax+"<br>max force = "
      + forceMax+"<br>impulse = "+ impulse+ " <br><br>time0 = "
      + springT0+ " <br>time1 = "+ springT1+ " <br>time2 = "+ springT2
      + " <br><br>turn0 = "+ springTr0+ " <br>turn1 = "+ springTr1+ " <br>turn2 = "+ springTr2;
      */
      //document.getElementById("dummy3").innerHTML="<br>max force = "
      //+ printNumber(forceMax)+forceUnits+"<br>ave force = "
      //+ printNumber(forceAve)+" "+forceUnits+"<br>impulse = "+ printNumber(impulse)
      //+ " "+impulseUnits+" <br>contact time = "+ (springTr2-springTr0)+" "+timeUnits;


      //document.getElementById("dummy4").innerHTML="<br>total mu = "
      //+ printNumber(muT)+" "+mvUnits+"<br>total mv = "
      //+ printNumber(mvT)+" "+mvUnits+"<br>total KE = "
      //+ printNumber(keT1)+" "+keUnits+"<br>total KE' = "
      //+ printNumber(keT2)+" "+keUnits;
    }
}//goFlag end
          var c = document.getElementById("myCanvas");
          var ctx = c.getContext("2d");
          ctx.canvas.width = canvW;
          ctx.canvas.height = canvH;
          // Green rectangle77
          ctx.beginPath();
          ctx.setLineDash([]);
          ctx.lineWidth = "1";
          ctx.strokeStyle = "black";
          ctx.rect(25, 30, canvW-50, canvH-60);
          ctx.stroke();

                ctx.lineWidth = "1";

                //markings on mirror line
                ctx.moveTo((mirrorLX+mirrorRX)/2, (mirrorLY+mirrorRY)/2);
                ctx.lineTo((mirrorLX+mirrorRX)/2, (mirrorLY+mirrorRY)/2+14);
                for(e=mirrorLX; e<mirrorRX+1;e=e+5){
                ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                ctx.lineTo(e, (mirrorLY+mirrorRY)/2+5);
                ctx.stroke();}
                for(e=mirrorLX-5; e<mirrorRX+1;e=e+25){
                ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
                ctx.stroke();}
                for(e=(mirrorLX+mirrorRX)/2; e<mirrorRX+1;e=e+50){
                ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                ctx.lineTo(e, (mirrorLY+mirrorRY)/2+15);
                ctx.stroke();}
                for(e=(mirrorLX+mirrorRX)/2; e>mirrorLX-1;e=e-50){
                ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                ctx.lineTo(e, (mirrorLY+mirrorRY)/2+15);
                ctx.stroke();}
                ctx.fillText("0",(mirrorLX+mirrorRX)/2-3, (mirrorLY+mirrorRY)/2+25);
                for(f=1;f<6;f++){
                ctx.fillText("-"+f*10,((mirrorLX+mirrorRX)/2-8)-(f*50), ((mirrorLY+mirrorRY)/2+25));
                ctx.fillText("+"+f*10,((mirrorLX+mirrorRX)/2-8)+(f*50), ((mirrorLY+mirrorRY)/2+25));
                }

                //ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
                    ctx.beginPath();
                    ctx.lineWidth = "1";
                    ctx.strokeStyle = "black";
                    ctx.moveTo(mirrorLX, mirrorLY);
                    ctx.lineTo(mirrorRX, mirrorRY);
                    //ctx.moveTo(30, canvH-120);
                    //ctx.lineTo(canvW-60, canvH-120);
                    ctx.stroke();

                    //***MASS A
                        ctx.beginPath();
                        ctx.lineWidth = "4";
                        ctx.strokeStyle = "black";
                        //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
                        ctx.ellipse(centreA, canvH/2, objRadaA, objRadbA, 0, 0, 2 * Math.PI);
                        //ctx.arc(objPosA, canvH/2, objRadA, 0, 2 * Math.PI);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.lineWidth = "4";
                        ctx.fillStyle = "blue";
                        //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
                        ctx.ellipse(centreA, canvH/2, objRadaA-2, objRadbA-2, 0, 0, 2 * Math.PI);
                        //ctx.arc(objPosA, canvH/2, objRadA, 0, 2 * Math.PI);
                        ctx.fill();
                        ctx.beginPath();
                        ctx.fillStyle = "white";
                        //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
                        ctx.ellipse(centreA+objRadaA/2.5, canvH/2-objRadbA/2.5, objRadaA/5, objRadbA/5, 0, 0, 2 * Math.PI);
                        //ctx.arc(objPosA, canvH/2, objRadA, 0, 2 * Math.PI);
                        ctx.fill();
                    //***MASS B
                        ctx.beginPath();
                        ctx.lineWidth = "4";
                        ctx.strokeStyle = "black";
                        ctx.ellipse(centreB, canvH/2, objRadaB, objRadbB, 0, 0, 2 * Math.PI);
                        //ctx.arc(objPosB, canvH/2, objRadB, 0, 2 * Math.PI);
                        ctx.stroke();
                        ctx.beginPath();
                            ctx.lineWidth = "4";
                            ctx.fillStyle = "red";
                            ctx.ellipse(centreB, canvH/2, objRadaB-2, objRadbB-2, 0, 0, 2 * Math.PI);
                            //ctx.arc(objPosB, canvH/2, objRadB, 0, 2 * Math.PI);
                            ctx.fill();
                            ctx.beginPath();
                            ctx.fillStyle = "white";
                            //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
                            ctx.ellipse(centreB+objRadaB/2.5, canvH/2-objRadbB/2.5, objRadaB/5, objRadbB/5, 0, 0, 2 * Math.PI);
                            //ctx.arc(objPosA, canvH/2, objRadA, 0, 2 * Math.PI);
                            ctx.fill();
                                                //ARROW A - centre
                                          ctx.beginPath();
                                          ctx.lineWidth = "2";
                                          ctx.strokeStyle = "black";//"blue";
                                          ctx.moveTo(centreA, canvH/2,);
                                          if(objVelA<0){arrAsign=-1;}
                                          else{arrAsign=1;}
                                          arrLenA = Math.pow(objVelA*arrAsign*1000,0.3);
                                          ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign, canvH/2-1);
                                          ctx.stroke();
                                          if(Math.abs(objVelA)>0.01){
                                          var arrowA = 5*arrAsign;//arrLenA*arrAsign;
                                          /*if(objVelA>10){arrowA = objVelA/arrowSc;}
                                          else if(objVelA<-10){arrowA = objVelA/arrowSc;}
                                          else if(objVelA<0){arrowA = -5;}*/
                                          ctx.beginPath();
                                          ctx.lineWidth = "2";
                                          ctx.strokeStyle = "black";//"blue";
                                          ctx.moveTo(centreA+arrLenA*arrowSc*arrAsign, canvH/2-1);
                                          ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign-arrowA, canvH/2-1-arrowA);
                                          ctx.stroke();
                                          ctx.beginPath();
                                          ctx.lineWidth = "2";
                                          ctx.strokeStyle = "black";//"blue";
                                          ctx.moveTo(centreA+arrLenA*arrowSc*arrAsign, canvH/2-1);
                                          ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign-arrowA, canvH/2-1+arrowA);
                                          ctx.stroke();}
                                          //ARROW A - top
                                    ctx.beginPath();
                                    ctx.lineWidth = "2";
                                    ctx.strokeStyle = "blue";
                                    ctx.moveTo(centreA, 40);
                                    if(objVelA<0){arrAsign=-1;}
                                    else{arrAsign=1;}
                                    arrLenA = Math.pow(objVelA*arrAsign*1000,0.3);
                                    ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign, 40,);
                                    ctx.stroke();
                                    if(Math.abs(objVelA)>0.01){
                                    var arrowA = 5*arrAsign;//arrLenA*arrAsign;
                                    /*if(objVelA>10){arrowA = objVelA/arrowSc;}
                                    else if(objVelA<-10){arrowA = objVelA/arrowSc;}
                                    else if(objVelA<0){arrowA = -5;}*/
                                    ctx.beginPath();
                                    ctx.lineWidth = "2";
                                    ctx.strokeStyle = "blue";
                                    ctx.moveTo(centreA+arrLenA*arrowSc*arrAsign, 40);
                                    ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign-arrowA, 40-arrowA);
                                    ctx.stroke();
                                    ctx.beginPath();
                                    ctx.lineWidth = "2";
                                    ctx.strokeStyle = "blue";
                                    ctx.moveTo(centreA+arrLenA*arrowSc*arrAsign, 40);
                                    ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign-arrowA, 40+arrowA);
                                    ctx.stroke();}
                                          //ARROW B
                                          ctx.beginPath();
                                          ctx.lineWidth = "2";
                                          ctx.strokeStyle = "black";//"red";
                                          ctx.moveTo(centreB, canvH/2,);
                                          if(objVelB<0){arrBsign=-1;}
                                          else{arrBsign=1;}
                                          arrLenB = Math.pow(objVelB*arrBsign*1000,0.3);
                                          ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign, canvH/2+1);
                                          ctx.stroke();
                                          if(Math.abs(objVelB)>0.01){
                                          var arrowB = 5*arrBsign;//arrLenA*arrAsign;
                                          /*if(objVelA>10){arrowA = objVelA/arrowSc;}
                                          else if(objVelA<-10){arrowA = objVelA/arrowSc;}
                                          else if(objVelA<0){arrowA = -5;}*/
                                          ctx.beginPath();
                                          ctx.lineWidth = "2";
                                          ctx.strokeStyle = "black";//"red";
                                          ctx.moveTo(centreB+arrLenB*arrowSc*arrBsign, canvH/2+1);
                                          ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign-arrowB, canvH/2+1-arrowB);
                                          ctx.stroke();
                                          ctx.beginPath();
                                          ctx.lineWidth = "2";
                                          ctx.strokeStyle = "black";//"red";
                                          ctx.moveTo(centreB+arrLenB*arrowSc*arrBsign, canvH/2+1);
                                          ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign-arrowB, canvH/2+1+arrowB);
                                          ctx.stroke();}
                                          //ARROW B - bottom
                                        ctx.beginPath();
                                        ctx.lineWidth = "2";
                                        ctx.strokeStyle = "red";
                                        ctx.moveTo(centreB, 50);
                                        if(objVelB<0){arrBsign=-1;}
                                        else{arrBsign=1;}
                                        arrLenB = Math.pow(objVelB*arrBsign*1000,0.3);
                                        ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign, 50);
                                        ctx.stroke();
                                        if(Math.abs(objVelB)>0.01){
                                        var arrowB = 5*arrBsign;//arrLenA*arrAsign;
                                              /*if(objVelA>10){arrowA = objVelA/arrowSc;}
                                              else if(objVelA<-10){arrowA = objVelA/arrowSc;}
                                              else if(objVelA<0){arrowA = -5;}*/
                                        ctx.beginPath();
                                        ctx.lineWidth = "2";
                                        ctx.strokeStyle = "red";
                                        ctx.moveTo(centreB+arrLenB*arrowSc*arrBsign, 50);
                                        ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign-arrowB, 50-arrowB);
                                        ctx.stroke();
                                        ctx.beginPath();
                                        ctx.lineWidth = "2";
                                        ctx.strokeStyle = "red";
                                        ctx.moveTo(centreB+arrLenB*arrowSc*arrBsign, 50);
                                        ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign-arrowB, 50+arrowB);
                                        ctx.stroke();}

                                        //**centre marker
                                            ctx.beginPath();
                                            ctx.setLineDash([10, 10]);
                                            ctx.lineWidth = "1";
                                            ctx.strokeStyle = "grey";
                                            ctx.moveTo(canvW/2, 50);
                                            ctx.lineTo(canvW/2, canvH-50);
                                            ctx.stroke();

  }


  function changeMA(n){
  }

  function changeMB(n){
  }

    function changeUA(n){
    }

    function changeUB(n){
    }


    function changeT(){
      timeNow = parseInt(document.getElementById("myRangeT").value);//valueAsNumber(slider2.value);
      timeNow = timeNow/12;
      document.getElementById("slideT").innerHTML="time = "+printNumberT(timeNow)+"";
      plotNewFrame();
      //goFlag=false;
      //plotDriver();
    }


        function changeD(){
        var dateText = "January 1, "+dateYear+" 00:00:00 GMT+00:00";//'January 1, 2023 00:00:00 GMT+00:00'
        var date0 = new Date(dateText);
        date0 = date0.getTime();
        var msInDay = 1000*60*60*24;
        dateNow = parseInt(document.getElementById("myRangeD").value)-5;
        if(dateNow>170&&dateNow<176){yearDown=1;yearUp=1;}
        if(dateNow==-4&&yearDown!=2){
          yearDown=2;
          dateYear--;
          if(dateYear%4==0){leapYear=true;}
          else{leapYear=false;}
          dateNow=367;
          document.getElementById("myRangeD").value=371;
        }
        if(dateNow==370&&yearUp!=2){
          yearUp=2;
          dateYear++;
          if(dateYear%4==0){leapYear=true;}
          else{leapYear=false;}
          dateNow=-1;
          document.getElementById("myRangeD").value=1;
        }
        if(dateNow<1){dateNow=1;}
        if(leapYear){
          if(dateNow>366){dateNow=366;}
        }
        else{
          if(dateNow>365){dateNow=365;}
        }
        var nowByCalc = (dateNow-1)*msInDay+date0;
        var nowByCalc2 = new Date(nowByCalc);
        var nowIs = nowByCalc2.toDateString()
          document.getElementById("slideD").innerHTML=""+nowIs+"";
          plotNewFrame();
          //goFlag=false;
          //
        }
            function changeD_old(){
          dateNow = parseInt(document.getElementById("myRangeD").value);//valueAsNumber(slider2.value);
          //timeNow = timeNow/4;
          document.getElementById("slideD").innerHTML="date = "+dateNow+"";
          plotNewFrame();
          //goFlag=false;
          //plotDriver();
        }

        function changeL(){
          latNow = parseInt(document.getElementById("myRangeL").value);//valueAsNumber(slider2.value);
          //latNow = latNow-90;
          document.getElementById("slideL").innerHTML="latitude = "+latNow+"<sup>o</sup>";
          plotNewFrame();
          //goFlag=false;
          //plotDriver();
        }

        function changeMBx(n){
        }

                function changeMAx(n){
                }

                        function changeUMBx(n){
                        }

                                function changeUAx(n){
                                }

        function changeMassU(n){
        }

                function changeMassUB(n){
                }

                                function changeMassUA(n){
                                }


          function changeSpeedU(n){
          }

                    function changeSpeedUB(n){
                    }

                                        function changeSpeedUA(n){
                                        }



function stopDriver(){
  clearTimeout(myTimer1);
  goFlag = false;
  makeChangesFlag = true;
  //plotGraphF();
  //plotGraphV();
  //alert(""+posAA);
  //alert("stop: "+moveData);
}

function zeroDriver(){

  objPosA = canvW/2;
  objPosB = canvW/2;
  objVelA = 0;
  objVelB = 0;
  objRadaAold = objRadA;
  objRadaBold = objRadB;
  objRadaA = objRadA;
  objRadaB = objRadB;
  endPos = (objPosA+objPosB)/2;
  centreA = objPosA;
  centreB = objPosB;
  makeChangesFlag = true;
  springForce=startForce;
  springX=-2*startEnergy/springForce;
  springK = -2*startEnergy/(Math.pow(springX, 2));
  springMax = 0;
  forceMax = 0;
  forceMax = 0;
  forceTot = 0;
  forceAve = 0;
  forceTime = 0;
  //springForce = 1;
  //startEnergy = 1e1;
  impulse = 0;
  springT0 = 0;
  springT1 = 0;
  springT2 = 0;
  turn = 0;
  springTr0 = 0;
  springTr1 = 0;
  springTr2 = 1e6;
  compNow = 2;
  decompressFlag=false;
  collisionFlag = true;
  makeChangesFlag=true;
  afterCollFlag = false;
  oneMoreFlag = false;
  //changeMA();
  //changeMB();
  //changeUA();
  //changeUB();
  //alert(""+percComp);
  plotDriver();

  //document.getElementById("dummy2").innerHTML="";
  //document.getElementById("dummy3").innerHTML="";
  //document.getElementById("dummy4").innerHTML="";
	distMoved=0;
	firstTime=0;
	secondTime=0;
	thinkTime=0;
	brakeFlag=false;//turns true when driver reacts
	thinkFlag=false;//turns true when stop appears
	letNow = "";
	fullWord = "";
    oldTime = 3;
	stopNowFlag=false;
	penalty = 0;
  time = 0;
  if(!goFlag){
  goFlag = true;
  //myTimer1 =  setInterval(plotDriver, deltaTime)
  }
  goFlag = false;
}

function printNumber(n){
  var answerNumb = n;
  if(n!=0){
  var ansLog = Math.floor(Math.log10(Math.abs(answerNumb)));}
  else{
    ansLog=0;
  }
  if(ansLog<2&&ansLog>-2){
  answerNumb = answerNumb.toFixed(2);///100;
  var answerText = ""+answerNumb;
  }
  else{
  var ansPow = Math.pow(10,ansLog);
  answerNumb = answerNumb/ansPow;
  answerNumb = Math.round(answerNumb *100)/100;
  answerNumb = answerNumb.toFixed(2);///100;
  var answerText = answerNumb+" x 10<sup>"+ansLog+"</sup> ";
  if(ansLog<-3){answerText=0;}
  }
  return answerText;
}

function printNumberT(n){
  var answerNumb = n;
  var hours = Math.floor(answerNumb);
  var mins = answerNumb - hours;
  //alert(""+answerNumb);
  mins = Math.round(60*mins);
  if(mins<10){
  var minsText = "0"+mins;}
  else{
  var minsText = ""+mins;}
  /*
  if(mins==0.75){minsText = "45"}
  else if(mins==0.5){minsText = "30"}
  else if(mins==0.25){minsText = "15"}
  else{minsText = "00"};
  */
  var answerText = hours+":"+minsText;
  return answerText;
}

function printNumber2(n){
  var answerNumb = n;
  if(n!=0){
  var ansLog = Math.floor(Math.log10(Math.abs(answerNumb)));}
  else{
    ansLog=0;
  }
  if(ansLog<4&&ansLog>-1){
  answerNumb = answerNumb.toFixed(2);///100;
  var answerText = ""+answerNumb;
  }
  else{
  var ansPow = Math.pow(10,ansLog);
  answerNumb = answerNumb/ansPow;
  answerNumb = Math.round(answerNumb *100)/100;
  answerNumb = answerNumb.toFixed(2);///100;
  var answerText = answerNumb+" x 10<sup>"+ansLog+"</sup> ";
  if(ansLog<-3){answerText=0;}
  }
  return answerText;
}


function sunPos(d){
  var dt = d;

  var sunP = 23.4*(Math.cos((dt-172)/365.25*2*Math.PI));

  return sunP;
}

function effectLat(l,t, s){
  var lat = l;//latNow
  var tm = t;
  var sp = s;

  if(lat<sp){
    lat = sp+(sp-lat);
  }

  var efLat = (90-lat)*(-Math.cos((tm-12)/24*2*Math.PI))+90;

  return efLat;
}

function sunHeight(l, s){
  var lat = l;//effectivelatitude
  var sp = s;

  var sunH = 90-(lat-sp);

  return sunH;
}
