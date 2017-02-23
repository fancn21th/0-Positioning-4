import React from 'react'

export default class FieldProp extends React.Component {

    render() {
        return (
            <div>
                <ul class="nav nav-tabs">
                    <li role="presentation" class="active"><a href="#">字段属性</a></li>
                </ul>
                <br/>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default">单列</button>
                    <button type="button" class="btn btn-default">两列</button>
                    <button type="button" class="btn btn-default">三列</button>
                    <button type="button" class="btn btn-primary">四列</button>
                </div>
            </div>
        )
    }
}
