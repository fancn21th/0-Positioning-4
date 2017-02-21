import React from 'react'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/draggable'

export default class Toolbar extends React.Component {

    renderDragAndDroppable = () => {
        $("#draggable").draggable();
    }

    componentDidMount = () => {
        this.renderDragAndDroppable();
    }

    componentDidUpdate = () => {
        this.renderDragAndDroppable();
    }

    render() {
        return (
            <div class={this.props.className}>
                toolbar

                <div id="draggable" class="ui-widget-content">
                    <p>Drag me to my target</p>
                </div>
            </div>
        );
    }
}