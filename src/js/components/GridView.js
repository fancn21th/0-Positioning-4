import React from 'react';
import ViewPart from './gridView/ViewPart';
import _ from 'lodash';

export default class GridView extends React.Component {
    render() {
        const oneColClassName = "col-lg-3 col-md-4 col-sm-6 agz-viewPart";
        const twoColClassName = "col-lg-6 col-md-6 col-sm-12 agz-viewPart";
        const threeColClassName = "col-lg-9 col-md-12 col-sm-12 agz-viewPart";
        const classNameList = [oneColClassName, twoColClassName, threeColClassName];
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const viewParts = numbers.map((number) =>
            <ViewPart index={number}
                      key={number} // key 属性是为了解决报警问题
                      className={classNameList[_.random(0,2)]}/>
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