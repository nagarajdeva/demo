import React from 'react';

class App extends React.Component {
	
   constructor(props) {
   	console.log("1")
   	console.log("2")
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
   	   	console.log("3")

      this.setState({data: e.target.value});
   }
   render() {
   		console.log("4")
      return (
         <div>
            <Content myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></Content>
         </div>
      );
   }
}
class Content extends React.Component {
	
   render() {
   	console.log("5")
      return (
         <div>
            <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}
export default App;
