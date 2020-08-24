
        let menu = document.querySelector("#menu");
        let headers = document.getElementsByTagName("h2");
        let bars = document.getElementById("container").children;
    let close_mark = document.querySelector("#close_mark");
        
        /*Add the animation*/
        
        menu.addEventListener("click",()=>{
     /*reveals the links*/           for( i = 0; i < headers.length; i++){
                    headers[i].setAttribute("class", headers[i].getAttribute("id") )};
     /*reveals the bars*/     for(i=0; i<bars.length; i++){
    bars[i].setAttribute("class", bars[i].getAttribute("id")+"-bar-anim" )}
            
        })
        
        
    /*Reverse the animation*/
        
        close_mark.addEventListener("click",()=>{
          /*closes the links*/  for( i = 0; i < headers.length; i++){
                headers[i].setAttribute("class", "return-head"+i)};
            
            /*closes the bars*/  for(i=0; i<bars.length; i++){
    bars[i].setAttribute("class", "return-bar"+i)
        }})