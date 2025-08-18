import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SignInButton, useUser } from "@clerk/nextjs"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {

  const { user } = useUser()
  const menuOptions = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact us", path: "/contact-us" },
  ]

  return (
    <header className="flex justify-between items-center p-4 border-b bg-white">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Image src="/logo.svg" alt="Logo" width={30} height={30} />
        <h2 className="font-bold text-2xl">AI Trip Planner</h2>
      </div>

      {/* Menu - Desktop */}
      <nav className="hidden md:flex gap-5 items-center">
        {menuOptions.map((menu, index) => (
          <Link key={index} href={menu.path} className="text-lg hover:scale-105 transition-all hover:text-primary">
            {menu.name}
          </Link>
        ))}
      </nav>

      {/* Botão Desktop */}
      <div className="hidden md:block">
        {!user ? (<SignInButton mode="modal">
          <Button>Get Started</Button>
        </SignInButton>) : (
          <Link href={'/create-trip'}>
            <Button>Create New Trip</Button>
          </Link>
        )}

      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-4">
            <div className="flex flex-col gap-4 mt-6">
              {menuOptions.map((menu, index) => (
                <Link key={index} href={menu.path} className="text-lg hover:text-primary">
                  {menu.name}
                </Link>
              ))}
              {!user ? (
                <SignInButton mode="modal">
                  <Button className="mt-4">Get Started</Button>
                </SignInButton>) : (
                <Link href={'/create-trip'}>
                  <Button>Create New Trip</Button>
                </Link>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header
