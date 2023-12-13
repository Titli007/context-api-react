import React, { useReducer } from "react"; 
import { Consumer } from "./context"; 
import { UserContext, initialState, reducer } from './context'
import NameEdit from "./NameEdit";

function App() {
  const [data, setData] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{data:data, setData:setData}}>
      <div className="App">
        <NameEdit/>
      </div>

    </UserContext.Provider>
  );
}

export default App;
