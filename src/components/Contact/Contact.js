import { Input, Typography, Button, Textarea } from '@material-tailwind/react'
import { BsGithub } from 'react-icons/bs'
import { ImMail } from 'react-icons/im'
import { BsLinkedin } from 'react-icons/bs'


const Contact = () => {
  return (
    <div className="text-slate-900 text-2xl w-full min-h-screen bg-white pt-10">
      <h1 className="text-7xl text-center pb-3">Contact</h1>
      <h2 className="text-2xl flex justify-center mt-4">I'd love to hear from you. Use any of the links below to get in touch:</h2>
      <div className="bg-sky-100 mx-auto mt-8 border-slate-900 p-10 border-2 min-h-2/3 w-2/3 rounded-xl flex justify-evenly text-8xl">
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
        {/* <form className="w-9/10">
          <label>Name</label>
          <Input size="lg" placeholder="John Smith" className='mb-2 bg-white' />
          <label>Email</label>
          <Input size="lg" placeholder="you@example.com"  className='mb-2  bg-white'/>
          <label>Message</label>
          <Textarea
            size="lg"
            className="w-full h-32 border-slate-900 border-0 mb-4 bg-white"
            placeholder="Share your thoughts"
          />
        </form> */}
        {/* <div className="m-auto flex justify-center">
          <Button className="text-sky-600 border-sky-600 bg-white" variant="outlined">
            Submit
          </Button>
        </div> */}
      </div>
    </div>
  )
}

export default Contact
