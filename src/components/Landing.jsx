import Card from "./Card"
import Padding from "./Padding"

export default function Landing() {
  const colors = [
    "softSky",
    "sageGreen",
    "lemonYellow",
    "peachCream",
    "pastelPink",
    "lavenderMist",
    "tealTint",
    "mintGreen",
    "sunflower",
    "softCoral",
    "babyPink",
    "lilac",
    "skyBlue",
    "freshGreen",
    "goldYellow",
    "salmonPink",
    "cottonCandy",
    "amethyst",
    "aquaBlue",
    "mossGreen",
    "deepGold",
    "strawberry",
    "hotPink",
    "vividPurple",
  ]

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  return (
    <Card bgColor={getRandomItem(colors)}>
      <Padding centered={true}>
        <div
          style={{
            textAlign: "center",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Card>
            <Padding>
              <h1>CREATORVERSE</h1>
              <h2 style={{ fontStyle: "italic" }}>Web Edition</h2>
            </Padding>
          </Card>

          <p>
            Find your next inspiring content creator. Explore the wonders of web
            development technologies.
          </p>
        </div>
      </Padding>
    </Card>
  )
}
