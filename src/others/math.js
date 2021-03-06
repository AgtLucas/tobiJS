



tobi.Math = {

randomRange : function(min, max) {

  return Math.random() * (max - min) + min;

},

irandomRange : function(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;

},

lerp : function(fromValue,toValue,t) {

  return (1.0-t) * fromValue + t * toValue;

},

lerpAngle : function(fromValue,toValue,t) {

  /*var shortest_angle = ((((toValue - fromValue) % 360) + 540) % 360) - 180;
  return shortest_angle * t;*/

  var end = toValue;
  var start = fromValue;

  var difference = Math.abs(end - start);
  if (difference > 180)
  {
      // We need to add on to one of the values.
      if (end > start)
      {
          // We'll add it on to start...
          start += 360;
      }
      else
      {
          // Add it on to end.
          end += 360;
      }
  }

        // Interpolate it.
      var value = (start + ((end - start) * t));

        // Wrap it..
        var rangeZero = 360;

        if (value >= 0 && value <= 360)
            return value;

        return (value % rangeZero);


},

distance : function(x0,y0,x1,y1) {

   return Math.sqrt((x0 -= x1) * x0 + (y0 -= y1) * y0);

},

angleBetween : function(x0,y0,x1,y1) {

  var angle = this.toDegree(Math.atan2(y1 - y0, x1 - x0));

  if (angle < 0 && angle >= -180)
    angle = 360 + angle;


   return angle;

}



}

tobi.Math.degToRad = Math.PI / 180;
tobi.Math.radToDeg = 180 / Math.PI;
tobi.Math.PI2 = Math.PI * 2;

tobi.Math.toDegree = function(radians) {

  return radians * tobiJS.Math.radToDeg;

};

tobi.Math.toRadian = function(degrees) {

  return degrees * tobiJS.Math.degToRad;

};
