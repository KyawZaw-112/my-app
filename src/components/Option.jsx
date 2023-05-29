import React from "react";

const Option = ({ changeBoard, boardOption }) => {
	const options = [
		{
			value: 9,
			text: "3x3",
		},
		{
			value: 16,
			text: "4x4",
		},
	];
	return (
		<div className="p-5 justify-between flex gap-4">
			{options.map(({ value, text }, index) => {
				const isCurrentStyle = boardOption === value;
				return (
					<button
						className="bg-blue-500 disabled:bg-blue-900 w-full py-5 rounded-md"
						key={index}
						onClick={() => changeBoard(value)}
                        disabled={isCurrentStyle}
					>
						{text}
					</button>
				);
			})}
		</div>
	);
};

export default Option;
