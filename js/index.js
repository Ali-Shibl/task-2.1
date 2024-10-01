

document.addEventListener('scroll',()=>{
    if (document.documentElement.scrollTop > 300 ) {
        document.querySelectorAll('nav').forEach((x)=>x.classList.add('fixed-top' ,'bg-white' ))
    }else{
        document.querySelectorAll('nav').forEach((x)=>x.classList.remove('fixed-top' ,'bg-white'))
    }    
})