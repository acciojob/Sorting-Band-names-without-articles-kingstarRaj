// Suppose an array that contains a list of popular tourist spots
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let arr = [];
let mapp = {};

for (let i = 0; i < touristSpots.length; i++) {
  let words = touristSpots[i].split(" "); // Split the current spot into words
  let finalstr = "";

  // Iterating over the words array
  for (let j = 0; j < words.length; j++) {
    let currentWord = words[j].toLowerCase();

    // Adding words without articles to final string
    if (currentWord !== 'an' && currentWord !== 'the' && currentWord !== 'a') {
      finalstr += currentWord + " ";
    }
  }

  let articlelessStr = finalstr.trim();
  mapp[articlelessStr] = touristSpots[i];
  arr.push(articlelessStr);
}

arr.sort();

for (let i = 0; i < arr.length; i++) {
  touristSpots[i] = mapp[arr[i]];
}

console.log(touristSpots);
