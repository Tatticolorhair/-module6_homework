
let arr = [1,2,3,4,5,6,7,8,9, null, "ghjghj", false];
function getSumm(arr){
    let result1 = 0;
    let result2 = 0;
    let result3 = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            if (arr[i] %2 === 0) {
            result1 += 1;
            } else if (arr[i] % 2!== 0) {
            result2 +=1;
            }else {
                result3 +=1;
            }
        }else if (typeof arr[i] !== "number"){
            result3 +=1;
        } 
    }
    
    console.log("Количество четных эелементов:" +result1);
    console.log("Количество нечетных эелементов:" +result2);
    console.log("Количество остальных элементов:" +result3);
};

getSumm(arr);



