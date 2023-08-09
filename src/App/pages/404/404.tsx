import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function NotFoundPage() {
	useEffect(() => {
		document.title = '404 || Not Found';
	}, []);

	return (
		<article className="mx-auto my-0 p-8 w-[1240px] min-h-[100dvh] text-secondary-200">
			<div className=" flex flex-col gap-4">
				<h2 className="text-center text-3xl font-bold tracking-wider">
					This page Not Found.
				</h2>
				<p className="text-center text-2xl font-bold tracking-wider">
					You can go to the
					<span className="text-error hover:text-primary-300 hover:underline">
						<NavLink to="/"> main page</NavLink>
					</span>
				</p>
			</div>
		</article>
	);
}
