import { render } from '@testing-library/react';
import React,{ Component } from 'react';
import Student from './StudentComponent';

class App extends Component {
  render(){
  return (
    <div className="App">
     <Student />
    </div>
  );
  }
}

export default App;
