
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

export const updatePostService =()=>{
    const config = {
        method:'PUT',
        body: JSON.stringify({
            id:1,
            title:'mensaje final',
            body:'hasta la vista baby',
            userId:1
        }),
        headers:{
            'Content-type':'application/json'
        }
    }
    fetch('https://jsonplaceholder.typicode.com/posts/1',config)
    .then((response)=>response.json())
    .then((json)=>console.log(json))
}

export const getByUserIdService = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then((response)=> response.json())
    .then((json) => console.log(json))
}

export const getFakeStoreService = () =>{
    fetch('https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then((json)=>console.log(json))
}