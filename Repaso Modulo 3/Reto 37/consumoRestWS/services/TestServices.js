
export const getAllPostsService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {return response.json()})
    .then((json) => {return console.log(json)})
}