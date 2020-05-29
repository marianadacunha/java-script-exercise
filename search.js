var values = [3, 14, 22, 39, 44, 61, 73, 99, 111, 126];

function search(number) {
    for (i = 0; i < 6; i++) {
        if (number == values[i]) {
            return i;
        }
    }
    return -1;
}


function binarySearch(number) {
    let start, end;
    let middle;
    let steps = 0;
    start = 0;
    end = 9;
    while (start <= end) {
        middle = parseInt((start + end)/2);
        steps = steps + 1;
        if (number == values[middle]) {
            console.log(`I found this number in ${steps} steps.`)
            return middle;
            } else {
                if (number > values[middle]) {
                        start = middle +1;
                    } else {
                        end = middle - 1;
                    }
                }
            }
            console.log(`We didn't found this number in ${steps} steps.`)
            return -1;
        }


console.log(binarySearch(22));
console.log(binarySearch(50));