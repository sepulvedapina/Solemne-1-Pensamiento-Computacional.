function setup() {
  createCanvas(365,452);
}

function draw() {
  background(255,200,200);
  
  //colores
  amarillo=color(189,184,106);
  beige=color(198,183,158);
  dorado=color(191,126,29);
  rojo=color(208,50,31);
  celeste=color(103,161,232)
  celestreclaro=color(190,209,215);
  sangre=color(170,25,42);
  cafe=color(81,60,42);
  moka=color(159,129,87);
  cafesuki=color(104,56,29);
  azul=color(24,52,123);
  
//parte superior
  //rectangulo izquierdo esquina
  fill(celeste)
  quad(0,0,90,0,90,20,0,20)

  //cuadrado central
  fill(amarillo)
  quad(90,0,260,0,260,20,90,20)
  
  //triangulo central
  strokeWeight(2)
  stroke(0,0,0)
  fill(celeste)
  quad(111,0,242,0,260,19,90,19)
  
  //rectangulo derecho inferior
  noStroke();
  quad(260,0,365,0,365,20,260,20)
  
  //rectangulo pequeño inferior
  fill(moka)
  quad(260,13,365,14,365,20,260,20)
  
  
  
  
  
  
  
  //cuadrado y triangulo izquierdo
 //rectangulo
 noStroke();
  fill(amarillo); 
  quad(0,19,91,19,91,156,0,156);
 //triangulo
  fill(beige);
  triangle(89,19,91,156,27,86);

  
  //cuadrado con circulo
  //rectangulo
  fill(dorado);
  quad(90,19,260,19,262,156,90,156)

  //circulo
  stroke(amarillo)
  strokeWeight(3)
  fill(rojo)
  ellipse(172,87,128,128);
  
  //circulo interior 
  strokeWeight(3)
  stroke(255,255,255)
  fill(celeste)
 ellipse(173,87,88,88);
  
  //cuadrado con triangulo derecho
  noStroke()
  fill(beige)
  quad(260,19,365,19,365,156,260,156);
  
  fill(amarillo)
  triangle(260,19,332,87,260,156);
 

  
  
  
  //cuadrado segundo con triangulo izquierdo
  fill(sangre)
  quad(0,156,93,156,94,302,0,302);
  
 //segundo triangulo izquierdo
  fill(rojo);
  triangle(33,235,90,155,90,300);
  
  //segundo cuadrado con circulo
 //cuadrado
  stroke(0,0,0)
  strokeWeight(2)
  fill(celeste)
  quad(90,157,260,156,260,302,91,302)
  
  //circulo 1
 strokeWeight(7)
  stroke(0,0,0)
  fill(dorado)
  ellipse(176,232,138,138)
  
  //segundo circulo
  strokeWeight(10);
  stroke(cafe)
  fill(dorado)
  ellipse(176,232,100,100)
 
  //tercer circulo 
  strokeWeight(12)
  stroke(sangre)
  fill(rojo)
  ellipse(176,231,70,70);
  
  //rectangulo con triangulo derecho 2
  //rectangulo derecho 2
  noStroke();
  fill(sangre)
  quad(260,155,365,155,365,302,260,302)
  //triangulo derecho 2
  noStroke();
  fill(rojo)
  triangle(260,155,335,231,260,300);

  
  
  
  
  
  //tercer rectangulo con triangulo 
  //rectangulo izquierdo 3
  fill(cafe);
  quad(0,302,93,302,95,432,0,432);
  
  //triangulo 3 izquierdo
  fill(moka);
  triangle(90,302,90,432,33,367);
  
  //cuadrado 3 con circulo
  //cuadrado
  fill(rojo)
  quad(90,302,260,302,260,432,90,432)
  
  //circulo 1
  fill(beige)
  ellipse(177,367,125,125);
  
  stroke(celeste)
  strokeWeight(10)
  fill(0,0,0);
  ellipse(178,367,84,84)
  
  //rectangulo y triangulo 3 derecho
  //rectangulo derecho 3 
  noStroke()
  fill(cafesuki)
  quad(260,301,365,301,365,432,260,432)
  
  //tringulo 3 derecho
  fill(dorado);
  triangle(260,301,336,360,260,433)
  
  
  
  
  //fila final 
  //rectangulo final celeste
  fill(celeste);
  quad(0,432,90,432,90,452,0,452)
  
  //rectangulo celeste
  fill(azul);
  quad(0,432,90,432,90,443,0,441)
  
  //rectangulo central final
  //rectangulo central
  fill(moka)
  quad(90,432,260,432,260,452,90,452)
  
  //triangulo central final
  fill(celeste)
  quad(90,432,260,432,240,452,116,452)
  
  //rectangulo derecho final
  fill(celeste)
  quad(260,432,365,432,365,452,260,452)

  //linea azul 
  fill(azul)
  quad(260,432,365,432,365,439,260,439)
}