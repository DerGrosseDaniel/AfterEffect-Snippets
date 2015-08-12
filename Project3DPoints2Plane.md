# Project 3D points to Plane

This expression moves a point on the line between camera and current position to a designated y-value (can be changed for other coordinates).

This moves all points to the plane through the new y, but keeps the position of the point visually the same for the camera.

Copy this expression to position of object.

    Pf = transform.position //old Position
    Pk = thisComp.layer("3D Tracker Camera").transform.position //cameraposition

    yh = -800 //new y-value

    X = Pk + (Pf-Pk)*(yh-Pk[1])/(Pf[1]-Pk[1])