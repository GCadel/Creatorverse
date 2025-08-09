export default function Padding({
  children,
  paddingPx = 16,
  centered,
  container = false,
  otherClass = null,
}) {
  return (
    <div
      className={`${centered ? "center" : ""}  ${
        container ? "container" : ""
      } ${otherClass ? otherClass : ""}`}
      style={{ padding: paddingPx }}
    >
      {children}
    </div>
  )
}
