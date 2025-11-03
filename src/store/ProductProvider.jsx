import ProductContext from "./product-context"
import React from 'react'
import music1 from '../assets/Music1.jpeg'
import music2 from '../assets/Music2.jpeg'
import music3 from '../assets/Music3.jpeg'
import music4 from '../assets/Music4.jpeg'

const music = [
    { id: 1, title: "Album 1", price: 12.99, image: music1,description:"This is Album 1" },
    { id: 2, title: "Album 2", price: 12.99, image: music2 ,description:"This is Album 2"},
    { id: 3, title: "Album 3", price: 12.99, image: music3 ,description:"This is Album 3"},
    { id: 4, title: "Album 4", price: 12.99, image: music4 ,description:"This is Album 4"},
]

const value = {
    products: music
}
function ProductProvider(props) {
    return (
        <ProductContext.Provider value={value}>{props.children}</ProductContext.Provider>
    )
}

export default ProductProvider
