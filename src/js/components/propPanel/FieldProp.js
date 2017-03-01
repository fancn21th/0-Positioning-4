import React from 'react'
import $ from 'jquery'
import FormStore from '../../stores/FormStore'
import * as FieldProActions from '../../actions/FieldProActions'

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

    handleClick = (evt) => {
        evt.preventDefault()
        FieldProActions.changeFieldStyle($(evt.target).text().substr(0,1))
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

        classList[this.state.propStyle - 1] = selectedClass

        const buttonList = [1,2,3,4].map((idx)=>{
            return (
                <button key={idx} type="button" onClick={this.handleClick} class={classList[idx-1]}>{idx}列</button>
            )
        })

        return (
            <div>
                <ul class="nav nav-tabs">
                    <li role="presentation" class="active"><a href="#">字段属性</a></li>
                </ul>
                <br/>
                <div class="btn-group" role="group">
                    { buttonList }
                </div>
            </div>
        )
    }
}
