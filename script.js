const button = document.querySelector('#change-text');
const highlight = document.querySelector('.highlight');

let isHtmlCss = true;

button.addEventListener('click', () => {
  if (isHtmlCss) {
    highlight.textContent = 'JavaScript';
    isHtmlCss = false;
  } else {
    highlight.textContent = 'HTML and CSS';
    isHtmlCss = true;
  }
});
