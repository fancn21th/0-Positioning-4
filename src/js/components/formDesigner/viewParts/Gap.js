import React from "react"
import $ from 'jquery'
import 'jquery-ui/ui/widgets/droppable'

import * as FormActions from '../../../actions/FormActions'

export default class Gap extends React.Component {

    rendeDroppable = () => {
        const that = this

        // 当draggable落在droppable上
        $('#' + this.props.id).droppable({
            greedy: true,
            drop: function(evt, ui) {
                FormActions.createField(that.props.insertedIndex)
            }
        })
    }

    componentDidMount = () => {
        this.rendeDroppable()
    }

    render() {
        const id = this.props.id

        return (
            <h5 id={id}>I am a gap</h5>
        )
    }
}