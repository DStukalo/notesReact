import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './404.module.css';

export function NotFoundPage() {
	useEffect(() => {
		document.title = '404 || Not Found';
	}, []);

	return (
		<article className={styles.container}>
			<div className={styles.content}>
				<h2 className={styles.title}>This page Not Found.</h2>
				<p className={styles.description}>
					You can go to the
					<span className={styles.link}>
						<NavLink to="/"> main page</NavLink>
					</span>
				</p>
			</div>
		</article>
	);
}
