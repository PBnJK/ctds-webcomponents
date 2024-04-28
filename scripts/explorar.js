const COLLECTION = document.getElementsByClassName('fake-img');

for( let idx = 0; idx < COLLECTION.length; ++idx ) {
	COLLECTION[idx].style.setProperty(
		'background-color',
		"#" + ( ( 1 << 24 ) * Math.random() | 0 ).toString(16)
	);
}

function gotoItem() {
	window.location.href = 'item.html';
}

const ITEMS = document.getElementsByClassName('item');

for( let idx = 0; idx < ITEMS.length; ++idx ) {
	ITEMS[idx].onclick = gotoItem;
}
