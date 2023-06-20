

const ANIMATION_FOLDER = 'assets/animations/'



const burgerButton = document.getElementById('burger-menu')
const navOptions = document.getElementById('navbar-sticky')
burgerButton.addEventListener('click', ()=>{
    console.log("hola")
    navOptions.classList.toggle('hidden')
})

const lienzo = document.getElementById('test')


document.addEventListener('keypress',(e)=>{
    let val_random = parseInt(Math.random()*256)
    let last_class = lienzo.classList[lienzo.classList.length-1]
    lienzo.classList.remove(last_class)
    lienzo.classList.add(`bg-[rgb(0,0,${val_random})]`)
    // lienzo.classList.remove(lienzo.classList.at(-1))
    console.log()
})



new rive.Rive({
    src: `${ANIMATION_FOLDER}pythonA.riv`,
    // Or the path to a public Rive asset
    // src: '/public/example.riv',
    canvas: document.getElementById("canvasPY"),
    autoplay: true,
    stateMachines: "Animation",
});





for(let i=2; i<20;i++){
    new rive.Rive({
        src: "assets/animations/pythonA.riv",
        // Or the path to a public Rive asset
        // src: '/public/example.riv',
        canvas: document.getElementById(`canvasPY${i}`),
        autoplay: true,
        stateMachines: "Animation",
    });
}

// new rive.Rive({
//     src: "assets/pythona.riv",
//     // Or the path to a public Rive asset
//     // src: '/public/example.riv',
//     canvas: document.getElementById("canvasPY2"),
//     autoplay: true,
//     stateMachines: "Animation",
// });

// new rive.Rive({
//     src: "assets/pythona.riv",
//     // Or the path to a public Rive asset
//     // src: '/public/example.riv',
//     canvas: document.getElementById("canvasPY3"),
//     autoplay: true,
//     stateMachines: "Animation",
// });

// new rive.Rive({
//     src: "assets/pythona.riv",
//     // Or the path to a public Rive asset
//     // src: '/public/example.riv',
//     canvas: document.getElementById("canvasPY4"),
//     autoplay: true,
//     stateMachines: "Animation",
// });

// new rive.Rive({
//     src: "assets/pythona.riv",
//     // Or the path to a public Rive asset
//     // src: '/public/example.riv',
//     canvas: document.getElementById("canvasPY"),
//     autoplay: true,
//     stateMachines: "Animation",
// });
