import { ProxyState } from "../AppState.js"
import { goodsService } from "../Services/GoodsService.js"



function _draw() {
    let template = ''
    ProxyState.items.forEach(i => template += i.Template)
    document.getElementById('items').innerHTML = template
}






export class GoodsController{
    constructor() {
        ProxyState.on('items', _draw)
        _draw()
    }
    buyItem(id) {
        goodsService.buyItem(id)
    }
}