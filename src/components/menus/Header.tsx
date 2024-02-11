import { useState } from "react";
import Drawer from "./Drawer";
import HeaderMenu from "./HeaderMenu";

const navItems = [
  { link: "/", label: "Meme of the day" },
  { link: "/about", label: "About" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <HeaderMenu handleDrawerToggle={handleDrawerToggle} navItems={navItems} />
      <Drawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        navItems={navItems}
      />
    </>
  );
}

export default Header;
