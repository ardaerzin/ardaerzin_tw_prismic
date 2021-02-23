import { getPersonalProjects, getRefProjects } from 'lib/prismic/endpoints'
import LandingReferencesSection from 'Components/Landing/References'
import LandingProjectsSection from 'Components/Landing/Projects'
import LandingServicesSection from 'Components/Landing/Services'
import LandingHero from 'Components/Landing/Hero'
import Page from 'Components/Page'
import PropTypes from 'prop-types'

const LandingPage = ({ references, projects }) => {
  return (
    <Page>
      <LandingHero />
      <LandingServicesSection />
      <LandingReferencesSection references={references} />
      <LandingProjectsSection projects={projects} />
    </Page>
  )
}

LandingPage.propTypes = {
  references: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired
}

export default LandingPage

export async function getStaticProps() {
  const references = await getRefProjects()
  const projects = await getPersonalProjects()
  return {
    props: { references, projects }
  }
}
