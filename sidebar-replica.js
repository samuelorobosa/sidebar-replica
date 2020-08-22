
        let menu = document.querySelector("#menu");
        let firstHead = document.querySelector("#first-head");
          let secondHead = document.querySelector("#second-head");
         let thirdHead = document.querySelector("#third-head");
          let fourthHead = document.querySelector("#fourth-head");
         let fifthHead = document.querySelector("#fifth-head");
          let sixthHead = document.querySelector("#sixth-head");
         let seventhHead = document.querySelector("#seventh-head");
          let eighthHead = document.querySelector("#eighth-head");
        let firstBar = document.querySelector("#first");
        let secondBar = document.querySelector("#second");
        let thirdBar = document.querySelector("#third");
    let close_mark = document.querySelector("#close_mark");
        
        
        
        /*Add the animation*/
        
        menu.addEventListener("click",()=>{
            firstHead.setAttribute("class","first-head");
             secondHead.setAttribute("class","second-head");
             thirdHead.setAttribute("class","third-head");
             fourthHead.setAttribute("class","fourth-head");
             fifthHead.setAttribute("class","fifth-head");
             sixthHead.setAttribute("class","sixth-head");
             seventhHead.setAttribute("class","seventh-head");
             eighthHead.setAttribute("class","eighth-head");
            firstBar.setAttribute("class", "first-bar-anim")
            secondBar.setAttribute("class", "second-bar-anim");
            thirdBar.setAttribute("class", "third-bar-anim");
            
        })
        
        
    /*Reverse the animation*/
        
        close_mark.addEventListener("click",()=>{
            firstHead.setAttribute("class","first-head1-0")
              secondHead.setAttribute("class","second-head2-0")
            thirdHead.setAttribute("class", "third-head3-0")
            fourthHead.setAttribute("class","fourth-head4-0")
              fifthHead.setAttribute("class","fifth-head5-0")
            sixthHead.setAttribute("class", "sixth-head6-0")
              seventhHead.setAttribute("class","seventh-head7-0")
            eighthHead.setAttribute("class", "eighth-head8-0")
              firstBar.setAttribute("class", "first-bar-anim1_0")
            secondBar.setAttribute("class", "second-bar-anim1_0");
            thirdBar.setAttribute("class", "third-bar-anim1_0");
        })
        
     