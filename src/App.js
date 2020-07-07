import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Rollodex from './Rollodex';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        data: []
    }
}
 

componentDidMount() {
  this.loadData();
}

  loadData = async () => {

    this.setState({
        data: []
    });


    
    const response = await fetch("https://randomuser.me/api?results=25");

    const data = await response.json();
  

    this.setState({
        data: data.results
    });

}
render() {
  return (
    <div className="App">
      <header className="App-header">
        {this.state.data.map((data, index) => (
              <Rollodex key={index} index={index} data={data}/>
          ))}
      </header>
    </div>
  );
}
}



export default App;