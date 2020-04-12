import { createStore } from './lib/redux'
import reducer from './reducer/index'
import getInitialState from './getInitialState'
import { Provider } from './lib/mp-redux'

App(
  Provider(createStore(reducer, getInitialState()))({
    onLaunch: function () {}
  })
)
