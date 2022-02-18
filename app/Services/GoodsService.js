import { ProxyState } from "../AppState.js"
import { CartItem } from "../Models/Cart.js"
import { Pop } from "../Utils/Pop.js"

class GoodsService {
    buyItem(id) {
        let foundItem = ProxyState.items.find(i => id == i.id)
        if (foundItem.quantity > 0) {
            foundItem.quantity--
            if (ProxyState.cart.find(i => id == i.id)) {
                let cartItem = ProxyState.cart.find(i => id == i.id)
                cartItem.quantity++
            } else {
                let cartItem = new CartItem(foundItem)
                cartItem.quantity = 1
                ProxyState.cart.push(cartItem)

            }
            ProxyState.items = ProxyState.items
            ProxyState.cart = ProxyState.cart
            Pop.toast(`Added ${foundItem.name} to cart`, 'success')
        } else {
            Pop.toast('Sorry, Out of Stock', 'error')
        }
    }

    async deleteItem(id) {
        await Pop.confirm()
        let foundItem = ProxyState.cart.find(i => id == i.id)
        if (foundItem.quantity > 1) {
            foundItem.quantity--
        } else {
            ProxyState.cart = ProxyState.cart.filter(i => i.id != id)
        }
        let returnItem = ProxyState.items.find(i => id == i.id)
        returnItem.quantity += 1
        ProxyState.cart = ProxyState.cart
        ProxyState.items = ProxyState.items
    }
}

export const goodsService = new GoodsService()