import constants from '../constants';

export default {
     createTest: (test)=>{
          console.log('action called');
          return{
               type: constants.TEST_ACTION,
               data: newtest
          }
     }

}
