console.log('***** Music Collection *****')

let collection = {};
// Created object literal with empty array
console.log(collection);
// Console log newly created object literal

function addToCollection (albumTitle, albumArtist, albumYearPublished){
// Created new function called addToCollection with 3 input parameters called title,artist, and yearPublished

let album = {
  title:albumTitle,
  // Create new object 'title' and added to collection array
  artist:albumArtist,
  // Create new object 'artitst' and added to collection array
  yearPublished:albumYearPublished
  // Create new object 'yearPublished' and added to collection array

}

  console.log('in addToCollection', albumTitle, albumArtist, albumYearPublished);
  // Console log to show we are in 'addToCollection'

  collection.push(album);

  return collection;

}



addToCollection('Let It Be','The Replacements','1985');


console.log(collection);

'Let It Be','The Replacements','1985'
