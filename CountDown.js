import { render } from '@testing-library/react';
import React, { Component } from 'react';

export default class HelloWorld extends Component {
    state = {count: 0,}
    

    componentWillMount(){
       this.interval=setInterval(() => this.setState({count: this.state.count + 1}), 1000)
       console.log(this.interval)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    display(){
        const {count}=this.state;
            if(count >= 8){
                return 'BOOOOOM!'
            }
            else if(count %2 === 0){
                return "Tick"
            }
            else {return 'Tock'}
    }


render(){
    return (
    <div>
        {this.display()}
    </div>
    )
}
}


