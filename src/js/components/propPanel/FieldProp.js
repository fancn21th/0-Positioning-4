import React from 'react'
import FormStore from '../../stores/FormStore'

export default class FieldProp extends React.Component {

    constructor(){
        super()
        this.state = {
            propStyle: 0
        }
    }

    updateProp = () => {
        this.setState({
            propStyle: FormStore.getSelectedFiled().colSpan
        })
    }

    componentWillMount() {
        FormStore.on("SELECT_FIELD_EVT", this.updateProp)
    }

    componentWillUnmount() {
        FormStore.removeListener("SELECT_FIELD_EVT", this.updateProp);
    }

    render() {
        const defaultClass = 'btn btn-default'
        const selectedClass = 'btn btn-primary'
        const classList = [defaultClass, defaultClass, defaultClass, defaultClass]

        classList[this.state.propStyle -1 ] = selectedClass

        return (
            <div>
                <ul class="nav nav-tabs">
                    <li role="presentation" class="active"><a href="#">字段属性</a></li>
                </ul>
                <br/>
                <div class="btn-group" role="group">
                    <button type="button" class={classList[0]}>单列</button>
                    <button type="button" class={classList[1]}>两列</button>
                    <button type="button" class={classList[2]}>三列</button>
                    <button type="button" class={classList[3]}>四列</button>
                </div>
            </div>
        )
    }
}
