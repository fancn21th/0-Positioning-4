import dispatcher from '../dispatcher'

export function changeFieldStyle(colSpan){
    dispatcher.dispatch({
        type: "CHANGE_FIELD_STYLE",
        colSpan: colSpan
    })
}