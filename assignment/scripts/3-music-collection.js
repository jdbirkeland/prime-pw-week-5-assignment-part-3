console.log('***** Music Collection *****')

let collection = [];
// Created object literal with empty array
console.log(collection);
// Console log newly created object literal

function addToCollection (title,artist,yearPublished){
// Created new function called addToCollection with 3 input parameters called title,artist, and yearPublished
console.log('in addToCollection', title,artist,yearPublished);
// Console log to show we are in 'addToCollection'
    let album = {
    title: title,
    // Create new object 'title' and added to collection array
    artist: artist,
    // Create new object 'artitst' and added to collection array
    yearPublished: yearPublished}
    // Create new object 'yearPublished' and added to collection array

    collection.push(album);
    // pushing added album up to collection
    return collection;
    // end addToCollection
}

addToCollection('Let It Be','The Replacements','1985');
console.log(collection[0]);
addToCollection('Designing a Nervous Breakdown','The Anniversary','2000');
console.log(collection[1]);
addToCollection('Reconstruction Site', 'The Weakerthans', '2003')
console.log(collection[2]);
addToCollection('Born to Die','Lana Del Rey', '2012')
console.log(collection[3]);
addToCollection('Blone','Frank Ocean','2016')
console.log(collection[4]);
addToCollection('...is a Real Boy', 'Say Anything', '2003')
console.log(collection[5]);
console.log(collection);

function showCollection(album){
      for (let i=0; i<album.length; i++){
        console.log(album[i]);
      }
        console.log(album.length);
        console.log(collection[0].title, 'by', collection[0].artist,', published in ', collection[0].yearPublished);
        console.log(collection[1].title, 'by', collection[1].artist,', published in ', collection[1].yearPublished);
        console.log(collection[2].title, 'by', collection[2].artist,', published in ', collection[2].yearPublished);
        console.log(collection[3].title, 'by', collection[3].artist,', published in ', collection[3].yearPublished);
        console.log(collection[4].title, 'by', collection[4].artist,', published in ', collection[4].yearPublished);
        console.log(collection[5].title, 'by', collection[5].artist,', published in ', collection[5].yearPublished);
}
showCollection(collection);
