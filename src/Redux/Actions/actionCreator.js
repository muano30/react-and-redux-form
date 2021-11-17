import { ADD_MESSAGE } from "../actiontypes/action"

export const addMessage = (data) => {
    return{
        type: ADD_MESSAGE,
        payLoad:data

    }
}