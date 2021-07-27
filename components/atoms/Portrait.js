import PropTypes from 'prop-types'

const Portrait = ({portrait, name}) => {
  return (
    <div className={portrait.tailwindAspectRatio}>
      <img
        className="object-cover rounded-lg shadow-lg"
        src={portrait.src}
        alt={`Portrettbilde av ${name}`}
      />
    </div>
  )
}

Portrait.propTypes = {
  portrait: PropTypes.shape({
    src: PropTypes.string.isRequired,
    tailwindAspectRatio: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
}

export default Portrait
