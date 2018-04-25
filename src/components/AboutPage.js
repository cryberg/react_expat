import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        This is a demo application for React and Redux.
      </p>
      <p>
        See the code:
      </p>
      <ul>
        <li>Github link here</li>
        <li>Bitbucket link here</li>
        <li>Api Used: <a href="https://www.apixu.com/api.aspx" target="_blank" rel="noopener noreferrer">APIUX Weather</a></li>
      </ul>
      <p>
        Improvements To-do list:
      </p>
      <ul>
        <li>Automatically refresh stale data</li>
        <li>Include the local time for each location</li>
        <li>Use the GoogleMaps API to automatically load the weather at your current location</li>
        <li>Allow the user to get the hourly forecase by clicking on a saved location</li>
        <li>Fix the content showing before the CSS is loaded</li>
        <li>Clean up any unusued dependancies</li>        
      </ul>

      <p>
        Things I&apos;d do differently:
      </p>
      <ul>
        <li>Pick a different Weather API. This one, at the free level, does not allow for batch calls</li>
        <li>Include the local time for each location</li>
        <li></li>
        <li></li>
      </ul>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default AboutPage;
