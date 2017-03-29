var titleInput = document.getElementById('foto-title');
var captionInput = document.getElementById('foto-caption');
var fileInput = document.getElementById('file');
var saveButton = document.getElementById('save');
var cardContainer = document.querySelector('main');

// Event Listeners
addListeners()
defaultText()
saveButton.addEventListener('click', addCard)
titleInput.addEventListener('input', buttonToggle)
captionInput.addEventListener('input', buttonToggle)
fileInput.addEventListener('change', buttonToggle)


// Global Functions
function orderFavorites () {
  var favoriteButtons = document.querySelectorAll('.favorite');
  var favoriteArr = [];

  // Get a list of the cards
  for (var i = 0; i < favoriteButtons.length; i++) {
    favoriteArr.push(favoriteButtons[i]);
  };

  favoriteArr = favoriteArr.sort(function(a , b) {
    if (a.id == 'favorited') {
      return -1;
    } else {
      return 1;
    };
  });

  for (var i = 0; i < favoriteArr.length; i++) {
    var cardLoop = favoriteArr[i].closest('.card')
    cardContainer.insertBefore(cardLoop, favoriteArr[favoriteArr.length - 1].closest('.card'))
  };
};



// Manage default text
function defaultText() {
  var currentDefaultText = document.getElementsByClassName('default-text')
  var cardCount = document.getElementsByClassName('card').length

  if (cardCount < 1 && currentDefaultText.length < 1) {
    createDefault()
  } else {
    removeDefault(currentDefaultText)
  }
}

function createDefault() {
  var newDefaultText = document.createElement('h3');
  newDefaultText.textContent = 'Create your own photo album! Add images using the inputs above';
  newDefaultText.className ='default-text';
  cardContainer.appendChild(newDefaultText);
}

function removeDefault(currentDefaultText) {
  for (var i = 0; i < currentDefaultText.length; i++){
  currentDefaultText[i].remove();
  };
}


function addListeners() {
  var deleteButtons = document.querySelectorAll('.delete');
  var favoriteButtons = document.querySelectorAll('.favorite');

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteCard)
  }

  for (var i = 0; i < favoriteButtons.length; i++) {
    favoriteButtons[i].addEventListener('click', favoriteCard)
    favoriteButtons[i].addEventListener('click', orderFavorites)
  }
}

function buttonToggle () {
var photoFile = fileInput.files[0]
  if (titleInput.value === '' || captionInput.value === '') {
    saveButton.disabled = true;
  } else if (photoFile == undefined || photoFile.type !== 'image/jpeg' && photoFile.type !== 'image/gif') {
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
  }
}

function deleteCard() {
  this.closest('.card').remove();
  defaultText()
}

function favoriteCard() {
  if (this.getAttribute('src') == 'assets/favorite-active.svg') {
    this.removeAttribute('id')
    this.setAttribute('src', 'assets/favorite.svg');
    this.closest('.card').style.backgroundColor = 'white';
  } else {
    this.id = 'favorited';
    this.setAttribute('src', 'assets/favorite-active.svg');
    this.closest('.card').style.backgroundColor = '#E26D5A';
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


  //Add Listeners
  addListeners()
  defaultText()
};

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
var img = document.querySelector('.card-photo');
var modalImg = document.getElementById("img01");
//   img.onclick = function() {
//   modal.style.display = "block";
//   modalImg.src = this.src;
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
