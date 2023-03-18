const cats=["Milo", "Otis", "Garfield"];
    console.log(cats);


function destructivelyAppendCat (Ralph){
    cats.push ("Ralph");
    return cats;
}

 function destructivelyPrependCat (Bob){
    cats.unshift('Bob');
 }


 function destructivelyRemoveLastCat(){
    cats.pop();
 }



 function destructivelyRemoveFirstCat(){
    cats.shift();
 }
 

function appendCat (){
    return [...cats, "Broom"]

 }

function prependCat(){
    return["Arnold", ...cats]
}


function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1)
}

