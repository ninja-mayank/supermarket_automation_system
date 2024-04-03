"use client"
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useRouter } from "next/navigation";

const Nav = () => {
    return (
        <Navbar fluid rounded>
          <Navbar.Brand as={Link} href="https://flowbite-react.com">
            <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Supermarket Automation System</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link as={Link} href="#">
              About
            </Navbar.Link>
            <Navbar.Link href="/loginAsManager">Login as Manager</Navbar.Link>
            <Navbar.Link href="/loginAsEmployee">Login as Employee</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
    );
}
 
export default Nav;