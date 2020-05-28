let list = [1, 2, 5];
let addList = [3, 4];

console.log(list)
console.log(addList)

for (let i = 0; i < addList.length; i++) {
    for (let k = 0; k < list.length; i++) {
        if(list[k] >= addList[i]) {
            list.splice(k, 0, addList[i]);
            k++;
        }
    }
}

console.log(list)