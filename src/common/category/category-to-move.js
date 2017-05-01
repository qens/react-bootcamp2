import React, {Component} from 'react';
import {IconButton} from "material-ui";
import NavigationSubdirectoryArrowLeft from 'material-ui/svg-icons/navigation/subdirectory-arrow-left';
import './category.css';

export default class CategoryToMove extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="category-block">
                <div>
                    <span>{this.props.category.name}</span>
                </div>
                <div>
                    <IconButton onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.debug('move category');
                        this.props.move(this.props.category.id);
                    }}><NavigationSubdirectoryArrowLeft /></IconButton>
                </div>
            </div>);
    }
}