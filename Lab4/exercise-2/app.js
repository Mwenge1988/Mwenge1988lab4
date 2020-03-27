var comparer = require('./modules/comparer');
var {Add, Subtract } = require('./modules/calculator');

function run(x,y){
    if(comparer.AreNumberEqual(x,y)) {
        console.log(`adding two numbers ${x},${y} \n${Add(x,y)}`);

    }
    else console.log(`subtracting two numbers ${x},${y} \n${Subtract(x,y)}`);
}

run(5,2);