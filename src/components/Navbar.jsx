import { Link } from "react-router"
import Button from "./Button"
import Card from "./Card"
import Padding from "./Padding"
import { useState } from "react"

export default function Navbar() {
  // const [navOpen, setNavOpen] = useState(false)
  return (
    <header className='navbar'>
      <Button
        link={"/"}
        text={<span style={{ fontWeight: 900 }}>CV</span>}
        color='yellow hover'
      />
    </header>
  )
}
