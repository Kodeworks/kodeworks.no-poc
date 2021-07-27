const Portrait = ({portrait, name}) => {
  return (
    <div className="aspect-w-3 aspect-h-2">
      <img
        className="object-cover rounded-lg shadow-lg"
        src={portrait}
        alt={`Portrettbilde av ${name}`}
      />
    </div>
  )
}
export default Portrait
