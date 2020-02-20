


class Counter extends React.Component{
    constructor(props){
      super(props);
  this.handleReset=this.handleReset.bind(this);
  this.handleAddOne=this.handleAddOne.bind(this);
  this.handleMinusOne=this.handleMinusOne.bind(this);
  this.state = {
  count:0
  } ; 
  }
    handleAddOne(){
   this.setState(function(prevState){
  return {
  count: prevState.count + 1
  };
   });
  }
    handleMinusOne(){
      this.setState(function(prevState){
  return {
    count: prevState.count - 1
  };
  
      });
    }
    handleReset(){
      alert('c');
    }
  render(){
    return (
  <div>
    <h1>count : {this.state.count}</h1>
    <button onClick={this.handleAddOne}>+1</button>  
    <button onClick={this.handleMinusOne}>-1</button>
    <button onClick={this.handleReset}>Reset all</button>
  
  </div>
  
    );
  }
  
  }
  
  ReactDOM.render(<Counter data={[1,2,3]} />,document.getElementById("app"));