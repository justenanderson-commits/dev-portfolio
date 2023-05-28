import React from 'react'
import { Navbar, Typography } from '@material-tailwind/react'

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
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
        <div className="flex">
          <Typography
            as="a"
            href="https://github.com/justenanderson-commits/dev-portfolio/tree/main"
            className="mr-4 cursor-pointer py-.5 text-xl"
            target="blank"
          >
            Project Repo
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
