import { ProxyState } from "../AppState.js"
import { Item } from "../Models/Item.js"

class GoodsService{
    buyItem(id) {
        let foundItem = ProxyState.items.find(i => id == i.id)
        let cartItem = new Item(foundItem)
        foundItem.quantity--
        cartItem.quantity = 1
        ProxyState.cart.push(cartItem)
        ProxyState.items = ProxyState.items
        console.log(ProxyState.cart);
    }
}

export const goodsService = new GoodsService()