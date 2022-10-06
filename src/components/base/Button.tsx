export default function Button({ value, classes }: { value: string; classes: string }) {
  return (
    <button
      className={`btn ${classes}`}
      type="button"
    >
      {value}
    </button>
  )
}
