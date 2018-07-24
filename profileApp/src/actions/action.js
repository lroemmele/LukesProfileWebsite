import constants from '../constants';

export default {
     createTest: (test)=>{
          return{
               type: constants.TEST_ACTION,
               data: test
          }
     }

}
