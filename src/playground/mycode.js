
var user={
    name:"aman jain",
   age: "21",
   options:["amna","jain"]
};

function getName (user){
    if(user.name){
        return <h1>{user.name}</h1> ; } };


const onFormSubmit = () => {
    e.preventDefault()

    const option = e.target.elements.option.value;

if(option){
    user.options.push(option);
    e.target.elements.option.value="";

}
};

var myelement = (
    <div>
    {getName(user)}
        <p>{user.age ? user.age : ""}</p>
        <p>I Love JSX!</p>
    </div> )  ;
let count=0;


const addOne=()=>{count=count+1;
renderApp();}

const subOne=()=>{count=count-1;
renderApp();}
// var myelement1 = (
//     <div>
//     <h1>count :{count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button id="button" className="jain">+1</button>

//     </div> )  ;


var aman=document.getElementById('ap');

const renderApp=()=>{
    var myelement1 = (
        <div>
        <h1>count :{count}</h1>
   {/* <button >+1</button> */}
            <button onClick={addOne} id="button" className="jain">+1</button>
   <button onClick={subOne}>-1</button> 
        </div> )  ;
        ReactDOM.render(myelement1,aman );

}


renderApp();