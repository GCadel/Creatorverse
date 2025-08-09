import Button from "../components/Button"
import Card from "../components/Card"
import Padding from "../components/Padding"

export default function NotFound() {
  const messages = [
    "What are you doing here?",
    "How did you get here?",
    "Who sent you?",
    "Hi, Mom!",
  ]

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
    <Card>
      <Padding
        container={true}
        // centered={true}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "2rem",
            minHeight: "45dvh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <h1>404</h1>
          <p>{getRandomItem(messages)}</p>
          <Button
            text={"Go Home"}
            link={"/"}
            color={`${getRandomItem(colors)} hover`}
          />
        </div>
      </Padding>
    </Card>
  )
}
