function splitArray(arr) {
    let array = []
    //let j = 0
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i; j < arr.length - 2; j++) {
            if (!(array.includes(arr.slice(j, j+3)))){
                array.push(arr.slice(j, j+3))    
            }
        }    
        
        // array.push(arr.slice())
    }
    
    console.log(array);
}
// while (j < arr.length ) {
//     console.log('Inside ', j);
//     array.push(arr.slice(j, j+3))
//     j++
// }
// 
splitArray([50, 55, 57, 58, 60])