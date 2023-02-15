import React from "react";
import { Label, TextInput, Checkbox, Button} from "flowbite-react";
const Login = () => {
  return (
    <div className="">
      <h1>Welcome back to</h1>
      <h3 className="text-teal-500 mt-5 text-2xl">To our Website</h3>
      <form className="flex flex-col gap-4 mt-20">
        <div className="w-[50%]">
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
        <div className="w-[50%]">
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required={true} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit" className="w-[50%]">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
