import React from 'react'
import $ from 'jquery'
import FormStore from '../../stores/FormStore'
import * as FieldProActions from '../../actions/FieldProActions'

export default class FieldProp extends React.Component {

    constructor(){
        super()
        this.state = {
            selectedField: null
        }
    }

    updateProp = () => {
        this.setState({
            selectedField: FormStore.getSelectedFiled()
        })
    }

    handleClick = (evt) => {
        evt.preventDefault()
        FieldProActions.changeFieldStyle($(evt.target).text().substr(0,1))
    }

    componentWillMount() {
        FormStore.on("SELECT_FIELD_EVT", this.updateProp)
        FormStore.on("CREATE_FIELD_EVT", this.updateProp)
    }

    componentWillUnmount() {
        FormStore.removeListener("SELECT_FIELD_EVT", this.updateProp);
        FormStore.removeListener("CREATE_FIELD_EVT", this.updateProp)
    }

    render() {
        const defaultClass = 'btn btn-default'
        const selectedClass = 'btn btn-primary'
        const classList = [defaultClass, defaultClass, defaultClass, defaultClass]
        let id = null

        debugger

        if(this.state.selectedField){
            classList[this.state.selectedField.colSpan - 1] = selectedClass
            id = this.state.selectedField.id
        }

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
                { id }
                <div class="btn-group" role="group">
                    { buttonList }
                </div>
            </div>
        )
    }
}
