import React from 'react';
import ListItem from './ListItem';

const MainList = (props) => {
	
	return (
		  <ul className="list-group">
           	{props.items.map(item => <ListItem key={item.id} item={item} onEditClick={props.editCallBack} onRemoveClick={props.removeCallBack} />)}
          </ul>
	);
}

export default MainList;