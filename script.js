const accordians = document.querySelectorAll(".Accordian")

accordians.forEach(accordian =>{
    const icon = accordian.querySelector(".down-arrow")
    const answer = accordian.querySelector(".paraAcc")

    accordian.addEventListener("click",()=>{
        //  answer.classList.toggle("active")
        //  icon.classList.toggle("active")

        if(icon.classList.contains("active")){
            icon.classList.remove('active')
            answer.style.maxHeight=null;
        }else{
            icon.classList.add('active')
            answer.style.maxHeight=answer.scrollHeight + 'px'
        }
    })
})