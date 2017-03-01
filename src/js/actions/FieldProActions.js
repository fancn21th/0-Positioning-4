import dispatcher from '../dispatcher'

export function changeFieldStyle(id, colSpan){
    dispatcher.dispatch({
        type: "CHANGE_FIELD_STYLE",
        colSpan: colSpan
    })
}