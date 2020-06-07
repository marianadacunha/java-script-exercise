// This is an array which contains two objects inside. The objects have various pieces of metadata about an album. It also has a nested 
// "formats" array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in 
// a property, which has a key-value format. In the example below, "artist": "Daft Punk" is a property that has a key of "artist" and a 
// value of "Daft Punk". You will need to place a comma after every object in the array, unless it is the last object in the array.

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  ,
  {
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
];