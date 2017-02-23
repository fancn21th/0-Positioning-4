import React from 'react'
import FormProp from './propPanel/FormProp'
import FieldProp from './propPanel/FieldProp'

export default class PropPanel extends React.Component {

    render() {
        return (
            <div class={this.props.className}>
                <span class="label label-default">属性栏</span>
                <FormProp />
                <br/>
                <FieldProp />
            </div>
        )
    }
}
