
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => { 
  container.classList.add('hover-left')  // mouse ile üzerine geldiğimizde container'e hover-left classını ekleyecek
})
left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left') // mouse ile üzerinden ayrıldığımızda hover-left classını silecek
})

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right')
})

right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right')
})