'use strict'

var state = 0

function checkState() {
    
    switch (state) {
        case 0:
            document.getElementById('banner-all').style.backgroundColor = "gold";
            document.getElementById('banner-all').style.backgroundPosition = "center";
            document.getElementById('banner-all').style.backgroundSize = "100%";
            document.getElementById('banner-all').style.backgroundImage = "url('https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80')";
            document.getElementById('banner-title').innerHTML = "Titulo 01";
            document.getElementById('banner-subtitle').innerHTML = "Subtitulo 01";
            break;

        case 1:
            document.getElementById('banner-all').style.backgroundColor = "blue";
            document.getElementById('banner-all').style.backgroundImage = "url('https://images.unsplash.com/photo-1576267423429-569309b31e84?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80')";
            document.getElementById('banner-title').innerHTML = "Titulo 02";
            document.getElementById('banner-subtitle').innerHTML = "Subtitulo 02";
            break;

        case 2:
            document.getElementById('banner-all').style.backgroundColor = "crimson";
            document.getElementById('banner-all').style.backgroundImage = "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1363&q=80')";
            document.getElementById('banner-title').innerHTML = "Titulo 03";
            document.getElementById('banner-subtitle').innerHTML = "Subtitulo 03";
            break;
    }

    state++

    if(state > 2){
        state = 0
    }

}