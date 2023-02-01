function controlVariable(){
    console.log('control');
}

function first (){
    console.log('i am the first');
}
function second() {
    console.log('second one');
}
function third(){
    console.log('third type of log');
}
/*step 1*/
function monday(){
    receivesAFunction(parameter);
}

function receivesAFunction(parameter) {
    controlVariable();
    parameter();
};
/*end Step 1*/


parameterStuff(()=> {
    console.log('STUFF STUFF STUFF');
});

function returnsANamedFunction(){
    return third;
}
function returnsAnAnonymousFunction(){
    return function () {
        console.log(`Nom nom nom, this is delicious!`);
      };

}
