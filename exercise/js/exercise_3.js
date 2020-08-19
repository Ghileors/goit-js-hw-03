const findBestEmployee = function (employees) {
    const maxValue = Math.max(...Object.values(employees));

    for (const bestEmployee of Object.keys(employees)) {
        if (employees[bestEmployee] === maxValue) {
            return bestEmployee;
        }
    }
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux
