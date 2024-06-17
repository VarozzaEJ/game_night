import { Gamer } from './models/Gamer.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
  gamers = [
    //   {
    //     name: "evan",
    //     score: 0
    //   },
    //   {
    //     name: "kalista",
    //     score: 0
    //   },
    // ]
    new Gamer('evan'),
    new Gamer('kalista'),
    new Gamer('landon'),

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())