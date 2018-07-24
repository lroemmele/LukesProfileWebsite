import React, {Component} from 'react';

//used to connect to redux store
import { connect } from 'react-redux';

class Home extends Component{
     constructor(){
          super();
     }


     render(){
          const list = this.props.test.tests;

          console.log("in home componet");
          return(
               <div id="test">
                    *<ul>
                         {list.map((item, i)=>{
                              return <li key={i}>{item.name}</li>
                         })}
                    </ul>
               </div>
          );
     }
}

//connects to the redux store
const stateToProps =(state) =>{
     return {
          test: state.test
     }
}

const dispatchToProps = (dispatch) =>{
     return {

     }
}

export default connect(stateToProps, dispatchToProps)(Home);
