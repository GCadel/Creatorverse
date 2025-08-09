import { useEffect, useState } from "react"
import { fetchAllCreators } from "../api"
import Button from "../components/Button"
import Card from "../components/Card"
import ContentCreator from "../components/ContentCreator"
import Padding from "../components/Padding"
import LoadingCard from "../components/LoadingCard"

// For viewing all creators
export default function ShowCreators() {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCreators() {
      const creatorList = await fetchAllCreators()
      if (creatorList.length > 0) {
        setCreators(creatorList)
      }
      setLoading(false)
    }
    loadCreators()
  }, [])

  if (loading) {
    return <LoadingCard itemName={"Creators"} />
  }
  return (
    <Card bgColor='tan'>
      <Padding>
        <h1 style={{ textAlign: "center" }}>Creators</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1em",
          }}
        >
          <Button
            text={"New Creator"}
            color='cottonCandy hover'
            link={"/new"}
          />
        </div>
        <Padding
          centered={true}
          container={true}
        >
          {creators.length > 0 ? (
            creators.map((creator) => (
              <ContentCreator
                creator={creator}
                key={creator.id}
              />
            ))
          ) : (
            <h2>No Creators Found</h2>
          )}
        </Padding>
      </Padding>
    </Card>
  )
}
