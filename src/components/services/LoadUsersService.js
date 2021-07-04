async function getUsers() {
    try {
        return getCachedUsers();
    } catch (e) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const result = await data.map(el => el.name);
        localStorage.setItem('users', JSON.stringify(result));

        return result;
    }
}

function getCachedUsers() {
    const cachedData = localStorage.getItem('users');
    
    if (!cachedData || cachedData === 'null') {
        throw new Error('No cached users');
    }

    return JSON.parse(cachedData)
}

export default { getUsers }