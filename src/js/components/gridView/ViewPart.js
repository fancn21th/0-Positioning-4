import React from 'react';
import $ from 'jquery'
import 'jquery-ui/ui/widgets/droppable'

export default class viewPart extends React.Component {

    state = {
        isOccupied : false
    }

    rendeDroppable = () => {
        const that = this;

        $("#droppable" + that.props.index).droppable({
            drop: function( event, ui ) {
                $( this )
                    .addClass( "ui-state-highlight" )
                    .find( "p" )
                    .html( "Dropped!" );

                that.setState({
                    isOccupied: true
                })
            }
        })
    }

    componentDidMount = () => {
        this.rendeDroppable()
    }

    componentDidUpdate = () => {
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
            <div class={this.props.className}>
                {this.props.index}
                <div id={id} class="ui-widget-header">
                    { viewPart }
                </div>
            </div>
        );
    }
}