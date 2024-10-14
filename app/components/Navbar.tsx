import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
    <div className='bg-black px-8 md:px-16 lg:px-24 flex py-5 justify-center items-center font-semibold'>
      <NavigationMenu>
        <NavigationMenuList className='flex space-x-32'>
          <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className='text-white hover:underline'> 
            <span className="">
              About me
            </span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/my_project" legacyBehavior passHref>
            <NavigationMenuLink className='text-white hover:underline'>
              My Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    </div>
  )
}

export default Navbar