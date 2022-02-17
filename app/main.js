import { GoodsController } from "./Controllers/GoodsController.js";


class App {
  goodsController = new GoodsController()
}

window["app"] = new App();
