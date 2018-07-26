import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

class Home extends Component{
     constructor(){
          super();
     }

     render(){
          const list = this.props.mainLayoutProps.tests;

          return(
               <div>
                    <ul>
                         {list.map((item, i)=>{
                              return <li key={i}>{item.name}</li>
                         })}
                    </ul>
               </div>
          );
     }
}

//connects to the redux store
const stateToProps = (state) =>{
     return {
          mainLayoutProps: state.testReducer
     }
}

const dispatchToProps = (dispatch) =>{
     return {
          createTest: ()=> dispatch (actions.createTest())
     }
}

export default connect(stateToProps, dispatchToProps)(Home);
