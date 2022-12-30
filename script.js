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
const button_exit2 = document.querySelector('.popup_img .popup__button-exit2')


let p_name = 'Жак-Ив Кусто';
let description = 'Исследователь океана';

profile_name.textContent = p_name;
profile_description.textContent = description;
popup_input_firstname.value = p_name;
popup_input_description.value = description;

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

const list_elements = document.querySelector('.elements');
const list_element = document.querySelector('#element_list').content;
const initialCardElements = [];
//popup_opened
function initialCard() {
  if (initialCardElements.length<1) {
    for (let i = 0; i < initialCards.length; i++) {
      const element = list_element.querySelector('.element').cloneNode(true);
      element.querySelector('.element__img').src = initialCards[i].link ;
      element.querySelector('.element__title').textContent = initialCards[i].name;
      element.querySelector('.element__like').addEventListener('click', function(event){
        event.target.classList.toggle('element__like-img');
      })
      initialCardElements[i] = element;
      const deleteButton = element.querySelector('.element__trash');
      deleteButton.addEventListener('click', function(event){
        const listElDel = deleteButton.closest('.element');
        listElDel.remove();
      })
      const clickImg = element.querySelector('.element__img');
      clickImg.addEventListener('click', function(event){
        popup_img.querySelector('.popup__img').src = initialCards[i].link;
        popup_img.querySelector('.popup__title').textContent = initialCards[i].name;
        popup_img.classList.toggle('popup_opened');
      })

    }
    for (let i = 0; i < initialCardElements.length; i++) {
      list_elements.append(initialCardElements[i]); 
    } 
   }
  else {
    const element = list_element.querySelector('.element').cloneNode(true);
    element.querySelector('.element__img').src = initialCards[0].link ;
    element.querySelector('.element__title').textContent = initialCards[0].name;
    element.querySelector('.element__like').addEventListener('click', function(event){
      event.target.classList.toggle('element__like-img');
    })
    const deleteButton = element.querySelector('.element__trash');
    deleteButton.addEventListener('click', function(event){
      const listElDel = deleteButton.closest('.element');
      listElDel.remove();
    })
    initialCardElements.unshift(element);
    list_elements.prepend(element); 
  }
}

initialCard();

button_edit.addEventListener('click', function() {
  popup_edit.classList.toggle('popup_opened');
});

button_exit_edit.addEventListener('click', function() {
  popup_edit.classList.toggle('popup_opened');
});

button_add.addEventListener('click', function() {
  popup_add.classList.toggle('popup_opened');
});

button_exit_add.addEventListener('click', function() {
  popup_add.classList.toggle('popup_opened');
});

button_exit2.addEventListener('click', function() {
  popup_img.classList.toggle('popup_opened');
});

function formSubmitHandler (evt) {
  evt.preventDefault();                    
  profile_name.textContent = popup_input_firstname.value;
  profile_description.textContent = popup_input_description.value;
  popup_edit.classList.toggle('popup_opened');
}
popup_form_edit.addEventListener('submit', formSubmitHandler);

function formSubmitHandlerAdd (evt) {
  evt.preventDefault();     
  initialCards.unshift({name: popup_input_name_img.value, link: popup_input_src_img.value});
  initialCard();
  popup_add.classList.toggle('popup_opened');
}
popup_form_add.addEventListener('submit', formSubmitHandlerAdd);

