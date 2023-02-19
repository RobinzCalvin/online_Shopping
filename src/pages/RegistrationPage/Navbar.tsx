import React from "react";
import { Tabs } from "flowbite-react";
import Login from "./Login";
const Navbar = () => {
  return (
    <Tabs.Group
      aria-label="Tabs with underline"
      style="underline"
      className="text-4xl flex justify-center"
    >
        <Tabs.Item title="Login">
          <Login />
        </Tabs.Item>
      <Tabs.Item active={true} title="Signup" className="p-10">
        Signup
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default Navbar;
