import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';

export default class SideNav extends Component {

    constructor(props) {
        super();
    }

    render() {
        let drawCategories = categories => {

            return categories.map(item => (
                    <ListItem key={item.id}
                              onClick={(event) => {
                                  event.preventDefault();
                                  event.stopPropagation();
                                  this.props.onChooseCategory(item)
                              }}
                              primaryText={item.name}
                              nestedItems={item.categories && drawCategories(item.categories)}
                    />
                )
            );
        };
        return (<div className="side-nav">
            <List>
                {this.props.categories ? drawCategories(this.props.categories) : null}
            </List>
        </div>);
    }
}