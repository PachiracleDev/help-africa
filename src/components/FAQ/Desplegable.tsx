import { useState } from "react";

import { motion } from "framer-motion";

function Desplegable({
	index,
	title,
	content,
}: {
	index: number;
	title: string;
	content: string;
}) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="panel panel-default single-my-account">
			<div
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center justify-between px-4 cursor-pointer p-2 my-account-title"
			>
				<h3 className="text-sm flex    items-center gap-3">
					<span>{index} .</span>
					<p className="text-primaryCol">{title}</p>
				</h3>
				<i
					className={`fas fa-chevron-${isOpen ? "up" : "down"} text-primaryCol`}
				></i>
			</div>
			<motion.div
				id="my-account-1"
				className="panel-collapse collapse show"
				initial={{ height: 0 }}
				animate={{ height: isOpen ? "auto" : 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="panel-body">{content}</div>
			</motion.div>
		</div>
	);
}

export default Desplegable;
