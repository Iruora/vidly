import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    handleIncrement() {
        this.setState({count: this.state.count + 1});
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count; 
    }

    render() {
        return ( 
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement( )} className="btn btn-sm btn-primary m-2">+</button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count) === 0 ? 'warning' : 'primary';
        return classes;
    }
}
 
export default Counter;