window.addEventListener('mousemove', function (e) {
  var cursor = document.querySelector('.cursor')
  cursor.style.left = e.clientX + 'px'
  cursor.style.top = e.clientY + 'px'
  // if (e.offsetX > 50 && e.offsetY > 50) {
  //   cursor.classList.add('into')
  // } else {
  //   cursor.classList.remove('into')
  // }
})