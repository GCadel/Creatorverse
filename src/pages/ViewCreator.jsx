import { useEffect, useState } from "react"
import Card from "../components/Card"
import { useNavigate, useParams } from "react-router"
import { getCreatorById } from "../api"
import Padding from "../components/Padding"
import Button from "../components/Button"
import LoadingCard from "../components/LoadingCard"

// For viewing a single creator
export default function ViewCreator() {
  const params = useParams()
  const navigate = useNavigate()

  const [creator, setCreator] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCreator() {
      const creator = await getCreatorById(params.id)
      if (creator) {
        setCreator(creator)
      }
      setLoading(false)
    }
    loadCreator()
  }, [])
  if (loading) {
    return <LoadingCard itemName={"Creator"} />
  } else if (!creator)
    return (
      <Card>
        <Padding>
          <h1>Uh Oh</h1>
          <p>Looks like this creator doesn't exist!</p>
        </Padding>
      </Card>
    )
  return (
    <div>
      <Card bgColor='green'>
        {creator.bannerURL && (
          <img
            src={creator.bannerURL}
            alt={creator.name + " banner"}
            className='creator-image-banner'
            height={150}
            style={{ objectFit: "cover" }}
          />
        )}
        <Padding
          centered={true}
          otherClass='flexi-creator'
        >
          {creator.imageURL ? (
            <img
              className='creator-image'
              src={creator.imageURL}
              alt={creator.name}
            />
          ) : (
            <div
              className='creator-image-placeholder'
              style={{ backgroundColor: "pink" }}
            ></div>
          )}
          <h1 style={{ wordBreak: "break-word" }}>{creator.name}</h1>
          <p>{creator.description}</p>
          <Button
            link={creator.url}
            text={
              <img
                className='yt'
                src='/youtube.svg'
              />
            }
            external={true}
            color='white'
          />
        </Padding>
      </Card>

      <div className='button-spacer'>
        <Button
          text={"Back"}
          onClickFn={() => navigate(-1)}
          color='skyBlue hover'
        />
        <Button
          text={"Edit"}
          link={`/creator/${creator.id}/edit`}
          color='goldYellow hover'
        />
      </div>
    </div>
  )
}
