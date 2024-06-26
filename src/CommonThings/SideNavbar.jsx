import  { useState } from 'react';
import { FaBars, FaUser, FaTachometerAlt, FaList, FaTags, FaBox, FaChartBar, FaSignOutAlt, FaChevronDown, FaChartLine, FaWarehouse, FaClipboardList, FaUndoAlt, FaCashRegister, FaTruck } from 'react-icons/fa';
import '../Css/sidenavbar.css';

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <div className="app-container">
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className={`brand-name ${isOpen ? '' : 'collapsed'}`}>BrandName</div>
        <div className="menu-item">
          <FaTachometerAlt className="icon" />
          <span className="menu-text">Dashboard</span>
        </div>
        <div className={`menu-item has-submenu ${openSubMenu === 'category' ? 'open' : ''}`} onClick={() => toggleSubMenu('category')}>
          <FaList className="icon" />
          <span className="menu-text">Category</span>
          <FaChevronDown className="submenu-icon" />
        </div>
        {openSubMenu === 'category' && (
          <div className="submenu">
            <div className="submenu-item">Borka</div>
            <div className="submenu-item">Abaya</div>
            <div className="submenu-item">Karchupi</div>
          </div>
        )}
        <div className={`menu-item has-submenu ${openSubMenu === 'sale' ? 'open' : ''}`} onClick={() => toggleSubMenu('sale')}>
          <FaTags className="icon" />
          <span className="menu-text">Sale</span>
          <FaChevronDown className="submenu-icon" />
        </div>
        {openSubMenu === 'sale' && (
          <div className="submenu">
            <div className="submenu-item">Complete</div>
            <div className="submenu-item">Due</div>
            <div className="submenu-item">Hold</div>
            <div className="submenu-item">Return</div>
          </div>
        )}
        <div className="menu-item">
          <FaBox className="icon" />
          <span className="menu-text">Products Category</span>
        </div>
        <div className="menu-item">
          <FaTags className="icon" />
          <span className="menu-text">Brands</span>
        </div>
        <div className="menu-item">
          <FaBox className="icon" />
          <span className="menu-text">Product List</span>
        </div>
        <div className="menu-item">
          <FaChartBar className="icon" />
          <span className="menu-text">Ecomarch Category</span>
        </div>
        <div className="menu-item logout">
          <FaSignOutAlt className="icon" />
          <span className="menu-text">Logout</span>
        </div>
      </div>
      <div className="main-content">
        <div className="top-navbar">
          <FaBars className="icon toggle-icon" onClick={toggleSidebar} />
          <div className="top-menu">
            <button className="top-menu-item"><FaChartLine className="icon" /> Sale Report</button>
            <button className="top-menu-item"><FaWarehouse className="icon" /> Stock</button>
            <button className="top-menu-item"><FaClipboardList className="icon" /> Today Summary</button>
            <button className="top-menu-item"><FaUndoAlt className="icon" /> Return Orders</button>
            <button className="top-menu-item"><FaCashRegister className="icon" /> POS</button>
            <button className="top-menu-item"><FaTruck className="icon" /> Wholesale</button>
            <button className="top-menu-item"><FaBox className="icon" /> Order</button>
          </div>
          <div className="profile-menu">
            <FaUser className="icon" />
            <span>Profile</span>
          </div>
        </div>
        <div className="content">
          {/* Your content goes here */}
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
