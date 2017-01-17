import React from 'react';
import Header from './Header'
import Toolbar from "./Toolbar"
import GridView from "./GridView"

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div class="container-fluid ">
                    <div class="row">
                        <Toolbar className="col-sm-2 agz-toolbar"/>
                        <GridView className="col-sm-10 agz-gridView"/>
                    </div>
                </div>
            </div>
        );
    }
}