import React,{Component} from "react";
import './Editor.css';
class Editor extends Component{
    //progression 2
    constructor(props) {
        super(props);
        // to bind the method with event handler without (). 
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }
    handleChange(e){
        this.setState({value: e.target.value});
    }
    render(){
        return(
            //progression 1
            // <>
            // <div className="container">
            //     <div className="input">
            //         <h3>Input</h3>
            //         <textarea className="input-text"/>
            //     </div>
            //     <div className="output">
            //         <h3>Pro Note</h3>
            //         <div className="output-text"></div>
            //     </div>                
            // </div>
            // </>
            //progression 3
            <>
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    {/* <!-- call the handleChanges method in the onChange event and set the default value as empty--> */}
                    <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>                
            </div>
            </>
        )
    }
}

export default Editor