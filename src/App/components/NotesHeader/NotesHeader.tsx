import { SvgSprite } from '~components/SvgSprite/SvgSprite';

export function NotesHeader() {
	return (
		<header className="p-3 w-[1240px] min-h-[40px] bg-secondary-100 text-tertiary-100 text-start w">
			<ul className="p-0 flex gap-4">
				<li className="w-16 list-none" />
				<li className=" w-48 list-none">Name</li>
				<li className=" w-48 list-none">Created</li>
				<li className=" w-48 list-none">Category</li>
				<li className=" w-48 list-none">Content</li>
				<li className=" w-48 list-none">Dates</li>
				<li className=" w-48 flex justify-end list-none">
					<SvgSprite
						file="icons"
						id="directory-close"
						classes="w-5 h-5 fill-tertiary-100"
					/>
					<SvgSprite
						file="icons"
						id="bin"
						classes="w-5 h-5 fill-tertiary-100"
					/>
				</li>
			</ul>
		</header>
	);
}
