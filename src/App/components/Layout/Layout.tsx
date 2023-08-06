import { NavLink, Outlet } from 'react-router-dom';

import styles from './Layout.module.css';

export function Layout() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<nav className={styles.navigation}>
					<ul className={styles.navigation_list}>
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									(isActive ? `${styles.active}` : `${styles.navigation_item}`)}
							>
								Main
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	);
}
