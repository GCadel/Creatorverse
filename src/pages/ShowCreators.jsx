import { useEffect, useState } from "react"
import { fetchAllCreators } from "../api"
import Button from "../components/Button"
import Card from "../components/Card"
import ContentCreator from "../components/ContentCreator"
import Padding from "../components/Padding"
import LoadingCard from "../components/LoadingCard"
import Landing from "../components/Landing"

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
    <>
      <Landing />
      <br />
      <Card bgColor='tan'>
        <Padding>
          <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
            Browse Creators
          </h2>
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
              <div style={{ gridColumn: "1/ 3", textAlign: "center" }}>
                <Card>
                  <Padding>
                    <h2 style={{ margin: "0 auto" }}>No Creators Found</h2>
                  </Padding>
                </Card>
              </div>
            )}
          </Padding>
        </Padding>
      </Card>
    </>
  )
}
