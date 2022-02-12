//import './Form.css';
import React,{Component} from 'react';
class Form extends Component{
        constructor(props)
        {
            super(props);
            this.state={
                name:"",
                address:"",
                age:0,
                clgname:"",
                state:"",
                result:{

                }
            }
        }

        buttonhandler=(event)=>{
            const data={
                name:this.state.name,
                age:this.state.age,
                address:this.state.address,
                clgname:this.state.clgname,
                state:this.state.state
            }
            console.log(data);
            this.setState(()=>({
                result:data
            }));
        }
        
        changeName=(event)=>{
            this.setState(()=>({
                name:event.target.value
            }));
        }
        changeAddress=(event)=>{
            this.setState(()=>({
                address:event.target.value
            }));
        }
        changeAge=(event)=>{
            this.setState(()=>({
                age:event.target.value
            }))
        }
        changeClgname=(event)=>{
            this.setState(()=>({
                clgname:event.target.value
            }))
        }
        changestate=(event)=>{
            this.setState(()=>({
                state:event.target.value
            }))
        }
        render(){
            return(
            <React.Fragment>
                <h2>Student Registration </h2>
                <div className="name">
                <input type="text" placeholder="Enter name here" onChange={this.changeName}/>
                </div>
                <div className="name">
                <input type="text" placeholder="Enter address" onChange={this.changeAddress}/>
                </div>
                <div className="name">
                <input type="text" placeholder="Enter age" onChange={this.changeAge}/>
                </div>
                <div className="name">
                <input type="text" placeholder="Enter college name" onChange={this.changeClgname}/>
                </div>
                <div className="name">
                <input type="text" placeholder="Enter state" onChange={this.changestate}/>
                </div>
                <button onClick={this.buttonhandler}>Register Now</button>

                
                <div className="name">
                <div>Name: {this.state.result.name}</div>
                <div>Address :{this.state.result.address}</div>
                <div>Age: {this.state.result.age}</div>
                <div>College Name:{this.state.result.clgname}</div>
                <div>State: {this.state.result.state}</div>
                </div>
            </React.Fragment>
            )    
        }
    }
    export default Form;