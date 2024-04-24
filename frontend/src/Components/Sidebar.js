import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../Styles/Sidebar.css';

import { ReactComponent as OrganizeIcon } from '../Art/organizeIcon.svg';
import { ReactComponent as LearnIcon } from '../Art/learnIcon.svg';
import { ReactComponent as ForumsIcon } from '../Art/forumsIcon.svg';
import { ReactComponent as GroupsIcon } from '../Art/groupsIcon.svg';

const Sidebar = ({ user }) => {
  const location = useLocation();
  const url = location.pathname;
  const [pageName, setPageName] = useState('');

  useEffect(() => {
    setPageName(url.split('/')[1]);
  }, [url]);


  const Links = () => {
    if (!user) {
      return (
        <div className="sidebar">
          <Link className={`sidebar-link learn-link ${(pageName == 'learn') ? 'active' : ''}`} to="/learn">
            <LearnIcon className="sidebar-icon icon" />
            Learn
          </Link>
          <Link className={`sidebar-link forums-link ${(pageName == 'forums') ? 'active' : ''}`} to="/forums">
            <ForumsIcon className="sidebar-icon icon" />
            Forums
          </Link>
        </div>
      );
    } else {
      return (
        <div className="sidebar">
          <Link className={`sidebar-link forums-link ${pageName == 'forums' ? 'active' : ''}`} to="/forums">
            <ForumsIcon className="sidebar-icon icon" />
            Forums
          </Link>
          <Link className={`sidebar-link groups-link ${pageName == 'groups' ? 'active' : ''}`} to="/groups">
            <GroupsIcon className="sidebar-icon icon" />
            Groups
          </Link>
          <Link className={`sidebar-link learn-link ${pageName == 'learn' ? 'active' : ''}`} to="/learn">
            <LearnIcon className="sidebar-icon icon" />
            Learn
          </Link>
          <Link className={`sidebar-link organize-link ${pageName == 'organize' ? 'active' : ''}`} to="/organize">
            <OrganizeIcon className="sidebar-icon icon" />
            Organize
          </Link>
        </div>
      );
    }
  }

  return (
    <Links />
  );
};

export default Sidebar;
