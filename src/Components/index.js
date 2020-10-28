import React from 'react';
import './style.css';

class Main extends React.Component{
    render(){
        return(
            <div className = 'content'>
                <div className = "item item1"><span>Summer</span></div>
                <div className = "item item2"><span>the best</span></div>
                <div className = "item item3"><span>period</span></div>
                <div className = "item item4"><span>year</span></div>
            </div>
        );
    }
}

export default Main;