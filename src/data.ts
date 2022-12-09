export type Product = {
    product_id: number,
    brand: string,
    name: string,
    description: string,
    price: number,
    imgsrc: string,
    category: string,
    gender: string
}

export type cartItem = {
    product_id?: number,
    quantity: number,
    price?: number,
    size: String,
    brand?: string,
    name?: string
}

export type ItemSearchFilter = {
    category: string,
    brand: string,
    gender: string
}