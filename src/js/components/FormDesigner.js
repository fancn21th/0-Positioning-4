import React from 'react'
import $ from 'jquery'
import ViewPart from './gridView/ViewPart'
import FormStore from '../stores/FormStore'
import * as FormActions from '../actions/FormActions'
import 'jquery-ui/ui/widgets/droppable'

export default class FormDesigner extends React.Component {

    constructor(){
        super()
        this.getForm = this.getForm.bind(this)
        this.state = {
            form: FormStore.getForm()
        }
    }

    getForm(){
        this.setState({
            form: FormStore.getForm()
        })
    }

    rendeDroppable = () => {
        // 当draggable落在droppable上
        $("#formDesigner").droppable({
            drop: function(event, ui) {
                FormActions.createField()
            }
        })
    }

    componentDidMount = () => {
        this.rendeDroppable()
    }

    componentWillMount() {
        FormStore.on("CREATE_FIELD_EVT", this.getForm)
        FormActions.recieveForm(null)
    }

    componentWillUnmount() {
        FormStore.removeListener("CREATE_FIELD_EVT", this.getForm);
    }

    render() {
        const singleColClassName = "col-lg-3 col-md-4 col-sm-6 agz-viewPart"
        const twoColClassName = "col-lg-6 col-md-6 col-sm-12 agz-viewPart"
        const threeColClassName = "col-lg-9 col-md-12 col-sm-12 agz-viewPart"
        const fourColClassName = "col-lg-12 col-md-12 col-sm-12 agz-viewPart"

        const classNameList = [
            singleColClassName,
            twoColClassName,
            threeColClassName,
            fourColClassName
        ];

        const viewParts = this.state.form.fields.map((field) => {
            return <ViewPart index={field.id}
                             key={field.id}
                             className={classNameList[field.colSpan - 1]}/>
        });

        return (
            <div id="formDesigner" class={this.props.className}>
                <div class="row">
                    {viewParts}
                </div>
            </div>
        );
    }
}