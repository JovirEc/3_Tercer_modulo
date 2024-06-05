
export const getAllPostsService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json))
}

export const createPostService =(post,fnExito)=>{
    const config = {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body,
            userId: 1
        }),
        headers:{'Content-type':'application/json'}
    }

    fetch('https://jsonplaceholder.typicode.com/posts',config)
    .then((response)=> response.json())
    .then((json)=> {
        console.log(json)
        fnExito();
    })
}

export const addDocumentTypesService = (tipoDocumento, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            codigo: tipoDocumento.title,
            descripcion: tipoDocumento.body
        }),
        headers: {'Content-Type':'application/json'}
    }

    fetch('http://192.168.100.9:8080/inventarios2/rest/tiposdocumento/agregar',config)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        fnExito()
    })
}

/*export const addDocumentTypesService = (tipoDocumento, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            codigo: tipoDocumento.title,
            descripcion: tipoDocumento.body
        }),
        headers: {'Content-Type':'application/json'}
    }

    fetch('http://192.168.100.9:8080/inventarios2/rest/tiposdocumento/agregar', config)
        .then((response) => {
            console.log('Respuesta del servidor:', response);
            if (!response.ok) {
                return response.text().then(text => {
                    console.error('Error en la respuesta del servidor:', text);
                    throw new Error('Error en la respuesta del servidor');
                });
            }
            return response.text();  // Cambiado a response.text() para depuración
        })
        .then((text) => {
            if (!text) {
                throw new Error('Respuesta vacía del servidor');
            }
            try {
                const json = JSON.parse(text);
                console.log('Respuesta JSON:', json);
                fnExito();
            } catch (error) {
                console.error('Error al parsear JSON:', error);
                throw new Error('Error al parsear JSON');
            }
        })
        .catch((error) => {
            console.error('Error al procesar la solicitud:', error);
        });
}*/

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

export const getDocumentTypesService = () => {
    fetch('http://192.168.100.9:8080/inventarios/rest/tiposdocumento/recuperar')
    .then((response) => response.json())
    .then((json) => console.log(json))
}

