const expandBtn = document.querySelector('.expand-btn'),
	shrinkBtn = document.querySelector('.shrink-btn'),
	wrapper = document.querySelector('.wrapper'),
	title = document.querySelector('.title'),
	content = document.querySelector('.content'),
	head = document.querySelector('.head'),
	sendBtn = document.querySelector('.form-btn'),
	textArea = document.querySelector('.form-textarea'),
	form = document.querySelector('.form');
	
const elems = [
	shrinkBtn,
	wrapper,
	title,
	content,
	head,
	sendBtn,
	textArea,
	form
]


expandBtn.addEventListener('click', e => {
	e.preventDefault();
	elems.forEach(item => {
		item.classList.add('active');
	})
})

shrinkBtn.addEventListener('click', e => {
	e.preventDefault();
	elems.forEach(item => {
		item.classList.remove('active');
	})
})