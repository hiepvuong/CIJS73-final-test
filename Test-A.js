// 1.
    let arr1 = [ 332, 3, -95, -2, -1234];
    let max = 0;
const adjacentElementsProduct = () => {
    console.log(max)
   for(let i = 0; i<arr1.length; i++){
       if( arr1[i]*arr1[i+1]>max) {
           max = arr1[i]*arr1[i+1]
           return max;
       }
   }
    console.log(max);
}

// 2.
    let arr2 = [60, 40, 55, 75, 60];
    let a = 0;
    let b = 0;
    let arr3 =[];

const alternatingSums = () => {
    console.log(arr3)
    for(let i = 0; i< arr2.length; i++) {
        if(i%2 == 0){
            a+=arr2[i]
        } else {
            b+=arr2[i]
        }
    }
    arr3.push(a, b)
    console.log(arr3)
}