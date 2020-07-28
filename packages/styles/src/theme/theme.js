import {
	transformValuesToReferences,
	transformValuesToVariables,
	transformValuesToVariablesString,
} from './utils';

const ANIMATION_PROPS = {
	transitionDuration: '200ms',
	transitionDurationFast: '120ms',
	transitionDurationFaster: '100ms',
	transitionTimingFunction: 'cubic-bezier(0.08, 0.52, 0.52, 1)',
	transitionTimingFunctionControl: 'cubic-bezier(0.12, 0.8, 0.32, 1)',
};

const G2_COLORS = {
	black: '#000000',
	blueberry: '#3858E9',
	blueberryDark: '#1D35B4',
	greens: '#33F078',
	grey: '#40464D',
	greyBlack: '#1E1E1E',
	lightBlue: '#33F078',
	lightGrey: '#40464D',
	lighterGrey: '#dddddd',
	pomegrade: '#E26F56',
	white: '#ffffff',
};

const COLOR_PALETTE = {
	brand: G2_COLORS.blueberry,
	destructive: G2_COLORS.pomegrade,
	positive: G2_COLORS.greens,
};

const COLOR_PROPS = {
	colorBodyBackground: G2_COLORS.white,
	colorBodyBackgroundDark: '#18191A',
	colorBrand: COLOR_PALETTE.brand,
	colorDivider: 'rgba(0, 0, 0, 0.1)',
	colorScrollbarThumb: 'rgba(0, 0, 0, 0.2)',
	colorScrollbarThumbHover: 'rgba(0, 0, 0, 0.5)',
	colorScrollbarTrack: 'rgba(0, 0, 0, 0.04)',
	colorText: '#050505',
	colorTextInverted: '#fff',
};

const CONTROL_PROPS = {
	controlBackgroundSubtleColor: 'rgba(0, 0, 0, 0.05)',
	controlBorderColor: 'rgba(0, 0, 0, 0.9)',
	controlBorderSubtleColor: 'rgba(0, 0, 0, 0.5)',
};

const FONT_PROPS = {
	fontFamily:
		'Cabin,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif',
};

const GRID_PROPS = {
	gridBase: 4,
};

const SURFACE_PROPS = {
	surfaceBackgroundColor: '#EFEFF3',
	surfaceBorder: 'rgba(0, 0, 0, 0.06)',
	surfaceColor: '#fff',
};

const DARK_MODE_PROPS = {
	colorDivider: 'rgba(255, 255, 255, 0.1)',
	colorScrollbarThumb: 'rgba(255, 255, 255, 0.2)',
	colorScrollbarThumbHover: 'rgba(255, 255, 255, 0.5)',
	colorScrollbarTrack: 'rgba(0, 0, 0, 0.04)',
	colorText: '#E4E6EB',
	colorTextInverted: '#050505',
	controlBackgroundSubtleColor: 'rgba(255, 255, 255, 0.05)',
	controlBorderColor: 'rgba(255, 255, 255, 0.9)',
	controlBorderSubtleColor: 'rgba(255, 255, 255, 0.5)',
	surfaceBackgroundColor: COLOR_PROPS.colorBodyBackgroundDark,
	surfaceBorder: 'rgba(255, 255, 255, 0.1)',
	surfaceColor: '#292929',
};

export const BASE_THEME = {
	...G2_COLORS,
	...COLOR_PALETTE,
	...COLOR_PROPS,
	...CONTROL_PROPS,
	...FONT_PROPS,
	...SURFACE_PROPS,
	...ANIMATION_PROPS,
	...GRID_PROPS,
};

export const DARK_THEME = {
	...DARK_MODE_PROPS,
};

export const THEME = transformValuesToReferences(BASE_THEME);
export const GLOBAL_VARIABLES = transformValuesToVariables(BASE_THEME);
export const GLOBAL_CSS_VARIABLES = transformValuesToVariablesString(
	':root',
	BASE_THEME,
);

export const GLOBAL_DARK_MODE_CSS_VARIABLES = transformValuesToVariablesString(
	'[data-system-ui-mode="dark"]',
	DARK_MODE_PROPS,
);
