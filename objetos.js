function exercício1(){
    console.log("vou me comportar direitinho");
}

function bart_simpsom(n){
    var i = 0;
    while(i<n){
        exercício1();
        i = i + 1;
    }
}

function number(a){
    var i = 1;
    var soma = 0;
    while(i<=a){
        soma = soma + i;
        i = i + 1;
    }
    return soma;
}

function number(n, q){
    var i = 0;
    while(i<=q){
        if(i % n == 0){
            console.log(i);
        }
        i = i + 1;
    }

}

