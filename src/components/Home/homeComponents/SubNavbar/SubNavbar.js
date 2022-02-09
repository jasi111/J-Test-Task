import React from 'react'

import './SubNavbar.css'

const SubNavbar = () => {
  return (
    <div>
      <p className="title-text">Explore Drops</p>

      <div className="menu-tabs clip-contents">
        <div className="menu-tab flex-row">
          <div className="components-menu-tab flex-col-hcenter-vcenter">
            <p className="creators flex-hcenter">Live</p>
          </div>
          <div className="components-menu-tab-1 flex-col-hcenter-vcenter">
            <p className="creators-1 flex-hcenter">Upcoming</p>
          </div>
          <div className="components-menu-tab-2 flex-col-hcenter-vcenter">
            <p className="tab1 flex-hcenter">Past</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubNavbar