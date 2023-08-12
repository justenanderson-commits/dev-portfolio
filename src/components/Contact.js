import { Button } from '@material-tailwind/react'
import { BsGithub } from 'react-icons/bs'
import { ImMail } from 'react-icons/im'
import { BsLinkedin } from 'react-icons/bs'


const Contact = () => {
  return (
    <div className="text-slate-900 text-2xl w-full min-h-9/10 bg-white pt-10">
      <h1 className="text-5xl lg:text-7xl  text-center">Contact</h1>
      <h2 className="text-2xl flex justify-center p-6 lg:p-4 lg:mt-4">I'd love to hear from you. Use any of the links below to get in touch:</h2>
      
      
      <div className="bg-sky-100 mx-auto mt-6 border-slate-900 p-5 border-2 min-h-2/3 w-11/12 md:w-9/12 lg:w-2/3 rounded-xl flex justify-evenly text-6xl lg:text-8xl text-sky-900">
        <a href="https://github.com/justenanderson-commits"
        target="blank"> 
        <h1><BsGithub /> </h1>
        </a>
        <a href="mailto:justenanderson@gmail.com">
        <h1><ImMail /> </h1>
        </a>
        <a href="https://www.linkedin.com/in/justen-anderson-522062239/"
        target="blank">
        <h1><BsLinkedin /> </h1>
        </a>
      </div>
      <div className="flex justify-center mb-16 mt-20 lg:mt-32">
      <a
          href='/' >
          <Button className="text-sky-600 border-sky-600 bg-white" variant="outlined">
            Home
          </Button>
          </a>
          </div>
    </div>
  )
}

export default Contact
