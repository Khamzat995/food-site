for (let i of pervoe) {

  let box = document.createElement('div')
  box.classList.add('box')

  let imageOne = document.createElement('img')
  imageOne.classList.add('image');
  imageOne.setAttribute('src', i.imageOne);
  imageOne.setAttribute('alt', "картинка");
  box.appendChild(imageOne);

  let titleOne = document.createElement("h3")
  titleOne.classList.add('anime');
  titleOne.innerText = i.titleOne;

  let subTitle = document.createElement('span');
  subTitle.innerText = i.subTitle;
  titleOne.appendChild(subTitle);
  box.appendChild(titleOne);

  let content = document.createElement('div');
  content.classList.add('content');

  let imageTwo = document.createElement('img');
  imageTwo.classList.add('icon-plate');
  imageTwo.setAttribute('src', i.imageTwo);
  imageTwo.setAttribute('alt', "картинка");

  content.appendChild(imageTwo);

  let titleTwo = document.createElement('h3');
  titleTwo.innerText = i.titleTwo;
  content.appendChild(titleTwo);

  let description = document.createElement('p');
  description.innerText = i.description;
  content.appendChild(description);

  /* let imageThree = document.createElement('span');
  imageThree.classList.add('qave');

  let imgSpan = document.createElement('img');
  imgSpan.setAttribute("src", i.imageThree);
  imgSpan.setAttribute("alt", "картника");
  imageThree.appendChild(imgSpan);

  content.appendChild(imageThree); */

  box.appendChild(content);

  document.getElementById("boxOne").appendChild(box)
}

for (let i of vtoroe) {
  let box = document.createElement('div');
  box.classList.add('box');

  let imageOne = document.createElement('img');
  imageOne.classList.add('image');
  imageOne.setAttribute('src', i.imageOne);
  imageOne.setAttribute('alt', "картинка");
  box.appendChild(imageOne);

  let titleOne = document.createElement("h3")
  titleOne.classList.add('anime');
  titleOne.innerText = i.titleOne;

  let subTitle = document.createElement('span');
  subTitle.innerText = i.subTitle;
  titleOne.appendChild(subTitle);
  box.appendChild(titleOne);

  let content = document.createElement('div');
  content.classList.add('content');

  let imageTwo = document.createElement('img');
  imageTwo.classList.add('icon-plate');
  imageTwo.setAttribute('src', i.imageTwo);
  imageTwo.setAttribute('alt', "картинка");

  content.appendChild(imageTwo);

  let titleTwo = document.createElement('h3');
  titleTwo.innerText = i.titleTwo;
  content.appendChild(titleTwo);

  let description = document.createElement('p');
  description.innerText = i.description;
  content.appendChild(description);

  /* let imageThree = document.createElement('span');
  imageThree.classList.add('qave');

  let imgSpan = document.createElement('img');
  imgSpan.setAttribute("src", i.imageThree);
  imgSpan.setAttribute("alt", "картинка");
  imageThree.appendChild(imgSpan);

  content.appendChild(imageThree); */

  box.appendChild(content);

  document.getElementById("boxTwo").appendChild(box)
}

for (let i of salates) {
  let box = document.createElement('div');
  box.classList.add('box');

  let imageOne = document.createElement('img');
  imageOne.classList.add('image');
  imageOne.setAttribute('src', i.imageOne);
  imageOne.setAttribute('alt', "картинка");
  box.appendChild(imageOne);

  let titleOne = document.createElement("h3");
  titleOne.classList.add('anime');
  titleOne.innerText = i.titleOne;

  let subTitle = document.createElement('span');
  subTitle.innerText = i.subTitle;
  titleOne.appendChild(subTitle);
  box.appendChild(titleOne);

  let content = document.createElement('div');
  content.classList.add('content');

  let imageTwo = document.createElement('img');
  imageTwo.classList.add('icon-plate');
  imageTwo.setAttribute('src', i.imageTwo);
  imageTwo.setAttribute('alt', "картинка");

  content.appendChild(imageTwo);

  let titleTwo = document.createElement('h3');
  titleTwo.innerText = i.titleTwo;
  content.appendChild(titleTwo);

  let description = document.createElement('p');
  description.innerText = i.description;
  content.appendChild(description);

  /*  let imageThree = document.createElement('span');
   imageThree.classList.add('qave');
 
   let imgSpan = document.createElement('img');
   imgSpan.setAttribute("src", i.imageThree);
   imgSpan.setAttribute("alt", "картинка");
   imageThree.appendChild(imgSpan);
 
   content.appendChild(imageThree); */

  box.appendChild(content);

  document.getElementById("boxThree").appendChild(box);
}

for (let i of vipechka) {
  let box = document.createElement('div');
  box.classList.add('box');

  let imageOne = document.createElement('img');
  imageOne.classList.add('image');
  imageOne.setAttribute('src', i.imageOne);
  imageOne.setAttribute('alt', "картинка");

  box.appendChild(imageOne);

  let titleOne = document.createElement("h3");
  titleOne.classList.add('anime');
  titleOne.innerText = i.titleOne;

  let subTitle = document.createElement('span');
  subTitle.innerText = i.subTitle;
  titleOne.appendChild(subTitle);
  box.appendChild(titleOne);

  let content = document.createElement('div');
  content.classList.add('content');

  let imageTwo = document.createElement('img');
  imageTwo.classList.add('icon-plate');
  imageTwo.setAttribute('src', i.imageTwo);
  imageTwo.setAttribute('alt', 'картинка');
  content.appendChild(imageTwo);

  let titleTwo = document.createElement('h3');
  titleTwo.innerText = i.titleTwo;
  content.appendChild(titleTwo);

  let description = document.createElement('p');
  description.innerText = i.description;
  content.appendChild(description);

  /* let imageThree = document.createElement('span');
  imageThree.classList.add('qave');

  let imgSpan = document.createElement('img');
  imgSpan.setAttribute("src", i.imageThree);
  imgSpan.setAttribute('alt', 'картинка')
  imageThree.appendChild(imgSpan);

  content.appendChild(imageThree); */

  box.appendChild(content);

  document.getElementById("boxFour").appendChild(box);
}

for (let i of sladosti) {
  let box = document.createElement('div');
  box.classList.add('box');

  let imageOne = document.createElement('img');
  imageOne.classList.add('image');
  imageOne.setAttribute('src', i.imageOne);
  imageOne.setAttribute('alt', "картинка");

  box.appendChild(imageOne);

  let titleOne = document.createElement("h3");
  titleOne.classList.add('anime');
  titleOne.innerText = i.titleOne;

  let subTitle = document.createElement('span');
  subTitle.innerText = i.subTitle;
  titleOne.appendChild(subTitle);
  box.appendChild(titleOne);

  let content = document.createElement('div');
  content.classList.add('content');

  let imageTwo = document.createElement('img');
  imageTwo.classList.add('icon-plate');
  imageTwo.setAttribute('src', i.imageTwo);
  imageTwo.setAttribute("alt", "картинка");
  content.appendChild(imageTwo);

  let titleTwo = document.createElement('h3');
  titleTwo.innerText = i.titleTwo;
  content.appendChild(titleTwo);

  let description = document.createElement('p');
  description.innerText = i.description;
  content.appendChild(description);

  /*  let imageThree = document.createElement('span');
   imageThree.classList.add('qave');
 
   let imgSpan = document.createElement('img');
   imgSpan.setAttribute("src", i.imageThree);
   imgSpan.setAttribute("alt", "картинка");
   imageThree.appendChild(imgSpan);
 
   content.appendChild(imageThree); */

  box.appendChild(content);

  document.getElementById("boxFive").appendChild(box)
}
