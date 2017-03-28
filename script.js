var title = document.getElementById('foto-title')
var cardTitle = document.querySelector('.card-title')

title.addEventListener('input', testText)


function testText() {
  var text = title.value
  cardTitle.innerText = text
}
