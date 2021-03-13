async function getUsers() {
    console.log('getUsers')
    try {
        return getCachedUsers();
    } catch (e) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const result = data.map(el => el.name);
        localStorage.setItem('users', JSON.stringify(result));

        return result;
    }
}

function getCachedUsers() {
    const cachedData = localStorage.getItem('users');
    
    if (cachedData) return JSON.parse(cachedData)
    else throw new Error('No cached users');
}

export default { getUsers }