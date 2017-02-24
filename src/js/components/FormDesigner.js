import React from 'react';
import ViewPart from './gridView/ViewPart';
import _ from 'lodash';
import FormStore from '../stores/FormStore'
import * as FormActions from '../actions/FormActions'

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

    componentWillMount() {
        FormStore.on("change", this.getForm)
        FormActions.getForm(null)
    }

    componentWillUnmount() {
        FormStore.removeListener("change", this.getForm);
    }

    render() {
        const singleColClassName = "col-lg-3 col-md-4 col-sm-6 agz-viewPart";
        const twoColClassName = "col-lg-6 col-md-6 col-sm-12 agz-viewPart";
        const threeColClassName = "col-lg-9 col-md-12 col-sm-12 agz-viewPart";
        const fourColClassName = "col-lg-12 col-md-12 col-sm-12 agz-viewPart";

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
            <div class={this.props.className}>
                <div class="row">
                    {viewParts}
                </div>
            </div>
        );
    }
}