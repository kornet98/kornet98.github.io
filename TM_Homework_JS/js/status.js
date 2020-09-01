const status = response => {
	if (response.status >= 200 && response.status < 300) {
		return response.json();
	} else {
		console.log(response.status);
		let error = new Error(response.statusText);
		error.response = response;
		throw error
	}
}


export { status };