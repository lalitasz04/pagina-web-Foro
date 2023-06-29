function showContent() {
  var overlay = document.querySelector('.overlay');
  overlay.classList.add('show-overlay');
  document.body.classList.add('show-content');
}

function closeOverlay(event) {
  var overlay = document.querySelector('.overlay');
  if (event.target === overlay) {
    overlay.classList.remove('show-overlay');
    document.body.classList.remove('show-content');
  }
}