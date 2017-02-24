import React from 'react';
import Header from './Header'
import Toolbar from './Toolbar'
import FormDesigner from './FormDesigner'
import PropPanel from './PropPanel'

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <div class="container-fluid ">
                    <div class="row">
                        <Toolbar className="col-sm-2 agz-toolbar"/>
                        <FormDesigner className="col-sm-8 agz-gridView"/>
                        <PropPanel className="col-sm-2 agz-gridView"/>
                    </div>
                </div>
            </div>
        );
    }
}