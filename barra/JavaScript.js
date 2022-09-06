
// window.addEventListener("load",()=>{
    //     requestAnimationFrame(update)
    // });
// function update() {
//     progressBar.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
//     requestAnimationFrame(update)
// }

const progressBar = document.querySelector(".progress-bar");
const botonDeEnvio = document.querySelector(".boton-de-envio");
const donaciones = document.querySelector(".donaciones");
const botonMeta = document.querySelector(".btn-meta");
const cantidadDonaciones = document.querySelector(".cantidad-donaciones");
const cantidadMeta = document.querySelector(".meta");
const visible= document.querySelector(".visible");

let numeroPorcentaje = 0;
let meta = 0;
let cantidadDeDonaciones = 0;

    botonMeta.addEventListener("click",(e)=>{
        e.preventDefault();
        meta=parseInt(cantidadMeta.value);
        if(meta>=1){
            cantidadDonaciones.innerHTML = `0/${meta}`;
            visible.innerHTML="";
            document.querySelector(".invisible").style.display = "block";
            cantidadMeta.style.display="none";
            botonMeta.style.display = "none";

        }else if(meta<=0){
            visible.innerHTML="No has seleccionado una meta valida"
        }else{
            visible.innerHTML="No seleccionaste ninguna meta"
        }
    });



botonDeEnvio.addEventListener("click",(e)=>{
    e.preventDefault();
    cantidadDeDonaciones+=parseInt(donaciones.value);
    numeroPorcentaje=(cantidadDeDonaciones*100)/meta;
    console.log(donaciones.value)
    if(numeroPorcentaje<=100){
        progressBar.style.width = `${numeroPorcentaje}%`;
        
    }
    else if(numeroPorcentaje>100){
        progressBar.style.width="100%"
    }
    document.querySelector(".numeroPorcentaje").innerHTML = Math.floor(numeroPorcentaje) + "%";
    cantidadDonaciones.innerHTML=`${cantidadDeDonaciones}/${meta}`
});

