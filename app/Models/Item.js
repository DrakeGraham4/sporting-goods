import { generateId } from "../Utils/generateId.js";

export class Item{
    constructor(data) {
        this.name = data.name,
        this.quantity = data.quantity,
        this.price = data.price,
        this.id = data.id || generateId()
        this.imgUrl = data.imgUrl
        
    }

    get Template() {
        return `
        <div class="col-4 p-2">
          <div class="card shadow">
            <img src="${this.imgUrl}" onclick="app.goodsController.buyItem('${this.id}')" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Price: $${this.price}</li>
              <li class="list-group-item">Quantity: ${this.quantity}</li>
              </ul>
          </div>
        </div>`
    }

 
}

