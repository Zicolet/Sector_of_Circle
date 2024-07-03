"use strict" 

// sectorOfCircle(radius,angle,mode,disp) returns an object with properties; 
// Arclength-> Length of arc       ,   Area-> Area of sector , 
// Perimeter-> Perimeter of sector ,   ChordLength-> Length of chord.

// The function accepts 4 arguments: 
// 2-REQUIRED [radius-> radius of circle, angle-> angle of sector]   
// 2-OPTIONAL with default values of 0 [mode-> 0=radian while 1=degree , disp-> 1=display sector properties in console while 0=otherwise] 


const sectorOfCircle = function(radius,angle,mode=0,disp=0){
  let Sector = {};
  Sector.radius = radius;
  Sector.angle = angle;

  // Degree to Radian conversion
  if (mode == 1){
    angle = angle * (Math.PI/180);
  }

  Sector.ArcLength = radius * angle;
  Sector.Area = 0.5 * angle * Math.pow(radius,2);
  Sector.Perimeter = 2 * radius + (radius * angle);
  Sector.ChordLength = 2 * radius * Math.abs(Math.sin(angle));
  
  if (disp == 1){
    console.log(`Sector with RADIUS ${Sector.radius} and ANGLE ${Sector.angle} has the following properties: \n Area: ${Sector.Area} \n ArcLength: ${Sector.ArcLength}\n Perimeter: ${Sector.Perimeter} \n ChordLength: ${Sector.ChordLength}`)
  }

  return Sector;
}