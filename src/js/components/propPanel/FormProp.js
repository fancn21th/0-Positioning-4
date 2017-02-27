import React from 'react'

export default class FormProp extends React.Component {

    render() {
        return (
            <div>
                <ul class="nav nav-tabs">
                    <li role="presentation" class="active"><a href="#">表单属性</a></li>
                </ul>
                <br/>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default">独占模式（一列）</button>
                    <button type="button" class="btn btn-primary">普通模式（四列）</button>
                </div>
            </div>
        )
    }
}
