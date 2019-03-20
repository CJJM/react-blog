import React, { Component } from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = props => {
  return (
    <div class="sidebar">
      <h2>Related</h2>

      <ul>
        {props.linkNames.map(l => <SidebarItem key={l.id} link={l.name} />)}
      </ul>
    </div>
  );
}


export default Sidebar;
