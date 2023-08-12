import { SvgSprite } from '~components/SvgSprite/SvgSprite';

export function setSvg(styles: string, type: string) {
	let iconId;

	if (type === 'Task') {
		iconId = 'cart';
	} else if (type === 'Random Thought') {
		iconId = 'head-gear';
	} else if (type === 'Quotes') {
		iconId = 'quotes';
	} else if (type === 'Idea') {
		iconId = 'light-bulb';
	} else {
		iconId = 'light-bulb';
	}

	return <SvgSprite file="icons" id={iconId} classes={styles} />;
}
