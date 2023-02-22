/* const btnClose = document.getElementById('btnClose') */
// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {
	/* let counterCifra = document.getElementById('counter-cifra');
	counterCifra.textContent = '0' */

	// Объявляем переменную для счетчика
	let counter;

	// Проверяем клик строго по кнопкам Плюс либо Минус
	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		// Находим обертку счетчика
		const counterWrapper = event.target.closest('.items');
		// Находим див с числом счетчика
		counter = counterWrapper.querySelector('[data-counter]');


	}

	// Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	// Проверяем является ли элемент по которому был совершен клик кнопкой Минус
	if (event.target.dataset.action === 'minus') {

		// Проверяем чтобы счетчик был больше 1
		if (parseInt(counter.innerText) > 1) {
			// Изменяем текст в счетчике уменьшая его на 1
			counter.innerText = --counter.innerText;
		} else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
			// Проверка на товар который находится в корзине
			/* console.log('IN CART!!!!'); */
			// Удаляем товар из корзины

			event.target.closest('.cart-item').remove();

			// Отображение статуса корзины Пустая / Полная
			toggleCartStatus();

			// Пересчет общей стоимости товаров в корзине
			calcCartPriceAndDelivery();
		}

		/* btnClose.addEventListener("click", (e) => {
			event.target.closest('.cart-item').remove();
		}) */
		/* counterCifra.textContent = counter.length */

	}


	// Проверяем клик на + или - внутри коризины
	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();
	}
});