const products = [
    {
        id: '1',
        name: 'Potus',
        price: 1000,
        stock: 10,
        category: 'de-interior',
        img: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
        description: 'El potus destaca por su capacidad para purificar el aire y por sus sencillos cuidados.'
    },
    {
        id: '2',
        name: 'Aloe Vera',
        price: 1500,
        stock: 10,
        category: 'de-exterior',
        img: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
        description: 'El Aloe vera se puede cultivar tanto en interior, como en exterior. Se trata de una planta muy similar al cactus, fácil de cuidar y resistente. '
    },
    {
        id: '3',
        name: 'Maceta',
        price: 2000,
        stock: 10,
        category: 'macetas',
        img: 'https://images.unsplash.com/photo-1468531390554-9f62f9767a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' ,
        description: 'Macetas de barro.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}