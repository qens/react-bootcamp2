import React, {Component} from 'react';
import {List, ListItem} from '../common/list/list';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import NavigationExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import {IconButton} from "material-ui";

export default class SideNav extends Component {

    constructor(props) {
        super();
    }


    drawCategories(categories) {
        return categories.map(item => {
                return <ListItem key={item.id}
                                 onClick={(event) => {
                                     event.preventDefault();
                                     event.stopPropagation();
                                     this.props.onChooseCategory(item)
                                 }}
                                 nestedItems={item.categories && this.drawCategories(item.categories)}
                ><span>{item.name}</span><IconButton><ContentAddCircleOutline onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.debug('add category')
                }}/></IconButton>
                </ListItem>
            }
        );
    }

    render() {
        return (<div className="side-nav">
            <List>
                {this.props.categories ? this.drawCategories(this.props.categories) : null}
            </List>
        </div>);
    }
}