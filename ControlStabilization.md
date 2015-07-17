#Control Stabilisation

This Script is for an After Effects Composition which has one Frame per layer (stop motion). Every frame is slightly positioned by hand to have a fixed point.

There is a null "Control Stabilisation" with a expression slider "Percent of Stabilization". 100 equals the Image stays stabilized 100%, 0% means every frame gets the same Position as the null "Control Stabilisation".

Copy the Expression to Position of all Layers

## Expression for Position of Layers
percentage = thisComp.layer("Control Stabilisation").effect("Percent of Stabilization")("Slider");
centerPosition = thisComp.layer("Control Stabilisation").transform.position;
(centerPosition * (100-percentage) + position*(percentage))/100;
