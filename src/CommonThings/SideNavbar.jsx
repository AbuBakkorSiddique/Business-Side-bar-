import  { useState } from 'react';
import { FaBars, FaUser, FaTachometerAlt, FaList, FaTags, FaBox, FaChartBar, FaSignOutAlt, FaChevronDown, FaChartLine, FaWarehouse, FaClipboardList, FaUndoAlt, FaCashRegister, FaTruck, FaEllipsisV } from 'react-icons/fa';
import '../Css/sidenavbar.css';

const SideNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTooltip = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <div className="app-container">
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
        <div className={`brand-name ${isSidebarOpen ? '' : 'collapsed'}`}>BrandName</div>
        <div className="menu-item" onClick={() => toggleSubMenu('dashboard')}>
          <FaTachometerAlt className="icon" />
          {isSidebarOpen && <span className="menu-text">Dashboard</span>}
        </div>
        <div className={`menu-item has-submenu ${openSubMenu === 'category' ? 'open' : ''}`} onClick={() => toggleSubMenu('category')}>
          <FaList className="icon" />
          {isSidebarOpen && <span className="menu-text">Category</span>}
          {isSidebarOpen && <FaChevronDown className="submenu-icon" />}
        </div>
        {openSubMenu === 'category' && isSidebarOpen && (
          <div className="submenu">
            <div className="submenu-item">Borka</div>
            <div className="submenu-item">Abaya</div>
            <div className="submenu-item">Karchupi</div>
          </div>
        )}
        <div className={`menu-item has-submenu ${openSubMenu === 'sale' ? 'open' : ''}`} onClick={() => toggleSubMenu('sale')}>
          <FaTags className="icon" />
          {isSidebarOpen && <span className="menu-text">Sale</span>}
          {isSidebarOpen && <FaChevronDown className="submenu-icon" />}
        </div>
        {openSubMenu === 'sale' && isSidebarOpen && (
          <div className="submenu">
            <div className="submenu-item">Complete</div>
            <div className="submenu-item">Due</div>
            <div className="submenu-item">Hold</div>
            <div className="submenu-item">Return</div>
          </div>
        )}
        <div className="menu-item" onClick={() => toggleSubMenu('products')}>
          <FaBox className="icon" />
          {isSidebarOpen && <span className="menu-text">Products Category</span>}
        </div>
        <div className="menu-item" onClick={() => toggleSubMenu('brands')}>
          <FaTags className="icon" />
          {isSidebarOpen && <span className="menu-text">Brands</span>}
        </div>
        <div className="menu-item" onClick={() => toggleSubMenu('productList')}>
          <FaBox className="icon" />
          {isSidebarOpen && <span className="menu-text">Product List</span>}
        </div>
        <div className="menu-item" onClick={() => toggleSubMenu('ecomarch')}>
          <FaChartBar className="icon" />
          {isSidebarOpen && <span className="menu-text">Ecomarch Category</span>}
        </div>
        <div className="menu-item logout">
          <FaSignOutAlt className="icon" />
          {isSidebarOpen && <span className="menu-text">Logout</span>}
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
          <FaEllipsisV className="icon right-icon" onClick={toggleTooltip} />
          <div className="profile-menu">
            <FaUser className="icon" />
            <span>Profile</span>
          </div>
        </div>
        <div className={`tooltip-navbar ${isTooltipOpen ? 'open' : ''}`}>
          <div className="tooltip-menu-item"><FaChartLine className="icon" /> Sale Report</div>
          <div className="tooltip-menu-item"><FaWarehouse className="icon" /> Stock</div>
          <div className="tooltip-menu-item"><FaClipboardList className="icon" /> Today Summary</div>
          <div className="tooltip-menu-item"><FaUndoAlt className="icon" /> Return Orders</div>
          <div className="tooltip-menu-item"><FaCashRegister className="icon" /> POS</div>
          <div className="tooltip-menu-item"><FaTruck className="icon" /> Wholesale</div>
          <div className="tooltip-menu-item"><FaBox className="icon" /> Order</div>
        </div>
        <div>Your content here...</div>
      </div>
    </div>
  );
};

export default SideNavbar;

