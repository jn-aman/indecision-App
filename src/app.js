class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    this.handlePick=this.handlePick.bind(this);
    this.handleAddOption=this.handleAddOption.bind(this);
    this.state={
options: ['a','b']
    };
  }
  handleDeleteOptions(){
    this.setState(function(){
return {
  options:[]
};

    });
  }
  handlePick(){

    const x = Math.floor(Math.random()* this.state.options.length);
const option= this.state.options[x];
alert(option);


  }


  handleAddOption(option){
    this.setState(function(prevState){
      return {
        options: prevState.options.concat(option)
      };
      
          });
  }
  render() {
    
    return (
      <div>
        <Header title='Indecision App'/>
        <Action 
        handlePick={this.handlePick}
        hasOption={this.state.options.length > 0} />
        <Options 
        options={this.state.options}
        //prob-> handleDeleteOptions
        handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption ={this.handleAddOption}/>
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {




  render() {
    return (
      <div>
        <button
        disabled={!this.props.hasOption}
        onClick={this.props.handlePick}>
        
        What should I do?
        
        </button>

      </div>
    );
  }
}

class Options extends React.Component {

  render() {
    return (
     <div>
      { this.props.options.map((option) => <Option key={option} optionText={option} />)
      }
      <button onClick={this.props.handleDeleteOptions} >Remove All</button>
</div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
    
        <h3>{this.props.optionText}</h3>

    );
  }
}


class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption=this.handleAddOption.bind(this);
  }
  handleAddOption(e){
    e.preventDefault();
    const option=e.target.elements.option.value.trim();
    if(option){
      this.props.handleAddOption(option);
      
    }
    e.target.elements.option.value="";
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleAddOption}>
  <input type="text" name="option"/>
  <button> Add Option </button>
</form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));





