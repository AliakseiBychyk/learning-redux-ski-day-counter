import C from './constants'
import storeFactory from './store' // actually this is ./store/index.js 

const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) :
  {}

const saveState = () => {
  const state = JSON.stringify(store.getState())
  localStorage['redux-store'] = state
}

const store = storeFactory(initialState)

store.subscribe(saveState)

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    "resort": "Mt Shasta",
    "date": "2016-10-26",
    "powder": true,
    "backcountry": true
  }
})

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    "resort": "Squaw Valley ",
    "date": "2016-4-26",
    "powder": true,
    "backcountry": false
  }
})

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    "resort": "The Canyons",
    "date": "2016-1-20",
    "powder": false,
    "backcountry": true
  }
})
