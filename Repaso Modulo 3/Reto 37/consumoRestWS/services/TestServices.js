
export const getAllPostsService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json))
}

export const createPostService =(post)=>{
    const config = {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body,
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

export const createFakeProductService =()=>{
    const config = {
        method:'POST',
        body: JSON.stringify({
                id:2,
                title:"Roma",
                price:12.5,
                category:"Nice",
                description:"Handsome",
                image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        }),
        headers:{"Content-Type":"application/json"}
    }
    fetch("https://fakestoreapi.com/products",config)
    .then((response) => response.json())
    .then((json) => console.log(json))
}

export const updateFakeProductService = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify({
            id:3,
            title:"Roma",
            price:12.5,
            category:"Nice",
            description:"Handsome",
            image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        }),
        headers:{'Content-type':'application/json'}
    }
    fetch("https://fakestoreapi.com/products/3",config)
    .then((response) => response.json())
    .then((json) => console.log(json))
}