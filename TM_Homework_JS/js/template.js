const getFullDate = (str) => {
	let months = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"];

	let myDate = new Date(str);
	let fullDate = months[myDate.getMonth()] + " " + myDate.getDate() +
		", " + myDate.getFullYear();

	return fullDate;
}

const createPostsTemplate = data => {
	return `
    <div class="post" data-id="${data.id}">
        <div class="post__data">
            <h2 class="post__title">
                ${data.title}
				</h2>
				<p class="post__date">
                ${getFullDate(data.updated_at)}
            </p>
            <p class="post__body">
                ${data.body}
            </p>
        </div>
        <button class="post__btn">Comments</button>
        <div class="post__comments comments" hidden></div>
    </div>
    `
};
const createCommentTemplate = data => {
	return `
    <div class="comment" data-id="${data.id}">
		<div class="comment__picture"></div>
	 	<div class="comment__data">
            <h6 class="comment__author">
                ${data.name}
            </h6>
            <p class="comment__body">
                ${data.body}
            </p>
        </div>
    </div>
    `
};


export { createCommentTemplate, createPostsTemplate };