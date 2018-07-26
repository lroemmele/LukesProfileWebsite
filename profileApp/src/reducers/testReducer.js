import constants from '../constants';

var initialState = {
     tests: [
          {name: 'test2'},
          {name: 'test2'}
     ]
}

export default (state = initialState, action)=>{

     switch (action.type) {
          case (constants.TEST_ACTION):
               return state;

          default:
               return state;
     }
}
