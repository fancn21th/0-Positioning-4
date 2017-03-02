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

    createField(idx){
        if(idx){
            this.form.fields.splice(
                idx,
                0,
                {
                    id: Date.now() + 'N',
                    text: 'Test Text',
                    colSpan: 1,
                    type: 'textbox'
                }
            )
            this.emit('CREATE_FIELD_EVT')
        }else{
            this.form.fields.push({
                id: Date.now() + 'N',
                text: 'Test Text',
                colSpan: 1,
                type: 'textbox'
            })
            this.emit('CREATE_FIELD_EVT')
        }
    }

    selectField(id){
        this.selectedField = _.find(this.form.fields, field => field.id === id)
        this.emit('SELECT_FIELD_EVT')
    }

    updateFieldStyle(colSpan){
        if(typeof colSpan === 'string'){
            this.selectedField.colSpan = parseInt(colSpan)
        }else{
            this.selectedField.colSpan = colSpan
        }
        this.emit('CREATE_FIELD_EVT')
    }

    handleActions(action) {
        switch(action.type){
            case 'RECEIVE_FORM': {
                this.form = action.form
                this.emit('CREATE_FIELD_EVT')
                break
            }
            case 'CREATE_FIELD': {
                this.createField(action.index)
                break
            }
            case 'SELECT_FIELD': {
                this.selectField(action.id)
                break
            }
            case 'CHANGE_FIELD_STYLE': {
                this.updateFieldStyle(action.colSpan)
                break
            }
        }
    }
}

const formStore = new FormStore
dispatcher.register(formStore.handleActions.bind(formStore))

export default formStore