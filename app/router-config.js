
import { GamersController } from "./controllers/GamersController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [GamersController],
    view: ""
  },
])