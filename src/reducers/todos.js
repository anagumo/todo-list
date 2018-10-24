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
const todos = (state = initialState, action) => {
  return state
}

export default todos
