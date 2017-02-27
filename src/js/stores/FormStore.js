import { EventEmitter } from 'events'
import dispatcher from "../dispatcher"

class FormStore extends EventEmitter {

    constructor(){
        super()
        this.form = {
            fields: []
        }
        this.selectedField = null
    }

    getForm(){
        return this.form
    }

    getSelectedFiled(){
        return this.selectedField
    }

    createField(){
        this.form.fields.push({
            id: Date.now() + 'x',
            text: 'Test Text',
            colSpan: 1,
            type: 'textbox'
        })

        this.emit('CREATE_FIELD_EVT')
    }

    selectField(id){
        this.selectedField = _.find(this.form.fields, field => field.id === id)
        this.emit('SELECT_FIELD_EVT')
    }

    handleActions(action) {
        switch(action.type){
            case 'RECEIVE_FORM': {
                this.form = action.form
                this.emit('CREATE_FIELD_EVT')
                break
            }
            case 'CREATE_FIELD': {
                this.createField('CREATE_FIELD_EVT')
                break
            }
            case 'SELECT_FIELD': {
                this.selectField(action.id)
                break
            }
        }
    }
}

const formStore = new FormStore
dispatcher.register(formStore.handleActions.bind(formStore))

export default formStore