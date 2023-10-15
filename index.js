// davaleba 1
// const replace = ([string, valueToReplace], valueToReplaceWith) =>{
//     return [string,...valueToReplaceWith, valueToReplace]
// }

// console.log(replace(['Djokovic','Goat'], ['is'])) es masivis da ori parametris shemtkhvevashi

function func(a,valueToReplace,valueToReplaceWith){
    a = valueToReplace
    console.log(a)
    if(a === valueToReplace){
      a = valueToReplaceWith
      console.log(a)
    }
     
}
let a;
func(a,'toReplace','toRaplaceWith')



// davaleba 2

let randomquote = 'Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you. ... It is necessary to fall in love if only to provide an alibi for all the random despair you are going to feel anyway. ... A great deal of creativity is about pattern recognition, and what you need to discern patterns is tons of data. Your mind collects that data by taking note of random details and anomalies easily seen every day: quirks and changes that, eventually, add up to insights.' ;

let capString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

let capWords = (str) => str.split(' ').map(capString).join(' ');

console.log(capWords(randomquote));


// davaleba 3

const tennPlayer = [
    {name: 'Roger Federer', grandSlam: 20},
    {name: 'Novak Djokovic', grandSlam: 24},
    {name: 'Rafael Nadal', grandSlam: 22},
    {name: 'andy Murray', grandSlam: 3}
];

tennPlayer.sort((s1,s2) => s2.grandSlam - s1.grandSlam);

console.table(tennPlayer)

