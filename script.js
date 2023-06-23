const ANIMATION_FOLDER = 'assets/animations/'
const LIST_ANIMATIONS = ['pythonA','figmaA','gitA','typescriptA','angularA','postgreA']


const burgerButton = document.getElementById('burger-menu')
const navOptions = document.getElementById('navbar-sticky')
burgerButton.addEventListener('click', ()=>{
    console.log("hola")
    navOptions.classList.toggle('hidden')
})



for(let a_name of LIST_ANIMATIONS){
    new rive.Rive({
        src: `${ANIMATION_FOLDER}${a_name}.riv`,
        canvas: document.getElementById(`${a_name}`),
        autoplay: true,
        stateMachines: "Animation",
    });
}


const subir = document.getElementById('arrowUp')
const bajar = document.getElementById('arrowDown')
const CARRUSEL = document.getElementById('carrusel')

var subida ;
var bajada ;
//SUBIDA

//BAJADA
subir.addEventListener('mouseenter', ()=>{
    clearInterval(bajada)
    bajada = setInterval(()=>{
        CARRUSEL.scrollBy(0,-10)
    },100)
    }
)
subir.addEventListener('mousedown', ()=>{
    clearInterval(bajada)
    bajada = setInterval(()=>{
        CARRUSEL.scrollBy(0,-10)
    },100)
    }
)
subir.addEventListener('mouseup', ()=>{
    clearInterval(bajada)
    }
)
subir.addEventListener('mouseleave', ()=>{
    clearInterval(bajada)
    }
)
//SUBIDA
bajar.addEventListener('mouseenter', ()=>{
    clearInterval(subida)
    subida = setInterval(()=>{
        CARRUSEL.scrollBy(0,10)
    },100)
    }
)
bajar.addEventListener('mousedown', ()=>{
    clearInterval(subida)
    subida = setInterval(()=>{
        CARRUSEL.scrollBy(0,10)
    },100)
    }
)
bajar.addEventListener('mouseup', ()=>{
    clearInterval(subida)
    }
)
bajar.addEventListener('mouseleave', ()=>{
    clearInterval(subida)
    }
)

const htmlAC = document.getElementById('htmlAC')

htmlAC.addEventListener('mouseenter',()=>{
    const htmlA = document.getElementById('htmlA')
    htmlA.classList.toggle('animateHtml')

})
htmlAC.addEventListener('mouseleave',()=>{
    const htmlA = document.getElementById('htmlA')
    htmlA.classList.toggle('animateHtml')

})

const cssAC = document.getElementById('cssAC')
cssAC.addEventListener('mouseenter',()=>{
    const cssA = document.getElementById('cssA')
    cssA.classList.toggle('animateCSS')

})
cssAC.addEventListener('mouseleave',()=>{
    const cssA = document.getElementById('cssA')
    cssA.classList.toggle('animateCSS')

})


