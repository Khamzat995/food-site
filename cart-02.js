// Div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper');

// для отправки на почту
let productArray = [];

// Отслеживаем клик на странице
window.addEventListener('click', function (event) {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.hasAttribute('data-cart')) {

		// Находим карточку с товаром, внутри котрой был совершен клик
		const card = event.target.closest('.box');

		// Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			price: card.querySelector('.price').innerText,
			/* notes: card.querySelector('.notes').innerText, */
			counter: card.querySelector('[data-counter]').innerText,
		};

		// Проверять если ли уже такой товар в корзине
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		// Если товар есть в корзине
		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
			// Если товара нет в корзине

			// Собранные данные подставим в шаблон для товара в корзине
			const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										  <div class="cart-item__details">
											<div class="items--small counter-wrapper">
												<div class="items__control knopki" data-action="minus" onclick="">-</div>
												<span class="cart-price-span">Кол-во</span>
												<div class="items__current cart-current" data-counter="">${productInfo.counter}</div>
												<span class="cart-price-span">по</span>
												<div class="items__control knopki" data-action="plus" onclick="">+</div>
											</div>
											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>
											<buttom class="btn-delete"><img class="korzina" src="images/korzina_musor.png"></buttom>
										</div>
									</div>
								</div>
							</div>`;

			// Отобразим товар в корзине
			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);


			/* Сделать объект для письма */
			let obj = {};

			obj.title = productInfo.title;
			obj.counter = productInfo.counter;
			obj.price = productInfo.price;
			productArray.push(obj);
		}

		console.log(productArray);

		// Сбрасываем счетчик добавленного товара на "1"
		card.querySelector('[data-counter]').innerText = '1';

		// Отображение статуса корзины Пустая / Полная
		toggleCartStatus();

		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();
	}
});

document.querySelector('.order').addEventListener('submit', (e) => {
	e.preventDefault();
	let self = e.currentTarget;
	let formData = new FormData(self);

	let name = self.querySelector('[name="Имя"]').value;
	let tel = self.querySelector('[name="Телефон"]').value;

	formData.append('Товары', JSON.stringify(productArray));
	formData.append('Имя', name);
	formData.append('Телефон', tel);

	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log('Отправлено')
			}
		}
	}
	xhr.open('POST', 'mail.php', true);
	xhr.send(formData);

	self.reset();

});

/* проверка валидации */

let inputName = document.querySelector("[name='Имя']");
let inputPhone = document.querySelector("[name='Телефон']");


document.getElementById('zakaz').addEventListener('click', function () {

	if (inputName.value === "") {
				alert("Введите Ваше имя")
	}
	else if (inputPhone.value === "") {
				alert("Введите Ваше имя и телефон")
	}
	else {
		window.location.href = 'https://khamzat.site/xam/thank-you.html'
	}
});


