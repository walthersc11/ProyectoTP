"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, DropdownSection, User} from "@nextui-org/react";
import React from "react";
import Image from "next/image";
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
            <Link href="/AboutUs" aria-current="page"> About us </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">Integrations </Link>
          </NavbarItem>          
          <Dropdown showArrow radius="sm" classNames={{
              base: "before:bg-default-200", // change arrow background
              content: "p-0 border-small border-divider bg-background",
            }}>
            <DropdownTrigger>
              <Button disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base text-default-900"
                endContent={imagenes.downarrow}
                radius="sm"
                variant="light">Open Menu</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Custom item styles"
              disabledKeys={["profile"]}
              className="p-3"
              itemClasses={{
                base: [
                  "rounded-md",
                  "text-default-900",
                  "transition-opacity",
                  "data-[hover=true]:text-foreground",
                  "data-[hover=true]:bg-default-100",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[selectable=true]:focus:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[focus-visible=true]:ring-default-500",
                ],
              }}>
              <DropdownSection aria-label="Profile & Actions" showDivider>
                <DropdownItem isReadOnly key="profile"
                  className="h-14 gap-2">
                  <User
                    name="Junior Garcia"
                    description="@jrgarciadev"
                    classNames={{
                      name: "text-default-600",
                      description: "text-default-500",
                    }}
                    avatarProps={{
                      size: "sm",
                      src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                    }}/>
                </DropdownItem>
                <DropdownItem key="infoPersonal" href="/InfoPersonal" endContent={imagenes.account}>
                  Información Personal
                </DropdownItem>
                <DropdownItem key="contact" href="/Contactar" endContent={imagenes.contact}>
                  Contactar
                </DropdownItem>
                <DropdownItem key="chatbot" href="/Chatbot" endContent={imagenes.chat}>
                  Chatbot
                </DropdownItem>
              </DropdownSection>

              <DropdownSection aria-label="Preferences" showDivider>
                <DropdownItem key="historial" href="/prueba" endContent={imagenes.historial}>
                  Historial
                </DropdownItem>
                <DropdownItem key="agenda" href="/Agenda" endContent={imagenes.calendar}>
                  Agenda
                </DropdownItem>
              </DropdownSection>  

              <DropdownSection aria-label="Help & Feedback">
                <DropdownItem key="help_and_feedback" endContent={imagenes.feedback}>
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" endContent={imagenes.logout}>
                  Log Out</DropdownItem>
              </DropdownSection> 
            </DropdownMenu>
          </Dropdown>
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
