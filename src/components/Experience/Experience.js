import { Fragment, useState } from "react";
import ExpCard from '../ExpCard/ExpCard'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Experience = ({ experience }) => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  }
  return (
    <div className="border-2 border-slate-900 mx-36 my-4 rounded-lg">
       <Fragment>
        <Accordion open={open === 1}>
          <AccordionHeader className='p-2 bg-sky-100' onClick={() => handleOpen(1)}>
            Experience
          </AccordionHeader>
          <AccordionBody className='p-4'>
          <ExpCard />

            Freelance and Volunteer Web Developer
          </AccordionBody>
        </Accordion>
      </Fragment>
      </div>
    );
}

export default Experience


