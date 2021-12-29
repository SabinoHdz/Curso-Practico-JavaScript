//Código del Cuadrado
console.group("Cuadrados");
const perimetroCuadrado=(lado)=>lado*4;
const  areaCuadrado=(lado)=>lado**2;
console.groupEnd();
//Código del Triangulo
console.group("Triangulos");
const perimetroTriangulo=(lado1 ,lado2,base)=>lado1+lado2+base;
const areaTriangulo=(base,altura)=>(base*altura)/2;
console.groupEnd();
//Código del Circulo
console.group("Circulos");

const diametroCirculo=(radio)=>radio*2;
const PI=Math.PI;
console.log(`PI : ${PI}`);

//Circunferencia
const perimetroCirculo=(radio)=>{
    const diametro=diametroCirculo(radio);
    return diametro*PI;
}
const areaCirculo=(radio)=>(radio**2)*PI;
console.groupEnd();


const calcularPerimetroCuadrado=()=>{
    var valor=document.getElementById('inputCuadrado').value;
    var resultado_cuadrado=document.getElementById('resultado_cuadrado');

    var resultado=perimetroCuadrado(valor);

  resultado_cuadrado.innerHTML="El perimetro es: "+resultado+"cm";
}


const calcularAreaCuadrado=()=>{
    var resultado_cuadrado=document.getElementById('resultado_cuadrado');

    var valor=document.getElementById('inputCuadrado').value;
    var resultado=areaCuadrado(valor);
    resultado_cuadrado.innerHTML="El área es: "+resultado+"cm2";
}

const calcularPerimetroTriangulo=()=>{
   var lado1=document.getElementById('lado_1').value;
   var lado2=document.getElementById('lado_2').value;
   var base=document.getElementById('base').value;
   var resultadoTriangulo=document.getElementById('resultado_triangulo');
   var operacion=perimetroTriangulo( Number(lado1),Number(lado2),Number(base));
    resultadoTriangulo.innerHTML="El perimetro es: "+operacion+"cm";
}

const calcularAreaTriangulo=()=>{
    var base=document.getElementById('base').value;
    var altura=document.getElementById('altura').value;
    var resultadoTriangulo=document.getElementById('resultado_triangulo');
    var operacion =areaTriangulo(base,altura);
    resultadoTriangulo.innerHTML="El área es: "+operacion+"cm2";
}
const calcularPerimetroCirculo=()=>{
    var radio=document.getElementById('radio').value;
    var resultadoTriangulo=document.getElementById('resultado_radio');
    var operacion=perimetroCirculo(radio);
     resultadoTriangulo.innerHTML="El perimetro es: "+operacion+"cm";
 }

const calcularAreaCirculo=()=>{
    var radio=document.getElementById('radio').value;
    var resultadoTriangulo=document.getElementById('resultado_radio');
    var operacion =areaCirculo(radio);
    resultadoTriangulo.innerHTML="El área es: "+operacion+"cm2";
}