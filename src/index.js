import C from './constants'
import storeFactory from './store'

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

// const store = createStore(appReducer)

// const unsubscribeGoalLogger = store.subscribe(
//   () => console.log(`  Goal:  ${store.getState().goal}`)
// )

// setInterval(() => {
//   store.dispatch({
//     type: C.SET_GOAL,
//     payload: Math.floor(Math.random()* 100)
//   })
// }, 250)  

// setTimeout(() => {
//    unsubscribeGoalLogger()
// }, 3000)