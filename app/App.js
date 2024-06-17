import { GamersController } from './controllers/GamersController.js';
import { router } from './router-config.js';

class App {

  router = router

  init() {
    this.router.init(app)
  }

}

const app = new App()
app.init()
// @ts-ignore
window.app = app
