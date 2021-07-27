import people from '../../data/people'
import Person from '../organisms/Person'
const PeopleMasonry = () => {
  return (
    <div className="box-border mx-auto space-y-4 md:masonry-2-col lg:masonry-3-col before:box-inherit after:box-inherit gap-x-4 md:gap-x-6 lg:gap-x-12 xl:gap-x-16">
      {people.map(person => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  )
}
export default PeopleMasonry
