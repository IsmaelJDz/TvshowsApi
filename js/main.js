const URLapi = 'http://api.tvmaze.com/shows';
let element = document.getElementById('TvShow__Mainshows');
let array = [];


const $formId = document.getElementById('TvShow__form');

function searchShows (e) {
	e.preventDefault();
	let form = new FormData($formId);
	let valInput = form.get('showsandpeople')
	
}

function getData() {
	if (array.length == 0) {
		fetch(URLapi)
			.then(res => res.json())
			.then(data => {
				localStorage.data = JSON.stringify(data);
				let printData = data.slice(0, 15).map(show => {
					return `<div class="TvShow__itemShow">
										<img src="${show.image.medium}" alt="img">
										<p>${show.name}</p>
									</div>`;}).join('');
				element.innerHTML = printData;	
			})
			.catch((err)=> {
				console.log(err)
			})
		//console.log('array vacio')
	}
	else {
		//console.log('array con datos')
	}
}

if (!localStorage.shows) {
	getData(URLapi)
}
else{
	getData(JSON.parse(localStorage.shows))
}

//getData(URLapi) 

$formId.addEventListener('submit', searchShows)





