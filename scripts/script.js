const buttonEdit = document.querySelector('.profile__button_type_edit');
const buttonExitEdit = document.querySelector('.popup_edit .popup__button-exit');
const buttonAdd = document.querySelector('.profile__button_type_add');
const buttonExitAdd = document.querySelector('.popup_add .popup__button-exit');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupInputFirstname = document.querySelector('.popup_edit .popup__form input[name=firstname]');
const popupInputDescription = document.querySelector('.popup_edit .popup__form input[name=description]');
const popupInputNameImg = document.querySelector('.popup_add .popup__form input[name=name_img]');
const popupInputSrcImg = document.querySelector('.popup_add .popup__form input[name=src_img]');
const popupFormEdit = document.querySelector('.popup_edit .popup__form');
const popupFormAdd = document.querySelector('.popup_add .popup__form');
const popupImg = document.querySelector('.popup_img');
const popupTitle = document.querySelector('.popup__title');
const popupImage= document.querySelector('.popup__img');
const buttonExit2 = document.querySelector('.popup_img .popup__button-exit2')

/*Первичное заполнение имени и профессии при открытии страницы*/
const pName = 'Жак-Ив Кусто';
const description = 'Исследователь океана';
profileName.textContent = pName;
profileDescription.textContent = description;
//
const listElements = document.querySelector('.elements');
const listElement = document.querySelector('#element_list').content;

// Открытие модальных окон
function changePopup(nameObj) {
  nameObj.classList.toggle('popup_opened');
}
//Нажатие лайка
function changeLike(nameObj){
  nameObj.classList.toggle('element__like-img');
}
//Нажатие корзинки
function delCard(nameObj){
  const listElDel = nameObj.closest('.element');
  listElDel.remove();
}

//Открытие картинки
function openImg(linkImg, NameImg){
  popupImage.src = linkImg;
  popupTitle.textContent = NameImg;
  popupImage.alt = NameImg ;
  changePopup(popupImg);
}

//Создание карточки
function createCard(linkCard, nameCard) {
  const element = listElement.querySelector('.element').cloneNode(true);
  const elementImg = element.querySelector('.element__img');
  const elementTitle= element.querySelector('.element__title');
  elementImg.src = linkCard ;
  elementImg.alt = nameCard ;
  elementTitle.textContent = nameCard;
  //Лайк
  const ellike = element.querySelector('.element__like');
  ellike.addEventListener('click',() => changeLike(ellike));
  //Delete
  const deleteButton = element.querySelector('.element__trash');
  deleteButton.addEventListener('click', () => delCard(deleteButton));
  //Открытие картинки
  elementImg.addEventListener('click', () => openImg(linkCard, nameCard));
  return element;
}
//Вывод карточек
function showCards(){
  for (let i = 0; i < initialCards.length; i++) {
    listElements.append(createCard(initialCards[i].link, initialCards[i].name));
  }
}

// Редактирование профиля
function SubmitFormEdit (evt) {
  evt.preventDefault();                    
  profileName.textContent = popupInputFirstname.value;
  profileDescription.textContent = popupInputDescription.value;
  changePopup(popupEdit);
}

// Добавление новой карточки
function SubmitFormAdd (evt) {
  evt.preventDefault();     
  listElements.prepend(createCard(popupInputNameImg.value, popupInputSrcImg.value));
  changePopup(popupAdd);
  popupInputNameImg.value = '';
  popupInputSrcImg.value = '';
}

//Обработка событий
buttonEdit.addEventListener('click', function() {
  popupInputFirstname.value = profileName.textContent;
  popupInputDescription.value = profileDescription.textContent;
  changePopup(popupEdit);
});

buttonExitEdit.addEventListener('click', () => changePopup(popupEdit));
buttonAdd.addEventListener('click',  () => changePopup(popupAdd));
buttonExitAdd.addEventListener('click', () => changePopup(popupAdd));
buttonExit2.addEventListener('click', () => changePopup(popupImg));
popupFormEdit.addEventListener('submit', SubmitFormEdit);
popupFormAdd.addEventListener('submit', SubmitFormAdd);
showCards();


