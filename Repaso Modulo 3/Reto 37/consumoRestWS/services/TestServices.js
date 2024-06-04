
export const getAllPostsService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json))
}

export const createPostService =()=>{
    const config = {
        method: 'POST',
        body: JSON.stringify({
            title:'mensaje',
            body:'suerte en su evaluación',
            userId: 1
        }),
        headers:{
            'Content-type':'application/json'
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts',config)
    .then((response)=> response.json())
    .then((json)=> console.log(json))
}