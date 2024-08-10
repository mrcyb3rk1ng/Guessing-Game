const showCompScore = document.querySelector(".showCompScore");
const showYourScore = document.querySelector(".showYourScore");

const fruitList = ["None", "Apple", "Mango", " Orange", "Banana", "Pineapple", "Lychee"];

let compScore = 1;
let yourScore = 1;

let value = "";

const gameHandler = (value, self) => {
   
   const comp_score = compScore < 10 ? "0" + compScore : compScore;
   const your_score = yourScore < 10 ? "0" + yourScore : yourScore;
   
   value = value;
   
   const randomIndex = Math.floor(Math.random() * 6) + 1;
   const compValue = fruitList[randomIndex];
   
   if (value == randomIndex) {
      yourScore++;
      showYourScore.textContent = your_score;
      
      setTimeout(() => {
         alert("You have won!");
      },100);
      
   } else {
      compScore++;
      showCompScore.textContent = comp_score;
      
      setTimeout(() => {
         alert(` You have lost!
 The Computer selected "${compValue}".`);
      },100);
      
   }
};