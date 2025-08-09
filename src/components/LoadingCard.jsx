import Card from "./Card"
import Padding from "./Padding"

export default function LoadingCard({ itemName }) {
  return (
    <Card>
      <Padding>
        <h1 style={{ textAlign: "center" }}>Loading {itemName}</h1>
      </Padding>
    </Card>
  )
}
