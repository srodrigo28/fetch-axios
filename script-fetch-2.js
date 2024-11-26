// 1. - get fetch
const url = "https://jsonplaceholder.typicode.com/todos"

function fetch1(){
    fetch(url,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'aplication/json;charset-UTF-8'
            }
        }
    )
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log('fim fetch 1')
    })
    .catch((error) => {
        console.log('error :( ' + error)
    })
}
fetch1()

// 1.2. - get fetch
function fetch2(){
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log('fim fetch 2')
    })
    .catch((error) => {
        console.log('error :( ' + error)
    })
}
// fetch2()