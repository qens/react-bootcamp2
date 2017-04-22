import React, {Component} from 'react';
import {List, ListItem} from '../common/list/list';
import {FlatButton, TextField} from "material-ui";
import Category from "../common/category/category";
import {AddEditCategory} from "../common/category/add-edit-category";

export default class SideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
                                 onClick={(event) => {
                                     event.preventDefault();
                                     event.stopPropagation();
                                     this.props.onChooseCategory(item)
                                 }}
                                 open={item.id === this.state.categoryIsAddingTo}
                                 nestedItems={nestedItems && nestedItems.length ? nestedItems : null}
                ><Category category={item}
                           removeCategory={() => this.props.removeCategory(item, categories)}
                           addToCategory={this.addToCategory}
                           editCategory={value=> this.props.editCategory(value, item)}/>
                </ListItem>
            }
        );
    }

    render() {
        return (<div className="side-nav">
            {this.drawAddCategory(this.props.categories)}
            <List>
                {this.props.categories ? this.drawCategories(this.props.categories) : null}
            </List>
        </div>);
    }
}