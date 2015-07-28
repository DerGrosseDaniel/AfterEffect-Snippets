#Distance in specified direction

Moves layer in 'direction' by 'distance'.

##Needed
- Slider Effect named "direction"
- Slider Effect named "distance"

##Expression for the position
    //reads direction from slider and converts it from deg to rad
    direction = effect("direction")("Slider")*(2*Math.PI)/360
    //reads distance from slider
    distance = effect("distance")("Slider")
    
    //calculates movement in x direction
    difx = Math.sin(90-direction)*distance
    //calculates movement in y direction
    dify = Math.sin(direction)*distance
    
    //adds movement to current position
    transform.position+[difx,dify]
