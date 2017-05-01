import React, {Component} from 'react';
import {List, ListItem} from '../../../common/list/list';

import CategoryToMove from "../../../common/category/category-to-move";

export class CategoryListToMove extends Component {

    constructor(props) {
        super(props);
    }

    drawCategory(item) {
        return <CategoryToMove category={item} move={this.props.move}/>;
    }

    drawCategories(categories) {
        return categories.map(item => {

                let nestedCategories = this.props.categories.filter(cat => cat.parentId === item.id);

                return <ListItem key={item.id}
                                 selected={this.props.categoryId === item.id}
                                 open={true}
                                 nestedItems={nestedCategories && nestedCategories.length
                                     ? this.drawCategories(nestedCategories) : null}
                > {this.drawCategory(item, categories)}
                </ListItem>
            }
        );
    }

    render() {
        return (<div className="category-list">
            <List>
                {this.props.categories ? this.drawCategories(this.props.categories.filter(cat => !cat.parentId)) : null}
            </List>
        </div>);
    }

}