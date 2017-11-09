//TODO iterate over array, string, set, arguments


let seriesGenerator = function(powersOf, lessThan) {
    return {
        [Symbol.iterator]() {
            let current = powersOf;
            let done = false;
            return {
                next() {
                    current = current * powersOf;
                    if (current > lessThan) {
                        done = true;
                    }
                    return { done, value: current }
                }
            }
        }
    };
}
let exponentialSeriesOf2Iterator = {
    [Symbol.iterator]() {
        let current = 2;
        let done = false;
        return {
            next() {
                current = current * 2;
                if (current > 1025) {
                    done = true;
                }
                return { done, value: current }
            }
        }
    }
};

//TODO iterator generator

 //for (let n of seriesGenerator(3, 1000)) {
 //    console.log(n);
 //}

let exponentialSeriesOf2Generator = function*() {
    let current = 2;
    while(true) {
        yield current;
        current = current * 2;
    }
};

let generator = exponentialSeriesOf2Generator();
//
// for (let n of generator) {
//     if (n >= 1025) {
//         break;
//     }
//     console.log(n);
// }
//
//for (let n of exponentialSeriesOf2Generator()) {
//    if (n >= 4092) {
//        break;
//    }
//    console.log(n);
//}

//TODO generator reusablity

//TODO for students: implement Fibonacci generator/iterable


Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7, 'foo'];
iterable.foo = 'hello';

for (let i in iterable) {
     //console.log(i);
}

for (let i in iterable) {
    if (iterable.hasOwnProperty(i)) {
         //console.log(i);
    }
}

for (let i of iterable) {
     console.log(i);
}