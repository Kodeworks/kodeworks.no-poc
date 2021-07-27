import Portrait from '../atoms/Portrait'
import PersonProjects from '../molecules/PersonProjects'
import PropTypes from 'prop-types'

const Person = ({person}) => {
  return (
    <div className="space-y-4">
      <Portrait portrait={person.portrait} name={person.name}></Portrait>
      <div className="space-y-2">
        <div className="space-y-1 text-lg font-medium leading-6">
          <h3>{person.name}</h3>
          <PersonProjects personProjects={person.projects}></PersonProjects>
        </div>
      </div>
    </div>
  )
}

Person.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    portrait: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default Person
