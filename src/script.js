const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#ul li");

window.addEventListener('scroll', ()=>{
    let current="";
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= sectionTop - sectionHeight/6){
            current = section.getAttribute('id');
        }
    })
    console.log(current)

    navLi.forEach( li => {
        console.log(li)
        li.classList.remove('active1');
        if(li.classList.contains(current)){
            li.classList.add('active1')
        }
    })
})

const form = document.getElementById("form").submit();