import { NavLink, Outlet } from 'react-router-dom';

export function Layout() {
	return (
		<div className="flex flex-col min-h-screen font-arsenal">
			<header className="mb-5 p-2 min-h-8 bg-primary-200 text-lg">
				<nav>
					<ul className="list-none">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									(isActive ? 'text-tertiary-100 underline hover:cursor-default' : 'text-primary-300 hover:text-tertiary-100')}
							>
								Main
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main className="flex-grow overflow-x-hidden md:overflow-auto">
				<Outlet />
			</main>
		</div>
	);
}
