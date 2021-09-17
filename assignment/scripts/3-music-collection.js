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
console.log(collection);
addToCollection('How to Design a Nervous Breakdown','The Anniversary','2003');
console.log(collection);

// Super frustrated but happier now - Worked 3 hours on this and it was just a Stupid synax error in my first line - Lesson Learned.
