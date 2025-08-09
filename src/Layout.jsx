import Button from "./components/Button"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Padding from "./components/Padding"

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Navbar />
      <main>{children}</main>
      <br />

      <footer>
        <Button
          external={true}
          text={<Padding>Created by George Cadel-Munoz</Padding>}
          link={"https://gcmunoz.com"}
          color='amethyst hover'
        />
      </footer>
    </div>
  )
}
