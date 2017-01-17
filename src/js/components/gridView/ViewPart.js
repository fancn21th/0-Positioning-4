import React from 'react';

export default class viewPart extends React.Component {
    render() {
        return (
            <div class={this.props.className}>
                {this.props.index}
            </div>
        );
    }
}