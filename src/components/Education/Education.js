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
          <AccordionHeader className='p-4 bg-sky-100' onClick={() => handleOpen(1)}>
            Education
          </AccordionHeader>
          <AccordionBody className='p-4'>
            <h2 className="text-lg">Turing School of Software and Design</h2>
            <h2 className="text-md">Front-End Engineering Program - March 2023</h2>
            <p>Front-end web development boot camp including HTML, CSS, JavaScript, React, Node, Git, GitHub, and more.</p>
            <br/>
            <h2 className="text-lg">Bellevue University</h2>
           
            <h2 className="text-md">Master of Business Administration - June 2012</h2>
            <p> MBA Program description</p>

            <h2 className="text-md">Bachelor of Science - June 2005</h2>
            <p> BATS program description</p>
            <br/>
            <h2 className="text-lg">Community College of the Air Force</h2>
            <label className="text-md">Associate of Applied Science - March 2005</label>
            <p> AAS description</p>
      
          </AccordionBody>
        </Accordion>
      </Fragment>
      </div>
    );
}

export default Education


