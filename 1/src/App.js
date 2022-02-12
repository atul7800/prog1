import './App.css';
import React from 'react';
import Info from './components/intro.js';
import Project from './components/project.js';
import Qualification from './components/qualification.js'
class App extends React.Component
{
constructor(props)
{
super(props);
this.state={"name":"Atul",
"address":"mathikere",
"age":"21",
"phoneno":"456789635",
"link":"abc.pdf",
"qualification":[
{
"SNo":"001",
"College":"RVCE",
"Degree":"MCA",
"Marks":"8.4"
}
]
};
}
render()
{
return(
<React.Fragment>

<Info name={this.state.name}
address={this.state.address}
age={this.state.age}
phoneno={this.state.phoneno}
link={this.state.link}
/>
<Qualification qualification={this.state.qualification}/>
<Project/>
</React.Fragment>
);
}
}

// function App() {
// return (
// <div className="App">
// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
// Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>
// </header>
// </div>
// );
// }
// import React from 'react';
export default App;