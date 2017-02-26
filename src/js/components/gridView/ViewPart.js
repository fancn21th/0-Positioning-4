import React from 'react';
import * as ViewPartActions from '../../actions/ViewPartActions'

export default class viewPart extends React.Component {

    handleClick = (evt) => {
        evt.preventDefault()
        ViewPartActions.selectField(this.props.index)
    }

    render() {
        const textbox = (
            <input type="text" className="agz-viewPart__textbox"/>
        )

        return (
            <div class={this.props.className} onClick={this.handleClick}>
                {this.props.index}
                <div class="ui-widget-header">
                    { textbox }
                </div>
            </div>
        )
    }
}