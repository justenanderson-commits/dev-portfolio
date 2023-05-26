import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CertsAwards = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  }
  return (
    <div className="bg-sky-100 border-2 border-slate-900 mx-36 my-4 rounded-lg">
      <Fragment>
        <Accordion open={open === 1}>
          <AccordionHeader className='p-4' onClick={() => handleOpen(1)}>
            Certifications & Awards
          </AccordionHeader>
          <AccordionBody className='p-4'>
            Turing Cert, Teaching License, Awards, etc.
          </AccordionBody>
        </Accordion>
      </Fragment>
      </div>
    );
}

export default CertsAwards


