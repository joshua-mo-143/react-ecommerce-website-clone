import create from 'zustand';
import { cartItem } from './data';

interface cart {
    cart: cartItem[]
    editCart: (cart: cartItem[]) => void
}

export const cartStore = create<cart>()((set) => ({
    cart: [],
    editCart: (cart) => set(() => ({cart: cart}))
}))