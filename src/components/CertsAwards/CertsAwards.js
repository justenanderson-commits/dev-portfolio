import { Fragment, useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'

const CertsAwards = () => {
  const [open, setOpen] = useState(0)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  }
  return (
    <div className="border-2 border-slate-900 mx-36 my-4 rounded-lg">
      <Fragment>
        <Accordion open={open === 1}>
          <AccordionHeader
            className="p-2 bg-sky-100"
            onClick={() => handleOpen(1)}
          >
            Certifications & Awards
          </AccordionHeader>
          <AccordionBody className="p-4">
          
            <h2 className="text-lg font-semibold">Front-End Engineering Certificate</h2>
            <p className="text-lg">Turing School of Software and Design - 2023</p>
            <br/>
            <h2 className="text-lg font-semibold">Teacher of the Year</h2>
            <p className="text-lg">Timberview Middle School - 2020</p>
            <br/>
            <h2 className="text-lg font-semibold">Dean's List Scholar</h2>
            <p className="text-lg">Bellevue University - 2011</p>
            <br/>
            <h2 className="text-lg font-semibold">Colorado State Teaching License</h2>
            <p className="text-lg">Colorado Department of Education - 2009</p>
            <br/>
            <h2 className="text-lg font-semibold">Personal Auto and Home Insurance License</h2>
            <p className="text-lg">Colorado Department of Insurance - 2006</p>
            <br/>
            <h2 className="text-lg font-semibold">National Dean's List Scholar</h2>
            <p className="text-lg">Bellevue University - 2005</p>
            <br/>
            <h2 className="text-lg font-semibold">Senior Airman Below the Zone</h2>
            <p className="text-lg">U.S. Air Force - 2004</p>
            <br/>
            <h2 className="text-lg font-semibold">Maintenance Professional of the Quarter</h2>
            <p className="text-lg">U.S. Air Force - 2003</p>
            <br/>
            <h2 className="text-lg font-semibold">Knucklebuster Award</h2>
            <p className="text-lg">U.S. Air Force - 2003</p>
            <br/>
            <h2 className="text-lg font-semibold">Avionic Comm/Nav School Top Graduate</h2>
            <p className="text-lg">U.S. Air Force - 2002</p>
            <br/>
            <h2 className="text-lg font-semibold">Electronics Principles Honor Graduate</h2>
            <p className="text-lg">U.S. Air Force - 2002</p>
            <br/>
            <h2 className="text-lg font-semibold">Basic Training Honor Graduate</h2>
            <p className="text-lg">U.S. Air Force - 2001</p>
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  )
}

export default CertsAwards
