import React from 'react';
import Header from  './Header'
import Toolbar from "./Toolbar"
import GridView from "./GridView"

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div class="container-fluid ">
                    <div class="row">
                        <Toolbar/>
                        <GridView/>
                    </div>
                </div>
            </div>
        );
    }
}