import {INCREMENT, DECREMENT } from './Action';
import React from 'react';

const InitialState = {
    count: 0
}
const Reducer =(state=InitialState, action)=>{
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }


}

export default Reducer;