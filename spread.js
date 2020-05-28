let list = [1, 2, 5];
let addList = [3, 4];

for (let i = 0; i < addList.length; i++) {
    for (let k = 0; k < list.length; k++) {
        if (list[k] >= addList[i]) {
            list.splice(k, 0, addList[i]);
            k++;
        }
    }
}

const listResult = [1, 2, ...addList, 5]

console.log(list);

// other example

let array1 = ['a', 'b', 'c'];
let array2 = [...array1];

array2.push('d');

console.log(`Array1 =${array1}`);
console.log(`Array2 =${array2}`);