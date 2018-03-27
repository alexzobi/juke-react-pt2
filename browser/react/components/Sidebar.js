import React from 'react';
import { NavLink } from 'react-router-dom';



const Sidebar = (props) => {

  // const addClass = (match, location) => {
  //   if (match) {
  //     this.setState({className: 'active'});
  //   }
  // }

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <NavLink to="/albums" activeClassName='active'>ALBUMS</NavLink>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <NavLink to="/artists" activeClassName='active'>ARTISTS</NavLink>
        </h4>
      </section>

    </sidebar>
  );
}

export default Sidebar;
