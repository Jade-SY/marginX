window.addEventListener('mousemove', function (e) {
  const cursor = document.querySelector('.cursor')
  cursor.style.left = e.clientX + 'px'
  cursor.style.top = e.clientY + 'px'

  if (e.offsetX > 20 && e.offsetY > 20) {
    cursor.classList.add('into')
  } else {
    cursor.classList.remove('into')
  }
})