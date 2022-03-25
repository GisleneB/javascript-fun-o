function number (a, b){
    if(a > b){
        console.log('a é maior que b!');
        return 1;
    }
    if(a == b){
        console.log('a igual b');
        return 0;
    }
    if(a < b){
        console.log('a é menor que b');
        return -1;
    }
 } 


 function number (x, y){
   if(x % 2 == 0){
       console.log("valor de x é par!");
       return x;
   }

   else if(y % 2 == 0){
       console.log("valor de y é par...");
       return y;
   }
   else {
       console.log("fim da verificação!");
       return x + y;
   }

}