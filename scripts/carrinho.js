const COLLECTION = document.getElementsByClassName('remover');

COLLECTION[0].onclick = function() {
	document.getElementById('i1').remove();
};

COLLECTION[1].onclick = function() {
	document.getElementById('i2').remove();
};

const ITEMS = document.getElementsByClassName('item-img');
for( let idx = 0; idx < ITEMS.length; ++idx ) {
	ITEMS[idx].onclick = function() {
		window.location.href = 'item.html';
	};
}
