function fun (a, b, c, ...restOfProvidedParameters) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
    console.log(restOfProvidedParameters); // [ 4, 5, 6 ]
}

fun (1, 2, 3, 4);