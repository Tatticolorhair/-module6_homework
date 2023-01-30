function sum(argFunc, argFunc2){
    let result = argFunc() + argFunc2();
    return result
};

function argFunc(){
    return 7;
};

function argFunc2(){
    return 8;
};

const resultFunc = sum(argFunc, argFunc2);
console.log(resultFunc);

