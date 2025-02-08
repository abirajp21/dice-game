var num1 = Math.floor(Math.random()*6)+1;
var num2 = Math.floor(Math.random()*6)+1;

console.log(num1);
console.log(num2);



var count = 0;
var interval =  setInterval(changeDice,75);

function changeDice(){
    count++;
    document.getElementById("dice1").setAttribute("src","images/dice"+( Math.floor(Math.random()*6)+1)+".png");
    document.getElementById("dice2").setAttribute("src","images/dice"+( Math.floor(Math.random()*6)+1)+".png");
    if(count == 10)
    {
        clearInterval(interval);
        document.getElementById("dice1").setAttribute("src","images/dice"+num1+".png");
        document.getElementById("dice2").setAttribute("src","images/dice"+num2+".png");
        if(num1===num2)
            document.getElementById("header").textContent = "Ties 🏳️ ";
        else if(num1>num2)
            document.getElementById("header").textContent = "🏆 Player1 Wins";
        else
            document.getElementById("header").textContent = "Player2 Wins 🏆";

    }
}





