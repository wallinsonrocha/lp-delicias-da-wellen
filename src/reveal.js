const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('w-hidden')
        } 
        // else{
        //     entry.target.classList.add('w-hidden')
        // }
    })
})

const hiddenElements = document.querySelectorAll('.w-hidden')
hiddenElements.forEach((el) => observer.observe(el))