export function SummaryHeader() {
	return (
		<header className="p-3 w-[1240px] min-h-10 bg-secondary-100 text-tertiary-100 text-left">
			<ul className="p-0 flex gap-4">
				<li className=" w-16 list-none" />
				<li className=" w-[420px] list-none">Note Category</li>
				<li className=" w-48 list-none">Active</li>
				<li className=" w-48 list-none">Archived</li>
			</ul>
		</header>
	);
}
