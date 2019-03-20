import React, { Component } from 'react';

const SidebarItem = props => {
  return (
    <li>
      <a classname="sidebar-item" href="#">{props.link}</a>
    </li>
  );
}


export default SidebarItem;
