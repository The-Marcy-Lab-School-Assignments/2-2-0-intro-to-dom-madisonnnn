/** FEEDBACK: Great job using a function! Could we have made this function DRYer? 
 * Also we are missing our runner function here so make sure to include it in the future!
 */
const elementAdder = () => {
  const h1Adder = document.createElement('h1')
  h1Adder.id = 'main-heading'
  h1Adder.textContent = 'Hello World!'
  const pAdder = document.createElement('p')
  pAdder.id = 'main-text'
  pAdder.className = 'boring-text'
  pAdder.textContent = "Look, I'm some text!"
  document.body.appendChild(h1Adder);
  document.body.appendChild(pAdder);
}

elementAdder()