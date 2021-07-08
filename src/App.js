import React, { Component } from 'react';
//import FirstComponent from './components/learning-examples/FirstComponent'
//import SecondComponent from './components/learning-examples/SecondComponent'
//import ThirdComponent from './components/learning-examples/ThirdComponent'
import TodoApp from './components/todo/TodoApp'
//import Counter from './components/counter/Counter'
import './App.css';
import './bootstrap.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
       <TodoApp/>

        </div>
    )
  }
 }
 export default App;
 
/* class LearningComponents extends Component{
  render() {
    return (
      <div className="LearningComponents">
       My Hello World
       <FirstComponent/>
       <SecondComponent/>
       <ThirdComponent/>
       </div>
    );
    //above is jsx
  }
} */



//convert class to function
// class ThirdComponent extends Component {
//   render() {
//     return (
//       <div className="thirdComponent">
//       ThirdComponent
//       </div>
//     );
//   }
// }




{/*Logo Generator 
  <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}