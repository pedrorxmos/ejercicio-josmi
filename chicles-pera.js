function showDeliveryCost(deliveryCost){
	document.getElementById('delivery-cost').innerText = deliveryCost + '€';
}

function showTotal(totalPrice){
	document.getElementById('total-price').innerText = totalPrice + '€';
}

function showBadZipFormat() {
	console.error('El código zip introducido no es válido')
}

window.addEventListener('load', () => {
	const priceWithoutDeliveryCost = 5;
	const calculateDeliveryButton = document.getElementById('calculate-delivery');

	calculateDeliveryButton.addEventListener('click', () => {
		const zipCode = document.getElementById('js-zip-code').value;
		console.log(zipCode);

		// ADD LOGIC HERE
		const deliveryCost = Math.round((priceWithoutDeliveryCost / +`0.${+zipCode}`) * 100) / 100;	
		showDeliveryCost(deliveryCost);
		showTotal(deliveryCost + priceWithoutDeliveryCost);

	})
});