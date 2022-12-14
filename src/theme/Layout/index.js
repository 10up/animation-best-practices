import React from 'react';
import Layout from '@theme-original/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { deleteCookie, getCookie } from '../../helper';
import { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function LayoutWrapper(props) {

	if (process.env.NODE_ENV === 'development') {
		return (
			<Layout {...props} />
		)
	}

	return <BrowserOnly fallback={<div>Authenticating...</div>}>
		{() => <VerifyLogin {...props} />}
	</BrowserOnly>;
}

function VerifyLogin(props) {
	const {
		siteConfig: { customFields: { homeUrl, googleSSOClientId, tenupSSOProxy } },
	} = useDocusaurusContext();

	const authCookie = getCookie('10up-sso-login');
	const hasCookie = !!authCookie;

	// assume that the user is logged in if they have the cookie
	// this assumption will get validated once the component is mounted and if incorrect the user will be logged out
	// this is not the most secure option but it prevents a jarring experience for the user when they are logged in
	const [isAuthenticated, setIsAuthenticated] = useState(hasCookie);

	useEffect(() => {
		if (hasCookie) {
			const { nonce, email } = authCookie;

			const verificationUrl = new URL(tenupSSOProxy);
			verificationUrl.searchParams.set('action', '10up-verify');
			verificationUrl.searchParams.set('nonce', nonce);
			verificationUrl.searchParams.set('email', email);

			fetch(verificationUrl).then((response) => {
				if (response.status === 200) {
					setIsAuthenticated(true);
				} else {
					console.error('Login verification failed');
					deleteCookie('10up-sso-login');
				}
			});
		}
	}, [authCookie, tenupSSOProxy, setIsAuthenticated]);

	function redirectToLogin() {
		const returnUrl = new URL(`${homeUrl}login`);
		returnUrl.searchParams.set('return_to', window.location.href);

		const ssoUrl = new URL(tenupSSOProxy);
		ssoUrl.searchParams.set('action', '10up-login');

		const loginUrl = new URL('https://accounts.google.com/o/oauth2/auth/oauthchooseaccount');
		loginUrl.searchParams.set('response_type', 'code');
		loginUrl.searchParams.set('access_type', 'online');
		loginUrl.searchParams.set('client_id', `${googleSSOClientId}.apps.googleusercontent.com`);
		loginUrl.searchParams.set('redirect_uri', ssoUrl);
		loginUrl.searchParams.set('state', returnUrl);
		loginUrl.searchParams.set('scope', 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile');
		loginUrl.searchParams.set('flowName', 'GeneralOAuthFlow');

		window.location.replace(loginUrl);
	}


	if (!hasCookie || !isAuthenticated) {
		redirectToLogin();

		// ensure that the page is not rendered for non logged in users
		return null;
	}

	return (
		<Layout {...props} />
	);
}
