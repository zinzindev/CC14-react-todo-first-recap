// import { useState } from 'react';

function App() {
	const Cards = ({ title }) => (
		<div
			role='button'
			className='w-[300px] h-[100px] shadow-md hover:shadow-white text-white flex justify-center rounded-lg select-none cursor-pointer active:shadow-inner'
			children={title}
		/>
	);

	const topic = [
		'components',
		'props',
		'Import & Export',
		'Function & Trigger',
		'Event Target',
		'useState',
		'rerender effect',
		'Promise object',
		'Resolve Reject',
		'then catch',
		'async await',
		'try catch',
		'error object',
		'fetch',
		'axios',
		'useEffect',
		'useContext',
	];

	const fn1 = (item, index, array) => {
		// console.log(item, 'fn');
		// return 'arr1';
		// return item;
		// return item * 10;
		return <Cards title={item} />;
	};
	// const arr1 = [<Cards title={'test1'} />, <Cards title={'test2'} />, <Cards title={'test3'} />];
	// const arr1 = ['a', 'b', 'c', 'd'];
	const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	// const arr2 = arr1.map(() => 'array');
	const arr2 = arr1.map(fn1);
	console.log(arr2);

	return (
		<div className='w-screen h-screen flex flex-col item-center items-center gap-4 bg-slate-700 py-20 '>
			{/* {arr1} */}
			{/* {arr2} */}
			{/* {arr1.map(fn1)} */}

			{topic.map((i, d) => (
				<Cards key={d} title={i} />
			))}
		</div>
	);
}

export default App;
