function fun (aParam, bParam, cParam, dParam) {
    console.log(aParam); // 'a'
    console.log(bParam); // 'b'
    console.log(cParam); // 'c'
    console.log(dParam); // 'd'
}

const arr = [ 'b', 'c' ];

// Spread operator
fun('a', ...arr, 'd' );