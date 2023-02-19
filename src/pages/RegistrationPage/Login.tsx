import React from "react";
import { Link } from "react-router-dom";
import { Label, TextInput, Checkbox, Button} from "flowbite-react";
const Login = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <form className="flex flex-col gap-4 mt-5 w-[40%]">
        <div className="">
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

export default Login;
