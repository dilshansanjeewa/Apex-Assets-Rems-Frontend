import React from 'react';
import '../components/css/SecondaryNav.css'

function SecondaryNav() {
    return (
        <>
        <nav className="navbar navbar-expand-lg secondary-nav px-4">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        {/* Left Side: Category + Search Bar */}
        <div className="search-group d-flex align-items-center">
          <div className="input-group">
            {/* Category Dropdown */}
            <select className="form-select category-select" defaultValue="All">
              <option value="All">All</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Land">Land</option>
            </select>
            
            {/* Search Input */}
            <input 
              type="text" 
              className="form-control search-input" 
              placeholder="Search Properties" 
            />
            
            {/* Search Button */}
            <button className="btn btn-search-icon" type="button">
              <i className="bi bi-search text-white"></i> {/* Use Bootstrap Icons or FontAwesome */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </div>
        </div>

        {/* Middle/Right: Action Buttons */}
        <div className="navbar-collapse collapse justify-content-end" id="secondaryNavbar">
          <ul className="navbar-nav me-4 action-buttons">
            <li className="nav-item"><a className="nav-link" href="#">List New</a></li>
            <li className="nav-item"><a className="nav-link" href="#">My Listings</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Inquiries</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Bookings</a></li>
          </ul>
        </div>

        {/* Right Side: Notification Icon */}
        <div className="notification-wrapper">
          <div className="notification-icon">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A2342" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            <span className="badge-dot"></span>
          </div>
        </div>

      </div>
    </nav>
        </>
    )
}

export default SecondaryNav;