import { generateId } from "../Utils/generateId.js";


let total = 0
export class CartItem {

  constructor(data) {
    this.name = data.name,
      this.quantity = data.quantity,
      this.price = data.price,
      this.id = data.id || generateId()
    this.imgUrl = data.imgUrl

  }



  get Template() {
    return `
            <div class="d-flex justify-content-between py-3">
              <p>${this.name}</p>
              <p>Quantity: ${this.quantity}</p>
              <p>Price: $${this.price}</p>
              <i class="mdi mdi-delete selectable" title="Delete ${this.name}" onclick="app.goodsController.deleteItem('${this.id}')"></i>
            </div>
    `
  }

  get itemTotal() {
    let total = this.price * this.quantity
    console.log(total);
    return total
  }
}