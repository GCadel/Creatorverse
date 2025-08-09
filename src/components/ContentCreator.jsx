import { Link } from "react-router"
import Card from "./Card"
import Padding from "./Padding"
import Button from "./Button"

export default function ContentCreator({ creator }) {
  return (
    <>
      <Card bgColor='green'>
        <Padding centered={true}>
          {creator.imageURL ? (
            <img
              className='creator-image small-image'
              style={{ margin: "0 auto" }}
              src={creator.imageURL}
              alt={creator.name}
            />
          ) : (
            <div
              className='creator-image-placeholder  small-image '
              style={{ margin: "0 auto", backgroundColor: "pink" }}
            ></div>
          )}
          <Card bgColor='blue hover'>
            <h2>
              <Link
                to={`/creator/${creator.id}`}
                style={{
                  textAlign: "center",
                  display: "block",
                  wordBreak: "break-word",
                }}
              >
                {creator.name}
              </Link>
            </h2>
          </Card>
          <p className='ellipsis-text'>{creator.description}</p>
        </Padding>
      </Card>
    </>
  )
}
