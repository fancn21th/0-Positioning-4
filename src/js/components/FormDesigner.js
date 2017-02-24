import React from 'react';
import ViewPart from './gridView/ViewPart';
import _ from 'lodash';

export default class FormDesigner extends React.Component {

    state = {

    }

    render() {
        // one column
        // two column
        // three column
        // four column
        const fourColLayoutSingleColClassName = "col-lg-3 col-md-4 col-sm-6 agz-viewPart";
        const fourColLayoutTwoColClassName = "col-lg-6 col-md-6 col-sm-12 agz-viewPart";
        const fourColLayoutThreeColClassName = "col-lg-9 col-md-12 col-sm-12 agz-viewPart";
        const fourColLayoutFourColClassName = "col-lg-12 col-md-12 col-sm-12 agz-viewPart";

        const classNameList = [
            fourColLayoutSingleColClassName,
            fourColLayoutTwoColClassName,
            fourColLayoutThreeColClassName,
            fourColLayoutFourColClassName];
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const viewParts = numbers.map((number) =>
            <ViewPart index={number}
                      key={number}
                      className={classNameList[_.random(0, 3)]}/>
        );

        return (
            <div class={this.props.className}>
                <div class="row">
                    {viewParts}
                </div>
            </div>
        );
    }
}