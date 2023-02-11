for (let i of hot) {

  let box = document.createElement('div');
  box.classList.add('box');

  let spanOne = document.createElement('span');
  spanOne.classList.add('price');
  spanOne.innerText = "₺" + i.price;
  box.appendChild(spanOne);

  let image = document.createElement('img');
  image.setAttribute('src', i.image);
  image.setAttribute("alt", "картинка");
  box.appendChild(image);

  let name = document.createElement('h3');
  name.innerText = i.name;
  box.appendChild(name);

  let total = document.createElement('button');
  total.classList.add("btn");
  total.innerText = i.total;
  box.appendChild(total);

  document.getElementById("productContainerOne").appendChild(box)
}

for (let i of ice) {

  let box = document.createElement('div');
  box.classList.add('box');

  let spanOne = document.createElement('span');
  spanOne.classList.add('price');
  spanOne.innerText = "₺" + i.price;
  box.appendChild(spanOne);

  let image = document.createElement('img');
  image.setAttribute('src', i.image);
  image.setAttribute("alt", "картинка");
  box.appendChild(image);

  let name = document.createElement('h3');
  name.innerText = i.name;
  box.appendChild(name);

  let total = document.createElement('button');
  total.classList.add("btn");
  total.innerText = i.total;
  box.appendChild(total);

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

