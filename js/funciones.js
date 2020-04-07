var i;

function ocultarBoton(){

    elemento= document.getElementById('BotonverMas');

   
    if(i=== undefined || i==0){
        elemento.style.display = 'none';
        console.log("se oculto");
        i= 1;
    }else{
        elemento.style.display = '';
        i=0;
    }
}


function Cerrarotros(Elemento, numero){

    var ValorACerrar;
    var Contador= 0 ;
    var ElementoActual;

    ElementoActual = Elemento;
    Contador= Contador + numero;
    if(Contador > 1){

        if($('#'+ ValorACerrar).hasClass('collapse show')){
            
        }

    }else{
        ValorACerrar = Elemento
    }

   
    if($('#DiagnosBoton').hasClass('collapse show'))
    {
        console.log("se cerro")
        }else{
            console.log("se abrio")
        }

        }

 
    
 






