import { Link } from "react-router"
import Card from "./Card"

export default function Button({
  text,
  link,
  external = false,
  onClickFn,
  color = "regular",
}) {
  return (
    <Card bgColor={color}>
      {link ? (
        external ? (
          <a
            href={link}
            className='button'
            referrerPolicy='no-referrer'
            target='_blank'
            style={{
              display: "block",
              padding: "2px",
              width: "100%",
              height: "100%",
            }}
          >
            {text}
          </a>
        ) : (
          <Link
            className='button'
            to={link}
          >
            {text}
          </Link>
        )
      ) : (
        <button
          className='button'
          onClick={onClickFn}
        >
          {text}
        </button>
      )}
    </Card>
  )
}
