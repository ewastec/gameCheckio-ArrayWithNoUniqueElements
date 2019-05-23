var array1 = [1,2,3,1,3];
var array2 = [10, 9, 10, 5, 10, 9];

var after1 = new Array();
var after2 = new Array();
 var len = array1.length;
for(let i = 0; i < len; i++){

    if(array1.indexOf(firstElement) >= 0){
        // if the number repeats itself in an array 1
        // put it to the new array 2
        after1.push(firstElement);
    }else{
        // the number doesn't repeat itself in array 1
        // check if it repeats itself in array 2

        if(after1.indexOf(firstElement) >= 0){
            // if the number repeats itself in an array 2
            // put it to the array 2
            after1.push(firstElement);
        }
    }
}
console.log('after1: ' + after1);

