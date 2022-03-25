//Porque o 10 é maior que i

function tabuada(a){
    for(i=1;i<=10;i=i+1){
        console.log(a + " x " + i + " = " + a * i);
    }   
}

function divisivel(i, o){
    if (i % o == 0){
        return true
    }
    else{
        return false
    }
}

function ehPrimo(c){
    if (c % c == 0 && c % 1 == 0){
        return true
    }
    else{ //emplementar com laço de repetição
        return false
    } 
} 



se numero = primo entao
    retorna verdadeiro
senao
    retorna falso

% - retorna resto da divisao

/ - realisa uma divisao