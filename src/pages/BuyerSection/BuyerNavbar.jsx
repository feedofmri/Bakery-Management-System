import React, { useState } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Badge,
  Offcanvas,
  Container,
  InputGroup,
} from "react-bootstrap";
import {
  House,
  Cart3,
  Search,
  Envelope,
  Bell,
  PersonCircle,
  List,
  XLg,
  Gear,
  StarHalf,
  QuestionCircle,
  BoxArrowRight,
  ClipboardCheck,
} from "react-bootstrap-icons";
import "./BuyerNavbar.css";

const BuyerNavbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawerClose = () => setShowDrawer(false);
  const handleDrawerShow = () => setShowDrawer(true);

  return (
    <>
      <Navbar bg="white" expand="lg" className="custom-navbar" fixed="top">
        <Container fluid className="navbar-rail flex-nowrap">
          {/* LEFT: Drawer + Home + Cart */}
          <div className="left-rail d-flex align-items-center gap-2">
            <Button
              variant="outline-light"
              className="drawer-toggle"
              onClick={handleDrawerShow}
              aria-label="Open C-Cart menu"
            >
              <List size={20} />
              <span className="ms-1 d-none d-md-inline">C-CART</span>
            </Button>

            <Nav className="flex-row align-items-center nav-horizontal">
              <Nav.Link href="/" className="nav-icon position-relative">
                <House size={22} />
                <span className="nav-text">Home</span>
              </Nav.Link>

              <Nav.Link href="/Orders" className="nav-icon position-relative">
                <Cart3 size={22} />
                <Badge pill bg="danger" className="notification-badge">
                  3
                </Badge>
                <span className="nav-text">Cart</span>
              </Nav.Link>
            </Nav>
          </div>

          {/* CENTER: Search (stays centered, shrinks on small screens) */}
          <div className="center-rail flex-grow-1 d-flex justify-content-center">
            <div className="search-container">
              <InputGroup>
                <FormControl
                  placeholder="Search products, categories, brands..."
                  aria-label="Search"
                  className="search-input"
                />
                <Button
                  variant="primary"
                  className="search-btn"
                  aria-label="Search"
                >
                  <Search size={16} />
                </Button>
              </InputGroup>
            </div>
          </div>

          {/* RIGHT: Messages + Notifications + Profile */}
          <div className="right-rail d-flex align-items-center">
            <Nav className="flex-row align-items-center nav-horizontal">
              <Nav.Link href="/Message" className="nav-icon position-relative">
                <Envelope size={22} />
                <Badge pill bg="primary" className="notification-badge">
                  5
                </Badge>
                <span className="nav-text">Messages</span>
              </Nav.Link>

              <Nav.Link
                href="/Notification"
                className="nav-icon position-relative"
              >
                <Bell size={22} />
                <Badge pill bg="warning" className="notification-badge">
                  7
                </Badge>
                <span className="nav-text">Notifications</span>
              </Nav.Link>

              <Nav.Link href="/Profile" className="nav-icon position-relative">
                <PersonCircle size={22} />
                <span className="nav-text">Profile</span>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>

      {/* Sidebar Drawer (opens from left) */}
      <Offcanvas
        show={showDrawer}
        onHide={handleDrawerClose}
        placement="start"
        className="custom-drawer"
      >
        <Offcanvas.Header className="drawer-header">
          <Offcanvas.Title className="d-flex align-items-center">
            <PersonCircle size={24} className="me-2" />
            Menu
          </Offcanvas.Title>
          <Button
            variant="outline-light"
            onClick={handleDrawerClose}
            className="close-btn"
            aria-label="Close menu"
          >
            <XLg size={16} />
          </Button>
        </Offcanvas.Header>

        <Offcanvas.Body className="drawer-body">
          <Nav className="flex-column">
            <Nav.Link href="/Orders" className="drawer-item">
              <ClipboardCheck className="me-3" /> Orders
            </Nav.Link>
            <Nav.Link href="/settings" className="drawer-item">
              <Gear className="me-3" /> Settings
            </Nav.Link>
            <Nav.Link href="/Reviews" className="drawer-item">
              <StarHalf className="me-3" /> Reviews
            </Nav.Link>
            <Nav.Link href="/Help" className="drawer-item">
              <QuestionCircle className="me-3" /> Help
            </Nav.Link>
          </Nav>

          <div className="drawer-footer">
            <Button variant="outline-danger" className="w-100">
              <BoxArrowRight className="me-2" /> Logout
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default BuyerNavbar;
