var titleInput = document.getElementById('foto-title');
var captionInput = document.getElementById('foto-caption');
var fileInput = document.getElementById('file');
var saveButton = document.getElementById('save');
var cardTitle = document.querySelector('.card-title');
var cardPhoto = document.querySelector('.card-photo');
var cardCaption = document.querySelector('.card-caption');
var trashButton = document.querySelector('.delete');
var likeButton = document.querySelector('.favorite');
var card = document.querySelector('.card');
var newCard = {}
var cardContainer = document.querySelector('main');

saveButton.addEventListener('click', function () {
  cardPhoto.src = 'photos/' + fileInput.files[0].name;
  newCard = new Card(titleInput.value, 'photos/' + fileInput.files[0].name, captionInput.value)
  addCard(newCard)
});



//card constructor
function Card(title, photo, caption) {
  this.title = title;
  this.photo = photo;
  this.caption = caption;
  this.favorite = false;
};



function addCard(cardNew) {
  var cardStructure = document.createElement('section')
  cardStructure.className = "card"
cardContainer.appendChild(cardStructure, card)
};
