import { connect } from '@wp-g2/context';
import React from 'react';
import { Link } from 'react-router-dom';

import useNavigator from './useNavigator';
import useQuery from './useQuery';

function NavigatorLink({
	as,
	children,
	forwardedRef,
	href,
	params,
	to,
	...props
}) {
	const query = useQuery();
	const navigator = useNavigator();

	if (!to) {
		return (
			<a href={href || '#'} ref={forwardedRef} {...props}>
				{children}
			</a>
		);
	}

	let nextLocation;
	query.set(to);

	if (params) {
		nextLocation = {
			...params,
			search: query.toString(),
		};
	} else {
		nextLocation = {
			...navigator.location,
			search: query.toString(),
		};
	}

	return (
		<Link component={as} to={nextLocation} {...props} ref={forwardedRef}>
			{children}
		</Link>
	);
}

export default connect(NavigatorLink);
