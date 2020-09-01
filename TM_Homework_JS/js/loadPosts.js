import { log } from "./log.js";
import { createCommentTemplate, createPostsTemplate } from "./template.js";
import { status } from "./status.js";


const postBlock = document.getElementById('posts');

let posts = [];
let comments = [];


const getPosts = (url, token) => {
	fetch(url + token)
		.then(status)
		.then(json => {
			posts = json.data;
			posts.map(post => {
				postBlock.innerHTML += createPostsTemplate(post);

			});

			log('posts loaded')
		})
		.then(() => {
			let commentBtn = document.querySelectorAll('.post__btn');
			commentBtn.forEach(element => {
				element.addEventListener('click', e => {
					let currentPostId = e.target.parentNode.dataset.id;
					let commentBlock = e.target.parentNode.querySelector('.post__comments');
					let comment = e.target.parentNode.querySelector('.comment');
					!comment && getCommentsToPost(url, currentPostId, commentBlock);
					commentBlock.toggleAttribute('hidden');
				})
			});
		})
		.catch(e => {
			console.log('Error: ' + e.message);
			console.log(e.response);
		})
}



const getCommentsToPost = (url, id, inputNode) => {
	fetch(url + '/' + id + '/' + 'comments')
		.then(res => res.json())
		.then(json => {
			comments = json.data;
			comments.length ?
				comments.forEach(comment => {
					inputNode.innerHTML += createCommentTemplate(comment);
				}) : inputNode.innerHTML = `<p>No comments yet...</p>`;
		})
		.catch(e => {
			console.log('Error: ' + e.message);
			console.log(e.response);
		})
}

export { getPosts };