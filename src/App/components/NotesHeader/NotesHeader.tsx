import { SvgSprite } from '~components/SvgSprite/SvgSprite';

import styles from './NotesHeader.module.css';

export function NotesHeader() {
	return (
		<header className={styles.header}>
			<ul className={styles.header_list}>
				<li className={styles.header_logo} />
				<li className={styles.header_item}>Name</li>
				<li className={styles.header_item}>Created</li>
				<li className={styles.header_item}>Category</li>
				<li className={styles.header_item}>Content</li>
				<li className={styles.header_item}>Dates</li>
				<li className={styles.header_icons}>
					<SvgSprite file="icons" id="directory-close" classes={styles.icon} />
					<SvgSprite file="icons" id="bin" classes={styles.icon} />
				</li>
			</ul>
		</header>
	);
}
