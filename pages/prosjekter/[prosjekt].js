import projects from '../../data/projects'
import CardContainer from '../../components/molecules/CardContainer'
import Variant from '../../components/atoms/Variant'
import ProjectLayout from '../../components/templates/ProjectLayout'
import ProjectIllustration from '../../components/atoms/ProjectIllustration'
import PropTypes from 'prop-types'

const Prosjekt = ({project}) => {
  return (
    <ProjectLayout>
      <article className="min-h-screen text-gray-200 bg-black">
        <section className="flex items-center justify-center ">
          <div className="mt-8 mb-4 text-center sm:mt-20">
            <h1 className="text-3xl tracking-logo font-regular sm:text-4xl">
              {project.name.toUpperCase()}
            </h1>
            <p className="text-gray-400">{project.technologies.join(', ')}</p>
          </div>
        </section>
        <section>
          <div className="p-4 text-center sm:py-8">
            <h2 className="text-xl font-normal tracking-tight sm:text-2xl">
              Input
            </h2>
            {project.input.map((paragraph, index) => (
              <p className="mx-auto mt-3 sm:w-2/3" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
        <div className="mx-auto max-w-7xl">
          <ProjectIllustration
            illustration={project.illustration}
          ></ProjectIllustration>
        </div>
        <section className="p-2 xl:mx-auto xl:max-w-screen-xl sm:p-4 md:p-8 lg:p-12">
          <div className="py-4 space-y-4 md:mr-auto md:w-1/2 md:pr-10">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vulputate lectus eu maximus tristique. Etiam ut dolor nec tellus
              pellentesque fringilla id nec orci. Ut eu est tristique, dapibus
              nibh vel, iaculis nisi. Nam ac pharetra ligula. Sed convallis, mi
              a efficitur lacinia, velit elit tincidunt enim, vitae scelerisque
              odio tortor mollis mauris. Nam dignissim, nibh eu suscipit
              molestie, ex lorem egestas est, eu ultricies nibh leo nec nulla.
            </p>
            <p>
              Proin vel turpis id lorem tristique pharetra vel et quam.
              Pellentesque a tellus sit amet ligula aliquet feugiat at in erat.
              Cras convallis, urna sed molestie scelerisque, velit dolor dapibus
              tellus, nec fringilla nunc felis tempus mauris. Duis at tempus
              sem. In hac habitasse platea dictumst. Donec vitae leo fringilla,
              efficitur sem ut, congue magna. Etiam in finibus orci. Aliquam
              euismod sodales erat sit amet porttitor. Nam a accumsan turpis.
            </p>
          </div>
        </section>
        <section>
          <CardContainer variant={Variant.BLACK}>
            <div className="text-center">
              <h2 className="mt-2 text-xl tracking-tight text-white font-regular sm:text-2xl">
                Output
              </h2>
              {project.output.map((paragraph, index) => (
                <p className="my-2" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContainer>
        </section>
        <section className="p-2 xl:mx-auto xl:max-w-screen-xl sm:p-4 md:p-8 lg:p-12">
          <div className="py-4 space-y-4 md:ml-auto md:w-1/2 md:pl-10">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vulputate lectus eu maximus tristique. Etiam ut dolor nec tellus
              pellentesque fringilla id nec orci. Ut eu est tristique, dapibus
              nibh vel, iaculis nisi. Nam ac pharetra ligula. Sed convallis, mi
              a efficitur lacinia, velit elit tincidunt enim, vitae scelerisque
              odio tortor mollis mauris. Nam dignissim, nibh eu suscipit
              molestie, ex lorem egestas est, eu ultricies nibh leo nec nulla.
            </p>
            <p>
              Proin vel turpis id lorem tristique pharetra vel et quam.
              Pellentesque a tellus sit amet ligula aliquet feugiat at in erat.
              Cras convallis, urna sed molestie scelerisque, velit dolor dapibus
              tellus, nec fringilla nunc felis tempus mauris. Duis at tempus
              sem. In hac habitasse platea dictumst. Donec vitae leo fringilla,
              efficitur sem ut, congue magna. Etiam in finibus orci. Aliquam
              euismod sodales erat sit amet porttitor. Nam a accumsan turpis.
            </p>
          </div>
        </section>
      </article>
    </ProjectLayout>
  )
}

Prosjekt.propTypes = {
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
