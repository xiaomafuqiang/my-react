import React from 'react';

export default class Refs extends React.Component {
    constructor(props) {
        super(props);
        this.createRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.createRef);
    }

    render(){

        return (
            <div>
                refs
                <div ref={this.createRef}>ref createRef</div>
                <div ref="stringRef">ref string</div>
            </div>
        );
    }

}