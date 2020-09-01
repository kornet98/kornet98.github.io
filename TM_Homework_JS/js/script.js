
import { log } from "./log.js";
import { closeModalFunc, openModal } from "./modal.js";
import { getPosts } from "./loadPosts.js";
import { status } from "./status.js";

log('start')


const requestPostsUrl = 'https://gorest.co.in/public-api/posts',
	token = '0655dce4ca8e31c2fae4f8d145ae2dec2af1e678a008fd6bf4ef71ba2e7830f9',
	accessToken = '?access-token=' + token,
	btnCreate = document.getElementById('create-btn');

getPosts(requestPostsUrl, accessToken)


let headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	'Authorization': 'Bearer ' + token
}

function RequestOptions(method, headers, obj) {
	this.method = method;
	this.headers = headers;
	this.body = JSON.stringify(obj);
}

function PostObj(title, user_id, body) {
	this.title = title;
	this.user_id = user_id;
	this.body = body;
}

/*-----------------Modal----------------------*/


const modalLink = document.querySelector('.modal-link');
const closeModal = document.querySelectorAll('.close-modal');
const inputTitle = document.getElementById('title');
const inputId = document.getElementById('id');
const inputText = document.getElementById('text');


modalLink.addEventListener('click', () => openModal());


if (closeModal.length > 0) {
	closeModal.forEach(el => {
		el.addEventListener('click', () => closeModalFunc())
	});
};


const createPost = (url, createPostOptions) => {
	fetch(url, createPostOptions)
		.then(status)
		.then(json => {
			console.log(json);
			let code = json.code
			if (code < 400) {
				closeModalFunc();
				alert('Your post was sucssesfuly created!')
			} else { alert('Something went wrong!') }
		})
		.catch(e => {
			console.log('Error: ' + e.message);
			console.log(e.response);
		})
}


btnCreate.addEventListener('click', e => {
	e.preventDefault();

	let createObj = new PostObj(inputTitle.value, inputId.value, inputText.value)
	let createOptions = new RequestOptions('POST', headers, createObj);

	createPost(requestPostsUrl, createOptions)

	inputTitle.value = '';
	inputId.value = '';
	inputText.value = '';

})


log('end')