const findBestEmployee = function (employees) {
    const employeeValue = Object.values(employees);
    const employeeName = Object.keys(employees);
    const maxValue = Math.max(...employeeValue);

    for (const name of employeeName) {
        if (employees[name] === maxValue) {
            return `${name}`;
        }
    }
};

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
