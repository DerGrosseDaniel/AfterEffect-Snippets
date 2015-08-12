               var layerInf = new Object();
                layerInf.type = "null";
                if (thisLayer instanceof TextLayer) {
                    layerInf.type = "Text";
                } else
                if (thisLayer instanceof LightLayer) {
                    layerInf.type = "Light";
                    layerInf.lightType = thisLayer.lightType;
                } else
                if (thisLayer instanceof ShapeLayer) {
                    layerInf.type = "Shape";
                } else
                if (thisLayer instanceof AVLayer) {
                    if (thisLayer.source.mainSource instanceof SolidSource && thisLayer.nullLayer != true && !(thisLayer.source instanceof CompItem)) {
                        layerInf.type = "Solid";
                        layerInf.solidColor = thisLayer.source.mainSource.color;
                    } else if (thisLayer.source.mainSource instanceof FileSource && thisLayer.nullLayer != null && !(thisLayer.source instanceof CompItem)) {
                        layerInf.sound = thisLayer.hasAudio;
                        if (layerInf.sound) {
                            layerInf.type = "VideoWithSound";
                        } else {
                            layerInf.type = "VideoWithoutSound";
                        }
                    } else if (thisLayer.source instanceof CompItem) {
                        layerInf.type = "Comp";
                    }
                } else
                if (thisLayer instanceof AVLayer) {
                    if (thisLayer.nullLayer) {
                        layerInf.type = "Null";
                    }
                } else
                if (thisLayer instanceof CameraLayer) {
                    layerInf.type = "Camera";
                }