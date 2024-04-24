"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, DropdownSection, User} from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import DroplistPaciente from "@/components/droplistPaciente";
import DroplistPsicologo from "@/components/DroplistPsicologo";
import { ChevronDown, PlusIcon } from "./Icons/Icons";


export default function Navegation({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const menuItems = [
    "Inicio",
    "About us",
    "Integrations",
    "Open Menu",
  ];

  const imagenes = {
    downarrow: <Image src="/down-arrow.svg" width={26} height={16}/>,
    chat: <Image src="/chat.svg" width={19} height={19}/>,
    calendar: <Image src="/calendar.svg" width={19} height={19}/>,
    historial: <Image src="/historial.svg" width={19} height={19}/>,
    logout: <Image src="/logout.svg" width={19} height={19}/>,
    feedback: <Image src="/feedback.svg" width={19} height={19}/>,
    contact: <Image src="/contact.svg" width={19} height={19}/>,
    account: <Image src="/account.svg" width={19} height={19}/>,
    mapri: <Image src="/mapri.svg" width={200} height={200}/>
  };
  
  return (
    <div>
      <Navbar position="static" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"/>          
          <NavbarBrand>{imagenes.mapri} </NavbarBrand>
        </NavbarContent>        
        
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">Inicio</Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/AboutUs" aria-current="page"> Nosotros </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/Funciones">Funciones </Link>
          </NavbarItem>          
          <DroplistPaciente></DroplistPaciente>
          <DroplistPsicologo></DroplistPsicologo>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden md:block">
            <Link href="/Login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/Registrar" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {children}
    </div>    
  );
}
