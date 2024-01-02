// Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faBuilding, faBook, faTags, faUsers, faMedal, faEdit, faExchangeAlt, faInbox } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebars">
        <FontAwesomeIcon icon={faQuestionCircle} /> <span>Questions</span>
      </div>
      <div className="sidebars">
        <FontAwesomeIcon icon={faBuilding} /> <span>Jobs</span>
      </div>
      <div className="sidebars">
        <FontAwesomeIcon icon={faBook} /> <span>Documentation</span>
      </div>
      <div className="sidebars">
        <FontAwesomeIcon icon={faTags} /> <span>Tags</span>
      </div>
      <div className="sidebars">
        <FontAwesomeIcon icon={faUsers} /> <span>Users</span>
      </div>
      <div className="sidebars">
        <FontAwesomeIcon icon={faMedal} /> <span>Badges</span>
      </div>
      <div className="sidebars">
        <FontAwesomeIcon icon={faEdit} /> <span>Ask Question</span>
      </div>
      <div className="sidebars">
        <FontAwesomeIcon icon={faExchangeAlt} /> <span>Stack Exchange</span>
      </div>
      <div className="sidebars">
        <FontAwesomeIcon icon={faInbox} /> <span>Inbox</span>
      </div>
    </div>
  );
};

export default Sidebar;
