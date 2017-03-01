import React from 'react'
import * as ViewPartActions from '../../actions/ViewPartActions'
import { Textbox } from './viewParts/Textbox'
import { Stuffed } from './viewParts/Stuffed'

export default class viewPart extends React.Component {

    handleClick = (evt) => {
        evt.preventDefault()
        ViewPartActions.selectField(this.props.index)
    }

    render() {
        const content = this.props.type == 'textbox' ? <Textbox/> : <Stuffed/>

        return (
            <div class={this.props.className} onClick={this.handleClick}>
                {this.props.id}
                <div class="ui-widget-header">
                    { content }
                </div>
            </div>
        )
    }
}