function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

let button1= document.querySelector('.bb1')
let text1=document.querySelector('.dropp')
let button2= document.querySelector('.bb2')
let text2=document.querySelector('.dropp2')
let button3= document.querySelector('.bb3')
let text3=document.querySelector('.dropp3')
let header=document.querySelector('.li1')
let header2=document.querySelector('.li2')
let header3=document.querySelector('.li3')

button1.addEventListener('click',(e)=>{
    if(text1.className !="show"){
        text1.className="show"
        text2.className="dropp2"
        text3.className="dropp3"
        header.style.backgroundColor="red"
        header.style.color="white"
        header2.style.backgroundColor="white"
        header2.style.color="black"
        header3.style.backgroundColor="white"
        header3.style.color="black"
    }
    else{
        text1.className="dropp"
        header.style.backgroundColor="white"
        header.style.color="black"
    }
})

button2.addEventListener('click',(e)=>{
    if(text2.className !="show"){
        text2.className="show"
        text1.className="dropp"
        text3.className="dropp3"
        header2.style.backgroundColor="red"
        header2.style.color="white"
        header.style.backgroundColor="white"
        header.style.color="black"
        header3.style.backgroundColor="white"
        header3.style.color="black"
    }
    else{
        text2.className="dropp2"
        header2.style.backgroundColor="white"
        header2.style.color="black"
    }
})

button3.addEventListener('click',(e)=>{
    if(text3.className !="show"){
        text3.className="show"
        text1.className="dropp"
        text2.className="dropp2"
        header3.style.backgroundColor="red"
        header3.style.color="white"
        header.style.backgroundColor="white"
        header.style.color="black"
        header2.style.backgroundColor="white"
        header2.style.color="black"
    }
    else{
        text3.className="dropp3"
        header3.style.backgroundColor="white"
        header3.style.color="black"
    }
})