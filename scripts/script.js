const button_edit = document.querySelector('.profile__button_type_edit');
const button_exit_edit = document.querySelector('.popup_edit .popup__button-exit');
const button_add = document.querySelector('.profile__button_type_add');
const button_exit_add = document.querySelector('.popup_add .popup__button-exit');
const popup_edit = document.querySelector('.popup_edit');
const popup_add = document.querySelector('.popup_add');
const profile_name = document.querySelector('.profile__name');
const profile_description = document.querySelector('.profile__description');
const popup_input_firstname = document.querySelector('.popup_edit .popup__form input[name=firstname]');
const popup_input_description = document.querySelector('.popup_edit .popup__form input[name=description]');
const popup_input_name_img = document.querySelector('.popup_add .popup__form input[name=name_img]');
const popup_input_src_img = document.querySelector('.popup_add .popup__form input[name=src_img]');
const popup_form_edit = document.querySelector('.popup_edit .popup__form');
const popup_form_add = document.querySelector('.popup_add .popup__form');
const popup_img = document.querySelector('.popup_img');
const popup_title = document.querySelector('.popup__title');
const popup_image= document.querySelector('.popup__img');
const button_exit2 = document.querySelector('.popup_img .popup__button-exit2')


/*Первичное заполнение имени и профессии при открытии страницы*/
const p_name = 'Жак-Ив Кусто';
const description = 'Исследователь океана';
profile_name.textContent = p_name;
profile_description.textContent = description;
//
const list_elements = document.querySelector('.elements');
const list_element = document.querySelector('#element_list').content;

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
  popup_image.src = linkImg;
  popup_title.textContent = NameImg;
  popup_image.alt = NameImg ;
  changePopup(popup_img);
}

//Создание карточки
function createCard(linkCard, nameCard) {
  const element = list_element.querySelector('.element').cloneNode(true);
  element.querySelector('.element__img').src = linkCard ;
  element.querySelector('.element__img').alt = nameCard ;
  element.querySelector('.element__title').textContent = nameCard;
  //Лайк
  const ellike = element.querySelector('.element__like');
  ellike.addEventListener('click',() => changeLike(ellike));
  //Delete
  const deleteButton = element.querySelector('.element__trash');
  deleteButton.addEventListener('click', () => delCard(deleteButton));
  //Открытие картинки
  const clickImg = element.querySelector('.element__img');
      clickImg.addEventListener('click', () => openImg(clickImg.src, clickImg.alt));
  return element;
}
//Вывод карточек
function showCards(){
  for (let i = 0; i < initialCards.length; i++) {
    list_elements.append(createCard(initialCards[i].link, initialCards[i].name));
  }
}

// Редактирование профиля
function SubmitFormEdit (evt) {
  evt.preventDefault();                    
  profile_name.textContent = popup_input_firstname.value;
  profile_description.textContent = popup_input_description.value;
  changePopup(popup_edit);
}

// Добавление новой карточки
function SubmitFormAdd (evt) {
  evt.preventDefault();     
  initialCards.unshift({name: popup_input_name_img.value, link: popup_input_src_img.value});
  list_elements.prepend(createCard(initialCards[0].link, initialCards[0].name));
  changePopup(popup_add);
  popup_input_name_img.value = '';
  popup_input_src_img.value = '';
}

//Обработка событий
button_edit.addEventListener('click', function() {
  popup_input_firstname.value = profile_name.textContent;
  popup_input_description.value = profile_description.textContent;
  changePopup(popup_edit);
});

button_exit_edit.addEventListener('click', () => changePopup(popup_edit));
button_add.addEventListener('click',  () => changePopup(popup_add));
button_exit_add.addEventListener('click', () => changePopup(popup_add));
button_exit2.addEventListener('click', () => changePopup(popup_img));
popup_form_edit.addEventListener('submit', SubmitFormEdit);
popup_form_add.addEventListener('submit', SubmitFormAdd);
showCards();


