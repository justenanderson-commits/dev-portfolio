import { Fragment, useState } from "react";
import ExpCard from '../ExpCard/ExpCard'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Experience = ({ experience }) => {
  console.log('Experience: ', experience)
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
          <AccordionBody className="p-4">
            <h1 className="text-xl font-bold">
              Turing School of Software and Design
            </h1>
            <h2 className="text-lg font-semibold">
              Front-End Engineering Student - August 2022 to March 2023
            </h2>
            <p className="text-lg">
              An intense, fully-remote front-end web development boot camp
              including HTML, CSS, JavaScript, React, Node, Git, GitHub, and
              more.
            </p>
            <br />
            <h1 className="text-xl font-bold">Multiple Schools in Colorado & Costa Rica</h1>
            <h2 className="text-lg font-semibold">
            Professional Educator & Department Leader - August 2008 to July 2022 
            </h2>
            <p className="text-lg">
              Graduate program covering finance, accounting, marketing, media,
              logistics, performance, innovation, and more with a concentration
              on technology as a large-scale business solution.
            </p>
            <h2 className="text-lg font-semibold">
              Bachelor of Science - June 2005
            </h2>
            <p className="text-lg">
              Business Adminstration in Technical Studies - A program designed
              to to enhance both the knowledge and technological skills of
              business leaders.
            </p>
            <br />
            <h1 className="text-xl font-bold">
              Community College of the Air Force
            </h1>
            <label className="text-lg font-semibold">
              Associate of Applied Science - March 2005
            </label>
            <p className="text-lg">
              A vocational degree based on technical training covering
              electronic and computer science fundamentals, as well as avionic
              systems for communication, navigation, weapons and radar systems.
            </p>
          </AccordionBody>
        </Accordion>
      </Fragment>
      </div>
    );
}

export default Experience


