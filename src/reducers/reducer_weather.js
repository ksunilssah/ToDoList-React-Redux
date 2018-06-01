import { FETCH_WEATHER } from '../constant';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return state.concat([action.payload.data]);
           // return [action.payload.data, ...state] //ES6 way to concat array
    }
    return state;
}