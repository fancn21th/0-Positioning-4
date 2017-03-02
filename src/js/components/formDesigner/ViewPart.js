import React from 'react'
import * as ViewPartActions from '../../actions/ViewPartActions'
import Textbox from './viewParts/Textbox'
import Stuffed from './viewParts/Stuffed'

export default class viewPart extends React.Component {

    handleClick = (evt) => {
        evt.preventDefault()
        ViewPartActions.selectField(this.props.id)
    }

    render() {
        const content = this.props.type == 'textbox' ? <Textbox {...this.props}/> : <Stuffed {...this.props}/>

        const deleteButton = this.props.type == 'textbox' ?
            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> : null

        return (
            <div class={this.props.className} onClick={this.handleClick}>
                {this.props.id} {deleteButton}
                <div class="ui-widget-header">
                    { content }
                </div>
            </div>
        )
    }
}