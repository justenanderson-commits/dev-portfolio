import React from 'react'
import {
  Navbar,
  Typography,
  IconButton, 
  Collapse,
  Card,
  CardBody
} from '@material-tailwind/react'

const Header = () => {
  // const [openNav, setOpenNav] = React.useState(false)
  const [open, setOpen] = React.useState(false);
 
  const toggleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    )
  }, [])



  const navList = (
    <ul className="mb-0 mt-0 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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
  )
  return (
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-0 px-0 lg:px-8 lg:py-4 bg-slate-900">
        <div className="flex items-center justify-between text-blue-gray-900">
              <Typography
                as="a"
                href="https://github.com/justenanderson-commits/dev-portfolio/tree/main" target="blank"
                className="ml-2 font-bold text-sky-500 cursor-pointer text-md"
              >
                REPO
              </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            
      <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={true}
              onClick={toggleOpen}
            > 
              {/* {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )} */}
            </IconButton>
          </div>
        </div>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-8/12">
          <CardBody>
            <Typography>
              {navList}
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </Navbar>
  )
}

export default Header
