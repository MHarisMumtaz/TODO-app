import React from 'react';
import EditBtn from './EditBtn';
import RemoveBtn from './RemoveBtn';

const ListItem = (props) => {
		return (
			<li className="list-group-item listHeight"> 
				<input type="checkbox" className="pull-left chkboxMargin" /> 
				<p className="itemTitle">{props.item.title}</p>
				<EditBtn item={props.item} callBack={props.onEditClick} />
		        <RemoveBtn item={props.item} callBack={props.onRemoveClick} />
			</li>
		);
}

export default ListItem;