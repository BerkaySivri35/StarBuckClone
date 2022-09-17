const Btns = document.getElementById("btn");
const Btn2 = document.getElementById("btn2");
const Btn3 = document.getElementById("btn3");
const Btn4 = document.getElementById("btn4");
const Liste = document.querySelector(".liste")
const Liste2 = document.querySelector(".liste2")
const Liste3 = document.querySelector(".liste3")
const Liste4 = document.querySelector(".liste4")



Btns.addEventListener("click", function(){
    console.log("hello",Liste.classList)
    //İlk Yöntem-------------------------
    /*if(Liste.classList.contains('d-none')){
        Liste.classList.remove('d-none')
    }
    else{
        Liste.classList.add("d-none");
    }*/

    //ikinci Yöntem --------------------
   Liste.classList.toggle('d-none')
})

Btn2.addEventListener("click", function(){
    console.log("hello2",Liste2.classList)
    
    Liste2.classList.toggle('d-none')
})

Btn3.addEventListener("click", function(){
    console.log("hello",Liste3.classList)
    
    Liste3.classList.toggle('d-none')
})

Btn4.addEventListener("click", function(){
    console.log("hello",Liste4.classList)
    
    Liste4.classList.toggle('d-none')
})

