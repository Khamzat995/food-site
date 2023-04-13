for (let i of reviews) {



  let box = document.createElement('div')
  box.classList.add('box')

  let image = document.createElement('img')
  image.setAttribute('src', i.image);
  image.setAttribute('alt', "картинка");
  box.appendChild(image);

  let name = document.createElement("h3")
  name.innerText = i.name;
  box.appendChild(name);

  let divStars = document.createElement('div');
  divStars.className = "stars";
  divStars.innerHTML += "<i>☆</i><i>☆</i><i>☆</i><i>☆</i><i>☆</i>";
  box.appendChild(divStars);

  let review = document.createElement('p');
  review.innerText = i.review;
  box.appendChild(review);

  document.getElementById("reviewsContainer").append(box)
}

