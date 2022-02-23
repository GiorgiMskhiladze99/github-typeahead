const API_URL = "https://api.github.com/search/users";

const getUsers = (keyword, sort, ordering, amount, page_amount) => {
    return fetch(`${API_URL}?q=${keyword}&sort=${sort}&order=${ordering}&per_page=${amount}&page=${page_amount}`)
        .then(response => response.json())
        .then( data => data)
        .catch( error => console.error(error));
}

export default getUsers;

// console.log(`${API_URL}?q=${keyword}&sort=${sort}&order=${ordering}&per_page=${amount}&page=${page_amount}`)