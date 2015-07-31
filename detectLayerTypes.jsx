function fileType(item){  
        var curItemType;  
          
    if(item instanceof FolderItem && item.parentFolder != "Root" && item.parentFolder != item.name){  
            return "Subfolder";  
        }      
    if(item instanceof FolderItem){  
            return "Folder";  
        }          
     if(item.nullLayer == true){  
            return "Null";  
        }  
    if(item instanceof ShapeLayer){  
            return "Shape Layer"  
}  


    if(item.adjustmentLayer == true){  
            return "Adjustment Layer";  
}  
    if(item.hasVideo == true && item.hasAudio == false && item.duration == 0){  
            return "Picture";  
        }  
     if(item.hasVideo == true && item.hasAudio == true && item.duration != 0){  
            return "Video";  
        }       
     if(item.hasVideo == false && item.hasAudio == true){  
            return "Audio";  
        }  
    if(item instanceof CompItem){  
            return "Comp";  
        }  
      
      
}