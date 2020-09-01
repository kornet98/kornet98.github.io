const modalForm = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');


const closeModalFunc = () => {
	overlay.classList.remove('active');
	modalForm.classList.remove('open');
	body.classList.remove('lock');
}
const openModal = () => {
	overlay.classList.add('active');
	modalForm.classList.add('open');
	body.classList.add('lock');
}


export { closeModalFunc, openModal };
