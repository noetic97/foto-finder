var titleInput = document.getElementById('foto-title');
var captionInput = document.getElementById('foto-caption');
var fileInput = document.getElementById('file');
var saveButton = document.getElementById('save');
var cardContainer = document.querySelector('main');



//Event Listeners
saveButton.addEventListener('click', function() {
  addCard();
})


var favButton = document.querySelector('.favorite')
favButton.addEventListener('click', function(e) {
  // if e.target.
  var favImage = e.target.attributes.src.value

  if (favImage == 'assets/favorite-active.svg') {
    favButton.setAttribute('src', 'assets/favorite.svg');
  } else {
    favButton.setAttribute('src', 'assets/favorite-active.svg');
  }
})



function deleteCard() {
  var deleteButton = document.querySelectorAll('.delete');
}


function favoriteCard(){
  var favoriteButton = document.querySelectorAll('.favorite');


  for (var i = 0; i < favoriteButton.length; i++){
    console.log(trashButton[i]);
  }
}


function Card(title, photo, caption) {
  this.title = title;
  this.photo = photo;
  this.caption = caption;
  this.favorite = false;
};

function addCard() {
  //Define element contents
  var newCard = new Card(titleInput.value, 'photos/' + fileInput.files[0].name, captionInput.value);
  var cardStructure = document.createElement('section');
  var title = document.createElement('h3');
  var photo = document.createElement('img');
  var caption = document.createElement('h4');
  var buttonArea = document.createElement('div');
  var deleteIcon = document.createElement('img');
  var favoriteIcon = document.createElement('img');

  //Set Attributes and Text
  photo.setAttribute('src', newCard.photo);
  deleteIcon.setAttribute('src', 'assets/delete.svg');
  favoriteIcon.setAttribute('src', 'assets/favorite.svg');

  title.textContent = newCard.title;
  caption.textContent = newCard.caption;

  //Add Class Names to each card element
  cardStructure.className = 'card';
  title.className = 'card-title';
  photo.className = 'card-photo';
  caption.className = 'card-caption';
  buttonArea.className = 'trash-like';
  deleteIcon.className = 'icon delete';
  favoriteIcon.className = 'icon favorite';


  //need to clean up this section
  cardStructure.appendChild(title);
  cardStructure.appendChild(photo);
  cardStructure.appendChild(caption);
  cardStructure.appendChild(buttonArea);
  buttonArea.appendChild(deleteIcon);
  buttonArea.appendChild(favoriteIcon);
  cardContainer.appendChild(cardStructure);
};
