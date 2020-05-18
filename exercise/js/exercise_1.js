const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

const updateUser = {
    mood: 'happy',
    ...user,
    hobby: 'skydiving',
    premium: false,
};

const showUserData = data => {
    const keys = Object.keys(data);
    for (const key of keys) {
        console.log(`${key}: ${data[key]}`);
    }
};

showUserData(updateUser);
