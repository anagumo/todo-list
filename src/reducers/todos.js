const initialState = {
  items: [
    {
      "id": 1,
      "task": "Learn Redux",
      "completed": true
    },
    {
      "id": 2,
      "task": "Dinner with mom",
      "completed": false
    },
    {
      "id": 3,
      "task": "Take a cold shower",
      "completed": false
    },
  ]
}

import { ADD_TODO } from '../actions/types'

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          action.task
        ]
      }
  }

  return state
}

export default todos
