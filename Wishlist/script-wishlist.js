
function deleteItem(id){
    document.getElementById(id+"-wishlist").remove();
    myUl = document.getElementById("myUL");
    if(myUl.getElementsByTagName('li').length > 0){
        
        document.getElementById("no-items").style.display="none";
    }
    else{
        document.getElementById("no-items").style.display="block";
    }
}

function addItem(id){
    var myUl = document.getElementById("myUL");
    var value = document.getElementById(id).title;
    var rta = document.getElementById(id+"-wishlist");
    if(rta === null){
        var li = document.createElement("li");
        li.setAttribute("id",id+"-wishlist");
        li.setAttribute("title",value);
        
        var t = document.createTextNode(value+" ");
        li.appendChild(t);

        var close = document.createElement("input");
        close.setAttribute("type","button");
        close.setAttribute("value","Quitar");
        close.setAttribute("onClick","deleteItem('"+id+"')");
        li.appendChild(close);

        myUl.appendChild(li);

        if(myUl.getElementsByTagName('li').length > 0){
            
            document.getElementById("no-items").style.display="none";
        }
        else{
            document.getElementById("no-items").style.display="block";
        }
    }
    else{
        alert(value+" ya fue agregado");
    }

    
    

}

