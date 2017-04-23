import React, {Component} from 'react';
import {List, ListItem} from '../../../common/list/list';
import {FlatButton, TextField} from "material-ui";
import Category from "../../../common/category/category";
import {AddEditCategory} from "../../../common/category/add-edit-category";
import './category-list.css';
import {Link} from "react-router";
import CategoryToMove from "../../../common/category/category-to-move";

export const CategoryListMode = {
    full: 0,
    toMove: 1
};

export class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode || CategoryListMode.full,
            categoryIsAddingTo: null
        };

        this.addToCategory = this.addToCategory.bind(this);
    }

    drawAddCategory(categories) {
        let textField;
        return <span>
            <TextField hintText="Input category name" ref={(field) => textField = field}/>
            <FlatButton label="Add" onClick={() => {
                console.debug(textField);
                this.props.addCategory(textField.input.value, this.props.categories);
                textField.input.value = '';
            }}/>
        </span>
    }

    drawNestedAddCategory(item) {
        return <span key="-1">
            <AddEditCategory
                addCategory={(value) => {
                    this.props.addCategory(value, item.categories, item);
                    this.setState({categoryIsAddingTo: null});
                }}
                cancel={() => this.setState({categoryIsAddingTo: null})}/>
        </span>
    }

    addToCategory(categoryId) {
        this.setState({categoryIsAddingTo: categoryId});
    }

    drawCategory(item, categories) {
        return this.state.mode === CategoryListMode.toMove ?
            <CategoryToMove category={item} move={this.props.move}/>
            : <Link to={`/list/${item.id}`}>
                <Category category={item}
                          removeCategory={() => this.props.removeCategory(item, categories)}
                          addToCategory={this.addToCategory}
                          editCategory={value => this.props.editCategory(value, item)}/></Link>;
    }

    drawCategories(categories) {
        return categories.map(item => {
                let nestedItems = [];
                if (item.id === this.state.categoryIsAddingTo) {
                    nestedItems.push(this.drawNestedAddCategory(item));
                }
                if (item.categories) {
                    Array.prototype.push.apply(nestedItems, this.drawCategories(item.categories));
                }

                return <ListItem key={item.id}
                                 selected={this.props.chosenCategoryId === item.id}
                                 open={item.id === this.state.categoryIsAddingTo || this.props.mode === CategoryListMode.toMove}
                                 nestedItems={nestedItems && nestedItems.length ? nestedItems : null}
                > {this.drawCategory(item, categories)}
                </ListItem>
            }
        );
    }

    render() {
        return (<div className="category-list">
            {this.state.mode === CategoryListMode.full ? this.drawAddCategory(this.props.categories) : null}
            <List>
                {this.props.categories ? this.drawCategories(this.props.categories) : null}
            </List>
        </div>);
    }


}