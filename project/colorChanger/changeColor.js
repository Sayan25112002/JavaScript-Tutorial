const buttons = document.querySelectorAll(".button");
console.log(buttons)
const body = document.querySelector("body")
console.log(body)
buttons.forEach((button)=>{
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        body.style.backgroundColor=e.target.id
        if(e.target.id=="black"){
            body.style.color="white"
        }else{
            body.style.color="black"
        }
    })
});