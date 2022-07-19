const panels = document.querySelectorAll('.panel');

let lastClickPanel = document.querySelector('.panels');

function toggleOpen() {
  if (this !== lastClickPanel) {
    lastClickPanel.classList.remove('open');
    lastClickPanel = this;
  }
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));