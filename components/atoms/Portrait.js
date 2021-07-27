import PropTypes from 'prop-types'

const Portrait = ({portrait, name}) => {
  return (
    <div className="aspect-w-2 aspect-h-3">
      <img
        className="object-cover rounded-lg shadow-lg"
        src={portrait}
        alt={`Portrettbilde av ${name}`}
      />
    </div>
  )
}

Portrait.propTypes = {
  portrait: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Portrait
