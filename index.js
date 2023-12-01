/*
    index.html을 위한 js 파일
*/

function add(a,b, c = 10) {
    if (C !== undefined) {
        return a+b+c;
    }
    return a+b;
}

function multiply(a, b) {
    return a*b;
}

function substract (a, b) {
    if (a > b) {
        return a-b;
    } else {
        return b-a;
    }
}