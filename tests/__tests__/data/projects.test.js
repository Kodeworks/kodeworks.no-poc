import {render, screen} from '@testing-library/react'
import projects from 'data/projects'
import Prosjekt from 'pages/prosjekter/[prosjekt].js'
test('project data structure for each project should be accepted by the propTypes definition of the Prosjekt page', async () => {
  projects.forEach(project => {
    render(<Prosjekt project={project} />)
  })
})
