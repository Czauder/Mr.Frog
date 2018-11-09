const problems = []
const possibilities = ["Easyyyy! just love..", "You must take credit for it!", "You must go to to the Gym!", "Just hard work!"];
const btnAddProblem = document.querySelector('.addProblem');
const btnAddAdvice = document.querySelector('.advice');
const inputProblem = document.querySelector('.problem');
const inputPossibilities = document.querySelector('.possibilities');
const div = document.querySelector('div');
const divsAnimation = document.querySelectorAll('div')



btnAddProblem.addEventListener('click', () => {
  const nameProblem = inputProblem.value;
  if (nameProblem) {
    problems.push(nameProblem)
  } else {
    alert("really?!\n\n You don't have problem!?\n\n Write Your problem...");
    return
  }
  inputProblem.value = ""
  console.log(nameProblem);
})

const adviceResult = () => {
  const namePas = inputPossibilities.value;
  if (problems > "" && namePas) {
    possibilities.push(namePas);
    showResult()
  } else if (problems > "" && namePas === "") {
    alert("really?!?\n\n You don't have idea!?\n\n Write Your idea.. ")
  } else alert(" 1.Write Your problem..\n\n 2.Write Your idea..  ")
  inputPossibilities.value = "";
}

btnAddAdvice.addEventListener('click', adviceResult)

const showResult = () => {
  const indexName = (Math.floor(Math.random() * possibilities.length));
  const indexNameA = (Math.floor(Math.random() * problems.length));
  div.textContent = `hmm.. ${problems[indexNameA]} so..  ${possibilities[indexName]}`
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


inputPossibilities.addEventListener('keydown', enterKey)




const welcomeTextAnimation = () => {
  divsAnimation.forEach((div) => {
    div.classList.add("active");
  })

}
setTimeout(welcomeTextAnimation, 2000)