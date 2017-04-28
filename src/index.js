import storeFactory from './store' // actually this is ./store/index.js
import { suggestResortNames } from './actions'


const store = storeFactory()

store.dispatch(
  suggestResortNames('hea')
)