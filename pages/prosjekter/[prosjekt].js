import projects from '../../data/projects'
import ProjectLayout from '../../components/templates/ProjectLayout'
import ProjectIllustration from '../../components/atoms/ProjectIllustration'
import PropTypes from 'prop-types'

const Prosjekt = ({project}) => {
  return (
    <ProjectLayout>
      <section className="flex items-center justify-center text-gray-200 bg-gray-900">
        <div className="my-8 text-center">
          <h1 className="mt-2 text-3xl tracking-logo font-regular sm:text-4xl">
            {project.name.toUpperCase()}
          </h1>
          <p>{project.technologies.join(', ')}</p>
        </div>
      </section>
      <section className="px-2 xl:mx-auto xl:max-w-screen-xl sm:px-4 md:px-8 lg:px-16">
        <div className="mt-4 lg:mt-4 ">
          <article className="grid grid-cols-3 px-2 md:px-4">
            <div className="col-span-3 md:mt-10 md:col-span-1">
              <ProjectIllustration
                illustration={project.illustration}
              ></ProjectIllustration>
            </div>
            <div className="col-span-3 md:p-4 md:col-span-2 md:col-start-2">
              <h2 className="mt-4 text-2xl tracking-tight font-regular sm:text-4xl">
                Input
              </h2>
              {project.input.map((paragraph, index) => (
                <p className="my-2" key={index}>
                  {paragraph}
                </p>
              ))}
              <h2 className="mt-4 text-2xl tracking-tight font-regular sm:text-4xl">
                Output
              </h2>
              {project.output.map((paragraph, index) => (
                <p className="my-2" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </ProjectLayout>
  )
}

Prosjekt.PropTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    illustration: PropTypes.shape({
      src: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
      tailwindAspectRatio: PropTypes.string.isRequired,
    }),
    input: PropTypes.arrayOf(PropTypes.string).isRequired,
    output: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export async function getStaticPaths() {
  const paths = projects.map(project => ({
    params: {prosjekt: project.name.toLowerCase()},
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const project = projects.find(
    p => p.name.toLowerCase() === params.prosjekt.toLowerCase(),
  )

  return {props: {project}}
}

export default Prosjekt
