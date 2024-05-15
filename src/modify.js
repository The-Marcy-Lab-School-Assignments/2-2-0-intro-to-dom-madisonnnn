const getMainHeadingText = () => {
  console.log(document.querySelector("h1#main-heading").textContent)
};

const getAllMainText = () => {
  const mainTextElements = document.querySelectorAll('.main-text');
  let combinedText = '';
  mainTextElements.forEach((element, index) => {
      combinedText += element.textContent.trim();
      if (index < mainTextElements.length - 1) {
          combinedText += ',';
      }
  });
  console.log(combinedText)
}

const setSubtitleText = () => {
  const text = document.querySelector("#subtitle")
  text.textContent = 'This is a subtitle!'
};

const modifyDivClassList = () => {
  const list = document.querySelector("#modify-classes");
  list.classList.remove("bad-class")
  list.classList.add("new-class");
};

const addH2 = () => {
  const ele = document.createElement('h2')
  ele.id = 'h2-test'
  ele.textContent = 'Another one!'
  document.body.append(ele)
};

const removeOldInfo = () => {
  const old = document.querySelector('#old-info')
  old.remove(old)
};

const makeAlphabet = () => {
  const alphabetList = document.querySelector('#alphabet');
  const numLetters = parseInt(alphabetList.dataset.numLetters);
  for (let i = 0; i < numLetters; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `${String.fromCharCode(65 + i)} is letter #${i + 1} in the alphabet`;    alphabetList.appendChild(listItem);
  }
};

const makeBio = () => {
  const bioHTML = `
    <h2 id=bio-heading>About Me</h2>
    <p>My name is Zo and I like learn cool new things</p>
    <h3 id=hobby-heading>My Hobbies</h3>
    <ul>
      <li>Running</li>
      <li>Reading</li>
      <li>Writing</li>
    </ul>`;
  const bioDiv = document.querySelector('#my-bio');
  bioDiv.innerHTML = bioHTML;
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
