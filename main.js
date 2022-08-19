//cambiar tema a dark
$$('.theme').forEach(e => {
    e.addEventListener('click',()=>{
        if ($('.acerca').classList.contains('light')) {
            $('.acerca').style.backgroundColor = '#222'
            $('.acerca').style.color = '#fff'
            $('.acerca').classList.remove('light')
            $('.acerca').classList.add('dark')
            $('.acerca .fa-sun').style.display = 'block'
            $('.acerca .fa-moon').style.display = 'none'

        } else if($('.acerca').classList.contains('dark')){
            $('.acerca').style.backgroundColor = '#fff'
            $('.acerca').style.color = '#222'
            $('.acerca').classList.remove('dark')
            $('.acerca').classList.add('light')
            $('.acerca .fa-sun').style.display = 'none'
            $('.acerca .fa-moon').style.display = 'block'
        }
    })
})
