import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { deleteCreatorById, getCreatorById, updateCreatorById } from "../api"
import CreatorForm from "../components/CreatorForm"
import Button from "../components/Button"
import Card from "../components/Card"
import Padding from "../components/Padding"
import LoadingCard from "../components/LoadingCard"

// A form for editing the creator
export default function EditCreator() {
  const navigator = useNavigate()
  const params = useParams()

  const [fields, setFields] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
    bannerURL: "",
    id: null,
  })

  const [confirmDelete, setConfirmDelete] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCreator() {
      const data = await getCreatorById(params.id)
      setFields(data)
      setLoading(false)
    }
    loadCreator()
  }, [])

  function handleChange(e) {
    const element = e.target
    setFields({ ...fields, [element.name]: element.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await updateCreatorById(fields.id, { ...fields })
    if (res.message == "good") {
      navigator(-1)
    }
  }

  async function handleDelete(e) {
    e.preventDefault()
    const res = await deleteCreatorById(fields.id)
    if (res.message == "good") {
      navigator("/")
    }
  }
  if (loading) {
    return <LoadingCard itemName={"Creator"} />
  }

  return (
    <>
      {confirmDelete ? (
        <Card>
          <Padding
            // container={true}
            centered={true}
          >
            <h2 style={{ textAlign: "center" }}>Are you sure?</h2>
            <div>
              <Button
                text={"Cancel"}
                onClickFn={() => setConfirmDelete(false)}
                color='tealTint hover'
              />
              <br />
              <Button
                text={"Yes, delete it!"}
                color='salmonPink hover'
                onClickFn={handleDelete}
              />
            </div>
          </Padding>
        </Card>
      ) : (
        <Button
          text={"Delete"}
          color='salmonPink hover'
          onClickFn={() => setConfirmDelete(true)}
        />
      )}
      <br />
      <CreatorForm
        title='Edit Creator'
        handleChangeFn={handleChange}
        data={fields}
        submitFn={handleSubmit}
      />
    </>
  )
}
