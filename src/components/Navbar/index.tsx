import { Menu } from "lucide-react";
import logo from "/logo.svg";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "react-router";
import { ModeToggle } from "../ui/mode-toggle";
import { useState } from "react";

const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Nosotros", href: "/about-us" },
  { name: "Cursos", href: "/courses" },
  { name: "Contactos", href: "/contacts" },
];

const menuItemsClasses = {
  defaultLarge: "inline-flex items-center px-1 pt-1 text-sm font-medium",
  defaultMobile: "px-3 py-2 text-sm font-medium",
  active:
    " text-black dark:text-white border-b-2 border-black dark:border-white",
  inactive: " text-gray-500 dark:text-gray-400",
};

export function Navbar() {
  const [animationClass, setAnimationClass] = useState("");

  return (
    <nav className="bg-white shadow-sm dark:bg-[#072d4d] text-black dark:text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className={`flex items-center rotating-wheel ${animationClass}`}
            onMouseEnter={() => setAnimationClass("rotate-forwards")}
            onMouseLeave={() => setAnimationClass("rotate-backwards")}
          >
            <img className="h-8 w-auto" src={logo} alt="Logo" />
          </NavLink>
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8 flex-1 justify-center">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? menuItemsClasses.defaultLarge + menuItemsClasses.active
                    : menuItemsClasses.defaultLarge + menuItemsClasses.inactive
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center">
            {/* Theme toggle */}
            <div className="mr-2">
              <ModeToggle />
            </div>
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Menú</SheetTitle>
                    <SheetDescription>
                      Navegue por nuestras secciones
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 flex flex-col space-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }: { isActive: boolean }) =>
                          isActive
                            ? menuItemsClasses.defaultMobile +
                              menuItemsClasses.active
                            : menuItemsClasses.defaultMobile +
                              menuItemsClasses.inactive
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
