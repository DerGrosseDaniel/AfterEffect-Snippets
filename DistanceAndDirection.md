#Distance in specified direction

Moves layer in 'direction' by 'distance'.

##Needed
- Slider Effect named "direction"
- Slider Effect named "distance"

##Expression for the position
    direction = effect("direction")("Slider")*(2*Math.PI)/360
    distance = effect("distance")("Slider")
    
    difx = Math.sin(90-direction)*distance
    dify = Math.sin(direction)*distance
    
    transform.position+[difx,dify]
