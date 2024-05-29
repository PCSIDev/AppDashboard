import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../assets/Org_logo.png'; 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      
      <Hamburger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu open={open}>
      <img src={logoImage} alt="My Example" />
        <MenuItem to="/" onClick={() => setOpen(false)}>Home</MenuItem>
        <MenuItem to="/about" onClick={() => setOpen(false)}>About</MenuItem>
        <MenuItem to="/profile" onClick={() => setOpen(false)}>Profile</MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #333;
  padding: 0.5rem 1rem;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ open }) => (open ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
