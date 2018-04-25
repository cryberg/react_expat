import React from 'react';

const AboutPage = () => {
	return (
	<div>
		<h2 className="alt-header">About</h2>
		<p>
			This is a demo application for React and Redux.
		</p>
		<h3>See the code:</h3>
		<ul>
			<li><a href="https://github.com/cryberg/react_expat" target="_blank" rel="noopener noreferrer">Github</a></li>
			<li>Bitbucket link here</li>
			<li>Api Used: <a href="https://www.apixu.com/api.aspx" target="_blank" rel="noopener noreferrer">APIUX Weather</a></li>
		</ul>
		<h3>Improvements To-do list:</h3>
		<ul>
			<li>Automatically refresh stale data</li>
			<li>Improve the unit test coverage</li>
			<li>Use the GoogleMaps API to automatically load the weather at your current location</li>
			<li>Include the local time for each location</li>
			<li>Allow the user to get the hourly forecast by clicking on a saved location</li>
			<li>Fix the content showing before the CSS is loaded</li>
		</ul>

		<h3>Things I&apos;d do differently:</h3>
		<ul>
			<li>Pick a different Weather API. This one, at the free level, does not allow for batch calls</li>
			<li>Rethink the structure for the store</li>
		</ul>
	</div>
	);
};

export default AboutPage;
