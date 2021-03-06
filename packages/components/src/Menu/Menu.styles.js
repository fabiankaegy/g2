import { css, get } from '@wp-g2/styles';

export const Menu = css`
	outline: none;
`;

export const MenuItem = css`
	appearance: none;
	background: none;
	border: none;
	border-radius: 6px;
	color: ${get('colorText')};
	cursor: pointer;
	display: block;
	outline: none;
	padding: 8px 12px;
	text-align: left;
	text-decoration: none;
	width: 100%;

	&:focus {
		background: ${get('controlBackgroundColor')};
		box-shadow: none;
	}

	&:active {
		background: ${get('controlBackgroundDimColor')};
	}
`;
