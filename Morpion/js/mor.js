let colum = document.querySelectorAll('.col-4');
let joueur=[1,2];
let Compteur=0;


let one = document.querySelector('#c1');
let two = document.querySelector('#c2');
let three = document.querySelector('#c3');
let four = document.querySelector('#c4');
let five = document.querySelector('#c5');
let six = document.querySelector('#c6');
let seven = document.querySelector('#c7');
let eight = document.querySelector('#c8');
let nine = document.querySelector('#c9');
let currentCol;
for(let i = 0; i < colum.length; i++){
    currentCol = colum[i];
    currentCol.addEventListener('click', onCurrentImgClick);
    
    }
    

function checkVictory(){
    if(Compteur<1){
        return;
    }
            if((one.innerHTML === two.innerHTML && one.innerHTML === three.innerHTML)&& one.innerHTML!="" ||
                (four.innerHTML === five.innerHTML && four.innerHTML === six.innerHTML)&& four.innerHTML!="" ||
                (seven.innerHTML === eight.innerHTML && seven.innerHTML === nine.innerHTML)&& seven.innerHTML!="" ||
                (one.innerHTML === five.innerHTML && one.innerHTML === nine.innerHTML)&& one.innerHTML!="" || 
                (three.innerHTML === five.innerHTML && three.innerHTML === seven.innerHTML)&& three.innerHTML!="" || 
                (one.innerHTML === four.innerHTML && one.innerHTML === seven.innerHTML)&& one.innerHTML!="" ||
                (two.innerHTML === five.innerHTML && two.innerHTML === eight.innerHTML)&& two.innerHTML!="" ||
                (three.innerHTML === six.innerHTML && three.innerHTML === nine.innerHTML)&& three.innerHTML!=""){
                    
                    //  alert("victoir")
                    document.querySelector("#message").innerText="victoir"
                    colum.forEach(function(cel){
                        cel.removeEventListener('click',onCurrentImgClick)
                    })

            }
            else if(Compteur==9) {
                document.querySelector("#message").innerText="Match nul"
            }
        // if((seven.innerHTML === eight.innerHTML && seven.innerHTML === nine.innerHTML)==""){
        //     return;
        // }

    }
  
      
// for(let i = 0; i < colum.length; i++){
//     let currentCol = colum[i];
//     currentCol.addEventListener('click', onCurrentImgClick);
    
//     }
    

// let j1 = Compteur%2==0
// let j2 = Compteur%2==1

function onCurrentImgClick(event){
    
    console.log(Compteur)
    if(Compteur%2 == 0){
        //  joueur=joueur[0];
        // event.target.innerText='X'

        event.target.innerHTML='<img classe="croix" src="./img/croix.png" alt="">';
    }
    else if(Compteur%2 == 1){
        // joueur=joueur[1];
        // event.target.innerText="O"
        event.target.innerHTML='<img classe="rond" src="./img/rond.png" alt="">';
    }
    Compteur++;
    checkVictory();
}

//pour appuyer sur le bouton
let restarts=document.querySelector('.restart').onclick =function Start(){
    document.location.reload();
}



let pb;

