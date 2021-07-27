import projects from '../../data/projects'
import LinkButton from './LinkButton'
import Variant from '../atoms/Variant'
import PropTypes from 'prop-types'

const PersonProjects = ({personProjects}) => {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {personProjects.map(projectName => {
        const project = projects.find(project => project.name === projectName)
        return (
          <LinkButton
            variant={Variant.BLACK}
            key={project.id}
            linkText={project.name}
          ></LinkButton>
        )
      })}
    </div>
  )
}

PersonProjects.propTypes = {
  personProjects: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default PersonProjects
