import React from 'react';
import {connect} from 'react-redux'
import ItemsContainer from './containers/ItemsContainer'


class App extends React.Component {

  


  render() {
    return (
     <div className="App">
       <ItemsContainer/>
     </div>
    );
  }
}

export default connect()(App);
