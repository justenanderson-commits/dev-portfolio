import { Fragment, useState } from "react";
import EduCard from '../EduCard/EduCard'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Education = () => {
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
      <EduCard />

      <Fragment>
        <Accordion open={open === 1}>
          <AccordionHeader className='p-4' onClick={() => handleOpen(1)}>
            Education
          </AccordionHeader>
          <AccordionBody className='p-4'>
            Turing School of Software and Design
          </AccordionBody>
        </Accordion>
      </Fragment>
      </div>
    );
}

export default Education


