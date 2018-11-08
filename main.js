// główna część
const problemsAdd = []
const possibilities = ["Easyyyy! just love..", "You must take credit for it!", "You must go to to the Gym!", "Just hard work!"];
const btnAdd = document.querySelector('.addProblem');
const btnAdv = document.querySelector('.advice');
const inputProblem = document.querySelector('.problem');
const possibilitiesAdd = document.querySelector('.possibilities');
const div = document.querySelector('div');
const divsAnimation = document.querySelectorAll('div')



btnAdd.addEventListener('click', () => {
  const nameProblem = inputProblem.value;
  if (nameProblem) {
    problemsAdd.push(nameProblem)
  } else {
    alert("really?!\n\n You don't have problem!?\n\n Write Your problem...");
    return
  }
  inputProblem.value = ""
  console.log(nameProblem);

})

const adviceResult = () => {
  const namePas = possibilitiesAdd.value;
  if (problemsAdd > "" && namePas) {
    possibilities.push(namePas);
    showResult()
  } else if (problemsAdd > "" && namePas === "") {
    alert("really?!?\n\n You don't have idea!?\n\n Write Your idea.. ")
  } else alert(" 1.Write Your problem..\n\n 2.Write Your idea..  ")
  possibilitiesAdd.value = "";
}

btnAdv.addEventListener('click', adviceResult)

const showResult = () => {
  const indexName = (Math.floor(Math.random() * possibilities.length));
  const indexNameA = (Math.floor(Math.random() * problemsAdd.length));
  div.textContent = `hmm.. ${problemsAdd[indexNameA]} so..  ${possibilities[indexName]}`
  console.log(indexName);
}



// add key enter for button 'advice!'
const enterKey = (e) => {
  if (e.keyCode === 13) {
    showResult(e);
    adviceResult(e);
    console.log("działa")
  } else return
}


possibilitiesAdd.addEventListener('keydown', enterKey)
// do analizy^^^ nie działa tak jak trzeba 



const welcomeTextAnimation = () => {
  divsAnimation.forEach((div) => {
    div.classList.add("active");
  })

}
setTimeout(welcomeTextAnimation, 2000)