"use client"
import React from 'react';
import { Navbar, Link, Button, NavbarBrand, NavbarContent } from '@nextui-org/react';
import NextLink from 'next/link';
import styles from '../styles/CustomNavbar.module.css';

const CustomNavbar: React.FC = () => {
  return (
    <Navbar className={styles.navbar}>
      <NavbarBrand>
        <NextLink href="/" passHref>
          <Link className={styles.brandLink}>MyApp</Link>
        </NextLink>
      </NavbarBrand>
      <NavbarContent className='navbarContent' >
        <NextLink href="/" passHref>
          <Link className={`${styles.navItem} ${styles.navItemHover}`}>Home</Link>
        </NextLink>
        <NextLink href="/about" passHref>
          <Link className={`${styles.navItem} ${styles.navItemHover}`}>About</Link>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Link className={`${styles.navItem} ${styles.navItemHover}`}>Contact</Link>
        </NextLink>
        <NextLink href="/login" passHref>
          <Button className={`${styles.loginButton} ${styles.loginButtonHover}`}>
            Login
          </Button>
        </NextLink>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;
