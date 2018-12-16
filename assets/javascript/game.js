
//create array of words
const category = ['Colombia', 'Serbia', 'Germany', 'Argentina'];
//choose word randomly
var ranWord = Math.floor(Math.random() * category.length);
var choosenWord = category[ranWord];
var underScore=[];
//creating counter..
var counter = 15;
//identify all letters in lowercased

choosenWord = choosenWord.toLowerCase();
console.log(choosenWord);


if($.inArray("Colombia", ranWord)> -1){
    $(".category").text("Contries!");

    console.log('the underscore arr: ' + underScore);

}
 
//create score based length of words

var generateUnderscore = function() {
    for (let i=0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
return underScore

//console.log(underScore);  
}
console.log(generateUnderscore);