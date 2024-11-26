const url1 = "https://jsonplaceholder.typicode.com/todos"

const data = {
    title: "Algum titulo",
    content: "algum conteúdo...",
    userId: 1
}

/* 2. - get axios
axios.get(url1)
.then((response) => { console.log(response.data) })
.catch((error) => { console.log(error) })
*/

/* 2.2 - get axios
axios.get(url1)
.then((response) => { console.log(response.data) } )
.catch((error) => { console.log(error) } )
*/

/* 3 - POST com fetch */
axios.post(url1, data)
.then( (response) => {console.log(response.data)} )
