import React, { Fragment } from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = props => {
  return (
    <Fragment>
      <h2>Related</h2>

      <ul>
        {props.linkNames.map(l => <SidebarItem key={l.id} link={l.name} />)}
      </ul>
    </Fragment>
  );
}


export default Sidebar;
