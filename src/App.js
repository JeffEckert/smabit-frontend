import React from 'react';
import {connect} from 'react-redux'
import {fetchItems} from './actions/fetchItems'


class App extends React.Component {

  


  render() {
    return (
     <div className="App">
       App
     </div>
    );
  }
}

export default connect()(App);
