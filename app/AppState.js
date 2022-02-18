import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Item } from "./Models/Item.js"

class AppState extends EventEmitter {
  items = [
    new Item({
      name: 'Baseball',
      price: 10,
      quantity: 10,
      imgUrl: 'https://www.pngpix.com/wp-content/uploads/2016/03/Baseball-PNG-Image1.png'

    }),
    new Item({
      name: 'Shoes',
      price: 30,
      quantity: 15,
      imgUrl: 'https://cdn.sweatband.com/wilson_kaos_comp_2.0_mens_tennis_shoes_wilson_kaos_comp_2.0_mens_tennis_shoes_-_slant_2000x2000.jpg'
    }),
    new Item({
      name: 'Fishing Pole',
      price: 80,
      quantity: 8,
      imgUrl: 'https://rukminim1.flixcart.com/image/704/704/jr2dpjk0/fishing-rod/g/d/9/free-travelling-bag-6-feet-180cm-hunting-hobby-original-imafc54hu8cszghs.jpeg?q=70'
    }),
    new Item({
      name: 'Tent',
      price: 250,
      quantity: 5,
      imgUrl: 'https://www.myopencountry.com/wp-content/uploads/2018/11/Best-6-Person-Tent-featimage.jpg'
    })

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
