let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < array.length; i++) {
    let check = array[i] % 2;
    if (check === 0) {
        console.log(array[i]);
    } else {
        console.log("bu toq juft" + array[i]);
    }
}