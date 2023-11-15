const btn1 = document.getElementById("next1")
const btn2 = document.getElementById("next2")
const enter = document.getElementById("enter")
const answer = document.getElementById("answer")



document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        
        document.querySelector(".animate-slide-in").classList.remove("translate-x-full");
        setTimeout(()=>{
            document.getElementById("dialogue1").classList.remove("hidden");
        },1000)
        
    }, 2000); 
    
});

btn1.addEventListener('click',()=>{
    document.getElementById("text1").classList.add("hidden");
    document.getElementById("next1").classList.add("hidden");
    document.getElementById("text2").classList.remove("hidden");
    document.getElementById("next2").classList.remove("hidden");
})

btn2.addEventListener('click',()=>{
    document.getElementById("dialogue1").classList.add("hidden");
    document.getElementById("av").classList.add("hidden");
    document.getElementById("chal1").classList.remove("hidden");
})

enter.addEventListener('click', ()=>{
    if (answer.value === "65"){
        window.location.href = "wordle.html"
    }else{
        windows.alert("stoopid ass nigga")
    }
})
