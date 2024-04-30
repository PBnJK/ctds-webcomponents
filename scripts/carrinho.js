const TOTAL = document.getElementById('total');
const CHECKOUT = document.getElementById('checkout');
const COLLECTION = document.getElementsByClassName('remover');

COLLECTION[0].onclick = function() {
	document.getElementById('i1').remove();

	if(document.getElementById('i2')) {
		total.innerText = 'TOTAL: R$2,99';
	} else {
		total.innerText = 'TOTAL: R$0,00';
		CHECKOUT.href = 'javascript:';
	}
};

COLLECTION[1].onclick = function() {
	document.getElementById('i2').remove();

	if(document.getElementById('i1')) {
		total.innerText = 'TOTAL: R$2,99';
	} else {
		total.innerText = 'TOTAL: R$0,00';
		CHECKOUT.href = 'javascript:';
	}
};

const ITEMS = document.getElementsByClassName('item-img');
for( let idx = 0; idx < ITEMS.length; ++idx ) {
	ITEMS[idx].onclick = function() {
		window.location.href = 'item.html';
	};
}
