import { Input, Typography, Button, Textarea } from '@material-tailwind/react'

const Contact = () => {
  return (
    <div className="text-slate-900 text-2xl w-full h-screen h-9/10 bg-white pt-10">
      <h1 className="text-7xl text-center pb-3">Contact</h1>
      <div className="bg-sky-100 mx-auto mt-8 border-slate-900 p-10 pb-4 border-2 min-h-2/3 w-2/3 rounded-xl">
        <form className="w-9/10">
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
        </form>
        <div className="m-auto flex justify-center">
          <Button className="text-sky-600 border-sky-600 bg-white" variant="outlined">
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Contact
