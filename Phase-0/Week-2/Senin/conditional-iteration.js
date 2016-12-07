//Bilangan GANJIL dan GENAP
for (var i=1; i<=100; i++){
  if (i % 2 === 0){
    console.log ( i + " GENAP")
    }
      else{
        console.log ( i + " GANJIL")
   }
}

// Pengulangan kelipatan 3 dengan pertambahan indeks 2
for (var i=1; i<=100; i+=2){
  if(i % 3 === 0){
    console.log(i +" Kelipatan 3");
  }
      else{
        console.log( i + "")
    }
}

// Pengulangan kelipatan 6 dengan pertambahan indeks 5
for (var i=1; i<=100; i+=5){
  if(i % 6 === 0){
    console.log(i +" Kelipatan 6");
  }
    else{
      console.log( i + "")
    }
}

// Pengulangan kelipatan 10 dengan pertambahan indeks 9
for (var i=1; i<=100; i+=9){
  if(i % 10 === 0){
    console.log(i +" Kelipatan 10");
  }
    else{
      console.log( i + "")
    }
}
