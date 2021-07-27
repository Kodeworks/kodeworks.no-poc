import projects from '../../data/projects'
import LinkButton from './LinkButton'
import Variant from '../atoms/Variant'

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
export default PersonProjects
