import React, {Component} from 'react';

export default class SideNav extends Component {

    constructor(props) {
        super();
    }

    render() {
        let drawCategories = categories => {
            return (
                <ul>
                    {categories.map(item => (
                        <li key={item.id} onClick={()=>{this.props.onChooseCategory(item)}}>
                            {item.name}
                            {item.categories && drawCategories(item.categories)}
                        </li>
                    ))}
                </ul>
            );
        };
        return (<div>
            {this.props.categories ? drawCategories(this.props.categories) : null}
        </div>);
    }
}