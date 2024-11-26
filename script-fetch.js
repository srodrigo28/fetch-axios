// 1. - get fetch
const url = "https://jsonplaceholder.typicode.com/todos"

const data = {
    title: "Algum titulo",
    content: "algum conteúdo...",
    userId: 1
}
/* 1.0. - get fetch

fetch(url,
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'aplication/json;charset-UTF-8'
        }
    }
)
.then( (response) => response.json() )
.then( (data) => { console.log(data)} )
.catch( (error) => { console.log('error :( ' + error)} )
*/

/* 1.2. - get fetch
fetch(url)
.then( (response) => response.json() )
.then( (data) => { console.log(data)} )
.catch((error) => { console.log('error :( ' + error)} )
*/

/* 1.3 post fetch */
fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data) 
})
.then( (response) => response.json() )
.then( (data) => console.log(data) ) ;