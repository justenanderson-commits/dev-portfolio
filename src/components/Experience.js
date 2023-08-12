import { Fragment, useState } from 'react'
import ExpCard from './ExpCard'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'

const Experience = ({ experience }) => {
  const [open, setOpen] = useState(0)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  }
  return (
    <div className="border-2 border-slate-900 mx-8 lg:mx-36 my-4 rounded-lg">
      <Fragment>
        <Accordion open={open === 1}>
          <AccordionHeader
            className="p-2 bg-sky-100"
            onClick={() => handleOpen(1)}
          >
            Experience
          </AccordionHeader>
          <AccordionBody className="p-4">
            <h1 className="text-xl font-bold">
              Turing School of Software and Design - Denver, Colorado
            </h1>
            <h2 className="text-lg font-semibold">
              Front-End Engineering Student - August 2022 to March 2023
            </h2>
            <p className="text-lg">
              Excelled in an accredited, intense, 60-70 hr/wk, fully-remote,
              1,700-hour software development training program through its
              collaborative, high-paced, curriculum to sharpen web development
              skills including pair-programming, algorithms, debugging, HTML,
              CSS, JavaScript, React, Node, Git, GitHub, and more.
            </p>
            <br />
            <h1 className="text-xl font-bold">
              Multiple Schools in Colorado & Costa Rica
            </h1>
            <h2 className="text-lg font-semibold">
              Middle and High School Computer Teacher - August 2008 to July 2022
            </h2>
            <p className="text-lg">
              Taught grades 6-12 computer courses using the Adobe Creative Suite
              and Business education courses to high school students. Planned,
              coordinated and trained staff and students to complete
              high-profile video projects within tight timelines. Provided
              extensive technical support to colleagues with technical issues.
            </p>
            <br/>
            <h2 className="text-lg font-semibold">
              Department Lead - August 2016 to July 2022
            </h2>
            <p className="text-lg">
              Served as exploratory department leader with 11 functional reports
              to coordinate instruction, scheduling and hiring. Created
              first-ever curriculum map to show scope and sequence for entire
              school's curricula, improving cross-functional collaboration. Created
              eLearning training materials to facilitate an effective transition to online
              instruction during Covid-19.
            </p>
            <br/>
            <h2 className="text-lg font-semibold">
              Career Technical Education Lead - August 2015 to July 2021
            </h2>
            <p className="text-lg">
              Interfaced with district leadership, community members, and representatives from other schools to coordinate multi-million dollar program, receiving grants for
              tens-of-thousands of additional dollars for the school and the
              district.
            </p>
            <br />
            <h1 className="text-xl font-bold">
              California Casualty Insurance Company - Colorado Springs, Colorado
            </h1>
            <h2 className="text-lg font-semibold">
              Auto and Home Insurance Agent - April 2006 to July 2008
            </h2>
            <p className="text-lg">
              Provided front-line customer service, coverage counseling, and
              wrote new home and auto insurance policies in 27 different states;
              employed real-time, database applications and interfaced with
              other departments (underwriting, claims, business partners, etc)
              to assess risk and provide personalized coverage solutions.
            </p>
            <br />
            <h1 className="text-xl font-bold">
              United States Air Force - Offutt AFB, NE & Holloman AFB, NM
            </h1>
            <h2 className="text-lg font-semibold">
              Avionics and Automated Test Station Technician - October 2001 to
              April 2006
            </h2>
            <p className="text-lg">Performed component-level electronics testing, troubleshooting, maintenance and calibration of aircraft communication, navigation, and flight control systems. Managed the shop's hazardous materials compliance program. </p>
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  )
}

export default Experience
