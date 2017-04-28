import storeFactory from './store' // actually this is ./store/index.js
import expect from 'expect'
import { randomGoals } from './actions'

const store = storeFactory()

store.dispatch(
  randomGoals()
)