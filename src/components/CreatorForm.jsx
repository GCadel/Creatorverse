import { useNavigate } from "react-router"
import Button from "./Button"
import Card from "./Card"
import Padding from "./Padding"

export default function CreatorForm({
  title = "Form",
  submitFn = (e) => {
    e.preventDefault()
    alert("No submit function")
  },
  data = {
    name: "",
    url: "",
    description: "",
    imageURL: "",
    bannerURL: "",
    id: null,
  },
  handleChangeFn = (e) => {
    e.preventDefault()
    alert("No handle change function")
  },
}) {
  const navigate = useNavigate()

  return (
    <div>
      <form onSubmit={submitFn}>
        <Card bgColor='tan'>
          <Padding>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <div className='form-field'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                required
                autoComplete='off'
                value={data.name}
                onChange={handleChangeFn}
              />
            </div>
            <div className='form-field'>
              <label htmlFor='description'>Description</label>
              <textarea
                name='description'
                id='description'
                rows={4}
                required
                value={data.description}
                onChange={handleChangeFn}
              ></textarea>
            </div>
            <div className='form-field'>
              <label htmlFor='imageURL'>Image</label>

              <input
                type='text'
                name='imageURL'
                id='imageURL'
                autoComplete='off'
                value={data.imageURL}
                onChange={handleChangeFn}
              />
            </div>

            <div className='form-field'>
              <label htmlFor='url'>Link</label>
              <input
                type='text'
                name='url'
                id='url'
                required
                autoComplete='off'
                value={data.url}
                onChange={handleChangeFn}
              />
            </div>
            <div className='form-field'>
              <label htmlFor='bannerURL'>Banner</label>
              <input
                type='text'
                name='bannerURL'
                id='bannerURL'
                autoComplete='off'
                value={data.bannerURL}
                onChange={handleChangeFn}
              />
            </div>
          </Padding>
        </Card>
        <div className='button-spacer'>
          <Button
            text={"Back"}
            onClickFn={() => navigate(-1)}
            color='skyBlue hover'
          />
          <Button
            text={"Submit"}
            // onClickFn={submitFn}
            color='contrast mintGreen hover'
          />
        </div>
      </form>
    </div>
  )
}
