import { createContext } from "react";

export const UserContext = createContext();

export const initialState = {
    name:"RAMMMM",
    age:24,
    baal:"",
    bochhi:"",
}
                              //{type:1/2 , payload:20}
export const reducer = (state, action) => {
    switch (action.type) {
        case "set_name": {
            return {
                ...state,
                name: action.payload
            }
        }

        case "set_age": {
            return {
                ...state,
                age: action.payload
            }
        }

        case "set_baal": {
            return{
                ...state,
                name:action.payload
            }
        }


        default: {
            return
        }
    }
}


