import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  const isEven = (n) => n % 2 === 0;
  const filteredArray = numbersArray.filter(x => isEven(x))

  filteredArray.forEach(el => appendLitoUl(el, ul))
  console.log(filteredArray)

  function appendLitoUl(content, ul) {
    const liElement = document.createElement('li')
    liElement.textContent = content
    ul.appendChild(liElement)
  }
});
