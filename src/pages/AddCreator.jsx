import { useState } from "react"
import CreatorForm from "../components/CreatorForm"
import { fetchAllCreators, insertNewCreator } from "../api"
import { useNavigate } from "react-router"

// A form for adding the creator
export default function AddCreator() {
  const navigator = useNavigate()

  const [fields, setFields] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
    bannerURL: "",
    // id: null,
  })

  function handleChange(e) {
    const element = e.target
    setFields({ ...fields, [element.name]: element.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const data = { ...fields }
    const { error, res } = await insertNewCreator(data)
    if (error) {
      console.log("Something went wrong")
    } else {
      console.log(res)
      navigator("/")
    }
  }
  return (
    <>
      <CreatorForm
        title='New Creator'
        handleChangeFn={handleChange}
        data={fields}
        submitFn={handleSubmit}
      />
    </>
  )
}
