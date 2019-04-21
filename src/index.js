import './scss/style.scss'

const div = document.querySelector('.test.transform')

div.onmouseover = ()=>{
  if (div.classList.contains('no-hover')) {
    div.classList.remove('no-hover')
  }
  div.classList.add('hover')
}
div.onmouseout = ()=>{
  if (div.classList.contains('hover')) {
    div.classList.remove('hover')
  }
  div.classList.add('no-hover')
}
