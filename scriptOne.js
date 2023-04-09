for (let i of hot) {

  let box = document.createElement('div');
  box.classList.add('box');
  box.setAttribute('data-id', i.id)

  let spanOne = document.createElement('span');
  spanOne.classList.add('price');
  spanOne.innerText = i.price + ' ₺';
  box.appendChild(spanOne);

  let spanTwo = document.createElement('span');
  spanTwo.classList.add('notes');
  spanTwo.innerText = i.notes;
  box.appendChild(spanTwo);

  let image = document.createElement('img');
  image.classList.add('product-img')
  image.setAttribute('src', i.image);
  image.setAttribute("alt", "картинка");
  box.appendChild(image);

  let name = document.createElement('h3');
  name.innerText = i.name;
  name.classList.add('item-title');
  box.appendChild(name);

  let appCounter = document.createElement('div')
  appCounter.classList.add("app_counter");

  /* счетчик */
  let divCounter = document.createElement('div');
  divCounter.className = 'items counter-wrapper';

  let countMinus = document.createElement('div');
  countMinus.classList.add('items__control');
  countMinus.setAttribute('data-action', 'minus');
  countMinus.setAttribute('onclick', '');
  countMinus.textContent = '-';
  divCounter.appendChild(countMinus);

  let countCurrent = document.createElement('div');
  countCurrent.classList.add('items__current');
  countCurrent.setAttribute('data-counter', '');
  countCurrent.textContent = 1;
  divCounter.appendChild(countCurrent);

  let countPlus = document.createElement('div');
  countPlus.classList.add('items__control');
  countPlus.setAttribute('data-action', 'plus');
  countPlus.setAttribute('onclick', '');
  countPlus.textContent = '+';
  divCounter.appendChild(countPlus);

  appCounter.appendChild(divCounter)

  /* счетчик */

  let buttonZakaz = document.createElement('button');
  buttonZakaz.classList.add("btn");
  buttonZakaz.setAttribute('data-cart', '');
  buttonZakaz.innerText = 'в корзину';

  appCounter.appendChild(buttonZakaz)
  box.appendChild(appCounter);

  document.getElementById("productContainerOne").appendChild(box)
}

for (let i of ice) {

  let box = document.createElement('div');
  box.classList.add('box');
  box.setAttribute('data-id', i.id)

  let spanOne = document.createElement('span');
  spanOne.classList.add('price');
  spanOne.innerText = i.price + ' ₺';
  box.appendChild(spanOne);

  let spanTwo = document.createElement('span');
  spanTwo.classList.add('notes');
  spanTwo.innerText = i.notes;
  box.appendChild(spanTwo);

  let image = document.createElement('img');
  image.classList.add('product-img')
  image.setAttribute('src', i.image);
  image.setAttribute("alt", "картинка");
  box.appendChild(image);

  let name = document.createElement('h3');
  name.innerText = i.name;
  name.classList.add('item-title');
  box.appendChild(name);

  let appCounter = document.createElement('div')
  appCounter.classList.add("app_counter");

  /* счетчик */
  let divCounter = document.createElement('div');
  divCounter.className = 'items counter-wrapper';

  let countMinus = document.createElement('div');
  countMinus.classList.add('items__control');
  countMinus.setAttribute('data-action', 'minus');
  countMinus.setAttribute('onclick', '');
  countMinus.textContent = '-';
  divCounter.appendChild(countMinus);

  let countCurrent = document.createElement('div');
  countCurrent.classList.add('items__current');
  countCurrent.setAttribute('data-counter', '');
  countCurrent.textContent = 1;
  divCounter.appendChild(countCurrent);

  let countPlus = document.createElement('div');
  countPlus.classList.add('items__control');
  countPlus.setAttribute('data-action', 'plus');
  countPlus.setAttribute('onclick', '');
  countPlus.textContent = '+';
  divCounter.appendChild(countPlus);

  appCounter.appendChild(divCounter)

  /* счетчик */

  let buttonZakaz = document.createElement('button');
  buttonZakaz.classList.add("btn");
  buttonZakaz.setAttribute('data-cart', '');
  buttonZakaz.innerText = 'в корзину';

  appCounter.appendChild(buttonZakaz)
  box.appendChild(appCounter);

  document.getElementById("productContainerTwo").appendChild(box)
}

for (let i of steps) {

  let box = document.createElement('div');
  box.classList.add('box');

  let image = document.createElement('img');
  image.setAttribute('src', i.image);
  image.setAttribute("alt", "картинка");
  box.appendChild(image);

  let title = document.createElement('h3');
  title.classList.add('heading');
  title.innerText = i.title + " ";

  let titleSpan = document.createElement('span');
  titleSpan.innerText = i.titleSpan;
  title.appendChild(titleSpan);

  box.appendChild(title);

  document.getElementById('steps').appendChild(box)
}

