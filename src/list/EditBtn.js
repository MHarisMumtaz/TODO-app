import React from 'react';

const EditBtn = (props) => {
		return (
				<button className="btn btn-default btn-sm shiftRight" onClick={() => props.callBack(props.item) }>
			          <span className="glyphicon glyphicon-edit"></span> Edit
			    </button>
		);
}

export default EditBtn;