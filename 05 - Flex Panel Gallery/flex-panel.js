const panels = document.querySelectorAll('.panel');

let lastClickPanel = document.querySelector('.panels');

function clickHandler() {
  if (this !== lastClickPanel) {
    lastClickPanel.classList.remove('open');
    lastClickPanel = this;
  }
  this.classList.toggle('open');
}

function activeHandler(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', clickHandler));
panels.forEach(panel => panel.addEventListener('transitionend', activeHandler));
