import { Menu as ReakitMenu, useMenuState } from '@wp-g2/a11y';
import { connect } from '@wp-g2/context';
import { cx } from '@wp-g2/styles';
import React from 'react';

import { MenuContext } from './Menu.Context';
import * as styles from './Menu.styles';

function Menu({ children, className, forwardedRef, menu: menuProp, ...props }) {
	const baseMenuState = useMenuState({ visible: true });
	const menu = menuProp || baseMenuState;
	const contextProps = {
		menu,
	};

	const classes = cx([styles.Menu, className]);

	return (
		<MenuContext.Provider value={contextProps}>
			<ReakitMenu
				hideOnClickOutside={false}
				{...menu}
				{...props}
				className={classes}
				ref={forwardedRef}
			>
				{children}
			</ReakitMenu>
		</MenuContext.Provider>
	);
}

export default connect(Menu);
