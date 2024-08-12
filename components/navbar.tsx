import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import NextLink from "next/link";

{/* Customized Template for Riddara Purposes only :)  */}

import { siteConfig } from "@/config/site";

import {
 

  Logo,
 
} from "@/components/icons";

export const Navbar = () => {


  return (
    <NextUINavbar maxWidth={'full'} position="sticky" className="navbarBorder">
      <NavbarContent  justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">



       
        </ul>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          {/*<Link isExternal aria-label="Facebook" href={siteConfig.links.facebook}>
            <FacebookLogo className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Instagram" href={siteConfig.links.instagram}>
            <InstagramLogo className="text-default-500" />
          </Link>
          */}
          
          
        
         
        </NavbarItem>
       
      
      </NavbarContent>

      

      <NavbarMenu>
      
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
               {/**{item.label} */} 
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
