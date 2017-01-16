import React from 'react';

export default class GridView extends React.Component {
    render() {
        return (
            <div class="col-sm-9 agz-gridView">
                <div class="row">
                    <div class="col-sm-3 agz-viewPart"></div>
                    <div class="col-sm-3 agz-viewPart"></div>
                    <div class="col-sm-3 agz-viewPart"></div>
                    <div class="col-sm-3 agz-viewPart"></div>
                </div>
            </div>
        );
    }
}