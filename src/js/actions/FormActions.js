import dispatcher from "../dispatcher"
import _ from 'lodash'

export function getForm(formId){
    setTimeout(() => {
        dispatcher.dispatch({type: "RECEIVE_FORM", form: {
            fields: [1,2,3,4,5,6,7,8].map((idx)=>{
                return {
                    id: Date.now()+ idx,
                    text: 'Test Text ' + idx,
                    colSpan: _.random(1, 4),
                    type: 'textbox'
                }
            })
        }});
    }, 1000);
}

export function selectField() {
    
}