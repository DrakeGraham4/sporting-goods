import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Item } from "./Models/Item.js"

class AppState extends EventEmitter {
  items = [
    new Item ({
      name: 'Baseball',
      price: 10,
      quantity: 100,
      imgUrl: 'https://thiscatdoesnotexist.com'

    }),
    new Item ({
      name: 'Shoes',
      price: 30,
      quantity: 5000,
      imgUrl: 'https://thiscatdoesnotexist.com'
    }
      
    )

  ]
  cart = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
