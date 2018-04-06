import React, { Component } from 'react'
import Clock from './Clock'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deadline: '2019-01-01',
        }
    }
    // changeDeadline() {
    //     this.setState({deadline: this.state.newDeadline})
    // }
    render() {
        return (
            <div className='App'>
                <div className='div-title'>COUNTDOWN TO {this.state.deadline}</div>

                <Clock deadline={this.state.deadline} />

                <div>
                    {/* <input type="text" placeholder='Enter new date...' 
                    onChange={(event) => {this.setState({newDeadline: event.target.value.toUpperCase()})}} /> */}
                    <input type="date" name="bday" onChange={(event) => {
                        this.setState({deadline: event.target.value})
                        // console.log(event.target.value)
                        
                        }} />
                    {/* <button onClick={() => this.changeDeadline() } >Submit</button> */}
                </div>

                {/* {EYES} */}
               
                 <div>
                    <section className="move-area">
                        <div className='.container'>
                            <div className='eye'></div>
                            <div className='eye'></div>
                        </div>
                    </section>
                    
                </div>
                
            </div>
        )
    }
}

export default App;