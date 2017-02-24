import dispatcher from "../dispatcher"

export function getForm(formId){
    setTimeout(() => {
        dispatcher.dispatch({type: "RECEIVE_FORM", form: {
            fields: [
                {
                    id: 8484848484,
                    text: "Test Text 1",
                    colSpan: 2
                },
                {
                    id: 6262627272,
                    text: "Test Text 2",
                    colSpan: 3
                },
            ]
        }});
    }, 1000);
}