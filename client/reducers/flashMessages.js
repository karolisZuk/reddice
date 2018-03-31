import { ADD_FLASH_MESSAGE } from "../actions/types";
import shortid from 'shortid';

export default (state=[], action={})=>{
    switch(action.type){
        case ADD_FLASH_MESSAGE:
           return [
               //state that was before + object
               ...state,
               {
                   id:shortid.generate(),
                   type: action.message.type,
                   text: action.message.text
               }
           ]
        default: return state;
    }

}