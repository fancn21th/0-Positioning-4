import React from 'react';
import $ from 'jquery'
import 'jquery-ui/ui/widgets/droppable'

export default class viewPart extends React.Component {

    rendeDroppable = () => {
        $(".droppable").droppable({
            drop: function( event, ui ) {
                $( this )
                    .addClass( "ui-state-highlight" )
                    .find( "p" )
                    .html( "Dropped!" );
            }
        });
    }

    componentDidMount = () => {
        this.rendeDroppable();
    }

    componentDidUpdate = () => {
        this.rendeDroppable();
    }


    render() {
        return (
            <div class={this.props.className}>
                {this.props.index}
                <div class="ui-widget-header droppable">
                    <p>Drop here</p>
                </div>
            </div>
        );
    }
}