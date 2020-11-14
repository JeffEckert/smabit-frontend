import React from 'react';
import {connect} from 'react-redux'
import Items from '../components/Items'
import ItemInput from '../components/ItemInput'
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

export default App;
