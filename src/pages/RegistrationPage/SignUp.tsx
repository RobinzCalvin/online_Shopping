import React from "react";
import { Link } from "react-router-dom";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
const SignUp = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <form className="flex flex-col gap-4 mt-5 w-[40%]">
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="Your Name" value="Your Name" />
          </div>
          <div className="w-full flex flex-row space-x-2">
            <div className="w-1/2 ">
              <TextInput
                id="firstName"
                type="firstName"
                placeholder="Input First Name"
                required={true}
                // className="outline-none"
              />
            </div>
            <div className="w-1/2">
              <TextInput
                id="lastName"
                type="lastName"
                placeholder="Input Last Name"
                required={true}
                className="outline-none"
              />
            </div>
          </div>

          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="love@products.com"
            required={true}
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required={true} />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="conformPass" value="Conform password" />
          </div>
          <TextInput id="conformPass" type="conformPass" required={true} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Link to="/welcome">
          <Button className="">Submit</Button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
