import React from 'react';
import $ from 'jquery'
import 'jquery-ui/ui/widgets/droppable'

export default class viewPart extends React.Component {

    state = {
        isOccupied : false
    }

    handleClick = (evt) => {
        evt.preventDefault()
    }

    rendeDroppable = () => {
        const that = this;

        // 当draggable落在droppable上
        $("#droppable" + that.props.index).droppable({
            drop: function(event, ui) {
                $(this).addClass("ui-state-highlight")

                that.setState({
                    isOccupied: true
                })
            }
        })
    }

    componentDidMount = () => {
        this.rendeDroppable()
    }

    render() {
        const beforeDropped = (
            <p>Drop here</p>
        );

        const afterDropped = (
            <input type="text" className="agz-viewPart__textbox"/>
        );

        const id = "droppable" + this.props.index

        const viewPart = this.state.isOccupied ?  afterDropped : beforeDropped

        return (
            <div class={this.props.className} onClick={this.handleClick}>
                {this.props.index}
                <div id={id} class="ui-widget-header">
                    { viewPart }
                </div>
            </div>
        );
    }
}