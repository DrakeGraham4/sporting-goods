import { ProxyState } from "../AppState.js"
import { goodsService } from "../Services/GoodsService.js"



function _draw() {
    let template = ''
    ProxyState.items.forEach(i => template += i.Template)
    document.getElementById('items').innerHTML = template
}

function _drawCart() {
    let template = ''
    ProxyState.cart.forEach(i => template += i.Template)
    document.getElementById('cart').innerHTML = template
    let cartTotal = 0
    ProxyState.cart.forEach(i => cartTotal += i.price * i.quantity)
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2)
}






export class GoodsController {
    constructor() {
        ProxyState.on('items', _draw)
        ProxyState.on('cart', _drawCart)
        _draw()
    }
    buyItem(id) {
        goodsService.buyItem(id)
    }

    deleteItem(id) {
        goodsService.deleteItem(id)
    }
}