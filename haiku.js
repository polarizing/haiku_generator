console.log("Node starting ...");

var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');
var syllabelsArr = [];

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}
function formatData(data){    
   var lines = data.toString().split("\n"),
       lineSplit
   var syllablesArr = [[], [], [], [], [], [], [], [], [], []];

   lines.forEach(function(line){    
    lineSplit = line.split("  ");    
    // console.log("The word " + lineSplit[0] + " has this phoneme layout: " + lineSplit[1]);
    // console.log(lineSplit[0]);
    // console.log(lineSplit[1]);
    // console.log(typeof(lineSplit[1]));
    if (typeof(lineSplit[1]) !== 'undefined') {
    	phonemeCount = lineSplit[1].split(' ').filter(function(phoneme) {if (phoneme.match(/\d/)) { return true; }}).length;

    	switch (phonemeCount) {
    		case 0: syllablesArr[0].push(lineSplit[0]);
    				break;
    		case 1: syllablesArr[1].push(lineSplit[0]);
    				break;
    		case 2: syllablesArr[2].push(lineSplit[0]);
    				break;
    		case 3: syllablesArr[3].push(lineSplit[0]);
    				break;
    		case 4: syllablesArr[4].push(lineSplit[0]);
    				break;
    		case 5: syllablesArr[5].push(lineSplit[0]);
    				break;
     		case 6: syllablesArr[6].push(lineSplit[0]);
    				break;   		
       		case 7: syllablesArr[7].push(lineSplit[0]);
    				break;		
    		case 8: syllablesArr[8].push(lineSplit[0]);
    				break;		
    		case 9: syllablesArr[9].push(lineSplit[0]);
    				break;		
    	}
    }
  });
	return syllablesArr;
}

var syllablesArr = formatData(cmudictFile);


// simple 5, 7, 5 structure
function createSimpleHaiku(structure, syllabelsArr){
  var arrOfWords;
  return structure.map(function(lines){
    return lines.map(function(syls){
      arrOfWords = syllabelsArr[syls];
      return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    }).join(' ');
  }).join('\n');
}

console.log('[5], [7], [5] structure.')
console.log(createSimpleHaiku([[5],[7],[5]], syllablesArr));
console.log('[2, 3], [1, 3, 3], [3, 2] structure.')
console.log(createSimpleHaiku([[2, 3],[1, 3, 3],[3, 2]], syllablesArr));