import dispatcher from '../dispatcher'

export function selectField(id){
    dispatcher.dispatch({
        type: "SELECT_FIELD",
        id: id
    })
}