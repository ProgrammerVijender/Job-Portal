// import { Popover } from "@radix-ui/react-popover";
import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "../ui/ui/button";
import { Avatar, AvatarImage } from "../ui/ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/ui/popover";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className=" flex items-center justify-between  mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold ">
            Job <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>

        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contactme</li>
            </ul>
            {
              !user ? (
                
                <div className="flex items-center gap-2">
                 <Link to="/Login"> <Button variant="outline">Login</Button>  </Link>
                 <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6] text-white border-grey-300">Signup</Button> </Link>
                </div>

              )
              : (
                <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div>
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>

                    <div>
                      <h4 classname="font-medium">Vijender MernStack</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                <div className="flex flex-col gap-3 text-gray-600">

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2/>
                  <Button variant="link">View Profile</Button>
                  </div>

                  <div className="flex  w-fit items-center gap-2 cursor-pointer">
                    <LogOut/>
                  <Button variant="link">Logout</Button>
                  </div>
            
                </div>
                </div>

              </PopoverContent>
            </Popover>
              )
            }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
