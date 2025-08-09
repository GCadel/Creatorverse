export default function Card({ children, bgColor = "white" }) {
  return <div className={`card ${bgColor}`}>{children}</div>
}
