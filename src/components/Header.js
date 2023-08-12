import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {
  Navbar,
  Typography,
  Button,
  Collapse,
  Card,
  CardBody,
} from '@material-tailwind/react'

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen((cur) => !cur)

  const navList = (
    <div>
      <ul className="flex flex-col lg:flex-row items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="/" className="flex items-center text-xl">
            Home
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="/about" className="flex items-center text-xl">
            About
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="/projects" className="flex items-center text-xl">
            Projects
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="/contact" className="flex items-center text-xl">
            Contact
          </a>
        </Typography>
      </ul>
    </div>
  )

  return (
    <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-0 px-0 px-8 py-4 bg-slate-900">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="https://github.com/justenanderson-commits/dev-portfolio/tree/main"
          target="blank"
          className="ml-2 font-bold text-sky-500 cursor-pointer text-md"
        >
          REPO
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <Button
            className="h-6 w-6 active:bg-transparent lg:hidden"
            ripple={true}
            onClick={toggleOpen}
          >
            <h1>
              <GiHamburgerMenu className="text-2xl -m-3" />
            </h1>
          </Button>
        </div>
      </div>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-9/12">
          <CardBody className="mx-auto">
            {navList}
          </CardBody>
        </Card>
      </Collapse>
    </Navbar>
  )
}

export default Header
