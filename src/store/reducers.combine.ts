/* 
var masterReducer = topologicallyCombineReducers(
  { auth, users, todos },
  // define the dependency tree
  { auth: ['users'], todos: ['auth'] }
)
*/
