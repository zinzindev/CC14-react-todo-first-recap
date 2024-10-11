import React, { useState } from 'react';

function Number(props) {
	console.log('Number');
	const [state, setState] = useState(10);
	const handleClick = () => {
		console.log('click');
		setState(state + 1);
	};

	return (
		<>
			<div>{state}</div>
			<button onClick={handleClick}>Add</button>
		</>
	);
}

export default Number;
