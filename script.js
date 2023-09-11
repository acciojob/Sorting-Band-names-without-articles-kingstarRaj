
// suppose an array that contains a list of popular tourise spots
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let arr = [];
let mapp = {};

for(let i = 0; i<tousristSpots.length; i++){
	let word = touristSpots.split(" ");
	let finalstr = "";

	//iterating over the word array
	for(let i = 0 ; i<word.length; i++){
		let currentword = word[i].toLowerCase();

		//addinng word without article to final string
		if(currentword !== 'an' || currentword !== 'the' || currentword !== 'a'){
			finalstr += currentword + " ";
		}
	}

	let artclelessstr = finalstr.trim();
	mapp[artclelessstr] = touristSpots[i];
	arr.push(artclelessstr);
}

arr.sort();

for(let i = 0; i<arr.length; i++){
	touristSpots[i] = mapp[arr[i]]; 
}

console.log(touristSpots);
