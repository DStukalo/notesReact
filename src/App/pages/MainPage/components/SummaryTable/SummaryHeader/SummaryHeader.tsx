import styles from './SummaryHeader.module.css';

export function SummaryHeader() {
	return (
		<header className={styles.header}>
			<ul className={styles.header_list}>
				<li className={styles.header_logo} />
				<li className={styles.header_name}>Note Category</li>
				<li className={styles.header_item}>Active</li>
				<li className={styles.header_item}>Archived</li>
			</ul>
		</header>
	);
}
