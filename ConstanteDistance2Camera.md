# Project 3D points to Plane

This expression moves a point on the line between camera and current position. The Point has always the same distance to the camera.

This moves all points to a new path, but keeps the position of the point visually the same for the camera.

Copy this expression to position of object.

	Pf=transform.position //eigene alte Position
	Pk = thisComp.layer("3D Tracker Camera").transform.position //Position der Kamera

	distance = 500 //distance to camera

	//X = Pk + distance*(Pf-Pk)/Math.sqrt( (Pf[0]-Pk[0])*(Pf[0]-Pk[0]) + (Pf[1]-Pk[1])*(Pf[1]-Pk[1]) + (Pf[2]-Pk[2])*(Pf[2]-Pk[2]) )
	X = Pk + distance*(Pf-Pk)/length(Pf,Pk)