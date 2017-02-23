import React from 'react'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/draggable'

export default class Toolbar extends React.Component {

    renderDraggable = () => {
        $("#draggable").draggable({ revert: "valid" });
    }

    componentDidMount = () => {
        this.renderDraggable();
    }

    componentDidUpdate = () => {
        this.renderDraggable();
    }

    render() {
        return (
            <div class={this.props.className}>
                <span class="label label-default">工具栏</span>
                <div id="draggable" class="ui-widget-content agz-draggable">
                    <p>Drag me to my target</p>
                </div>
            </div>
        );
    }
}