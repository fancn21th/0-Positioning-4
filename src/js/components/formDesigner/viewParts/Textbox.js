import React from "react";
import $ from 'jquery'
import 'jquery-ui/ui/widgets/droppable'

import * as FormActions from '../../../actions/FormActions'

export default class Textbox extends React.Component {

    rendeDroppable = () => {
        const that = this

        // 当draggable落在droppable上
        $('#' + this.props.id).droppable({
            greedy: true,
            drop: function(evt, ui) {
                FormActions.createField(that.props.index)
            }
        })
    }

    componentDidMount = () => {
        this.rendeDroppable()
    }

    render() {
        const id = this.props.id

        return (
            <input id={id} type="text" className="agz-viewPart__textbox"/>
        )
    }
}