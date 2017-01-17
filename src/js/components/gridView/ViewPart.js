import React from 'react';

export default class viewPart extends React.Component {
    render() {

        console.log(this.props.className);

        return (
            <div class={this.props.className}>
                {this.props.index}
            </div>
        );
    }
}