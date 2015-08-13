//gets first virtex in comp (untested)
//from kobyg http://aenhancers.com/viewtopic.php?f=6&t=1423

var comp = app.project.activeItem;
var mask = comp.selectedProperties[0];
var maskShape = mask.maskShape;
var shape = maskShape.numKeys ? maskShape.valueAtTime(comp.time,false) : maskShape.value;
var verts = shape.vertices;
alert(verts[0]);
