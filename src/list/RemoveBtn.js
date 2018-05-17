import React from 'react';

const RemoveBtn = (props) => {
	return (
			<button type="button" className="btn btn-default btn-sm shiftRight" onClick={()=>props.callBack(props.item)}>
	          <span className="glyphicon glyphicon-remove-circle"></span> Remove
	        </button>
	);
}

export default RemoveBtn;