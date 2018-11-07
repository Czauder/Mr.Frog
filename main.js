// główna część
const problemAdd = []
const possibilities = ["Just love..", "You must take credit for it!", "You must go to to the Gym!", "just hard work!"]
const btnAdd = document.querySelector('.addProblem')
const btnAdv = document.querySelector('.advice')


btnAdd.addEventListener('click', () => {
  const inputProblem = document.querySelector('.problem')
  const nameProblem = inputProblem.value;
  problemAdd.push(nameProblem)
  console.log(inputProblem.value);
  inputProblem.value = ""

})

btnAdv.addEventListener('click', () => {
  const possibilitiesAdd = document.querySelector('.possibilities')
  const namePas = possibilitiesAdd.value;
  possibilities.push(namePas)
  console.log(possibilitiesAdd.value);
  possibilitiesAdd.value = ""
})



btnAdv.addEventListener('click', () => {
  const indexName = (Math.floor(Math.random() * possibilities.length));
  const indexNameA = (Math.floor(Math.random() * problemAdd.length));

  console.log(indexName);
  const div = document.querySelector('div')

  div.textContent = `hmm.. ${problemAdd[indexNameA]} so..  ${possibilities[indexName]}`
})

// próba podłączenie enter

// add key enter for 'advice!'
const input = document.querySelector('.possibilities')

const giveSolution = (e) => {
  if (e.keyCode === 13) {
    console.log("działa")
  } else return

}


input.addEventListener('keydown', giveSolution)