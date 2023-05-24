import { Fragment, useState } from "react";
import ExpCard from '../ExpCard/ExpCard'

const Experience = () => {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  }
  return (
    <div className="border-2 border-black mx-36 my-4 rounded-lg">
      Experience<ExpCard />
    </div>
      <Fragment>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making mistakes.
            We&apos;re constantly trying to express ourselves and actualize our
            dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making mistakes.
            We&apos;re constantly trying to express ourselves and actualize our
            dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making mistakes.
            We&apos;re constantly trying to express ourselves and actualize our
            dreams.
          </AccordionBody>
        </Accordion>
      </Fragment>
    );
}

export default Experience


