// function checkNumber(){
//     let num = document.getElementById("numberinput").value;
//     if((num % 2) == 0){
//         alert("The number is even");
//     }
//     else{
//         alert("The number is odd");
//     }
// }



function guessTheNumber(){
    let num = Math.floor(Math.random()*10)+1;
    let userNumber = document.getElementById("numberinput");
    let resultParagraph = document.getElementById("result");

    if(userNumber === num){
        resultParagraph.textContent = "You guessed the correct number!"
    }
    else{
        resultParagraph.textContent = `Wrong guess! The correct number was ${num}`
    }
}