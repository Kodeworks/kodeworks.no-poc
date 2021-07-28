import PropTypes from 'prop-types'

const ProjectIllustration = ({illustration}) => {
  return (
    <div className={illustration.tailwindAspectRatio}>
      <img
        className="object-cover w-full h-full shadow-lg"
        src={illustration.src}
        alt={illustration.altText}
      />
    </div>
  )
}

ProjectIllustration.propTypes = {
  illustration: PropTypes.shape({
    src: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    tailwindAspectRatio: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProjectIllustration
