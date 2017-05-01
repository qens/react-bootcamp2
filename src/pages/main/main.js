import React, {Component} from 'react';

import Header from "./header/header";
import CategoryList from "./category-list/category-list";

export class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <Header {...this.props.params}/>
                <div className="content">
                    <div className="side-nav">
                        <CategoryList {...this.props.params} />
                    </div>
                    <article className="article">
                        {this.props.children}
                    </article>
                </div>
            </div>);
    }
}