import React from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from '@material-tailwind/react'

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-xl">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-xl">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-xl">
          Contact
        </a>
      </Typography>
     </ul>
  )

  return (
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-slate-900">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className='flex'><Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 text-xl"
          >
            GH
          </Typography>
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 text-xl"
          >
            LI
          </Typography>
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 text-xl"
          >
            ✉️
          </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/*  */}
          </div>
        </div>
      </Navbar>
  )
}
