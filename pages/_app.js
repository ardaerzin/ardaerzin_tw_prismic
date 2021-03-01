import 'Styles/globals.css'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import useDocumentBackground from 'lib/hooks/useDocumentBackground'

import PageWrapper from 'Components/Common/Page/PageWrapper'
import Footer from 'Components/Navigation/Footer'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import theme, { ThemeContext } from 'lib/theme'

const MobileMenuContainer = dynamic(() => import('Components/Navigation/MobileMenu'), { ssr: false })
const Header = dynamic(() => import('Components/Navigation/Header'))

const MyApp = ({ Component, pageProps, router }) => {
  const pageRef = useRef()
  const [scrollY] = useDocumentBackground()
  const [features, setFeatures] = useState([])
  useEffect(() => {
    import('lib/motionConfig').then(res => {
      setFeatures(res.default)
    })
  }, [])
  return (
    <ThemeContext.Provider value={theme.colors}>
      <MotionConfig
        features={features}
      >
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Raleway:wght@300;400;500" rel="stylesheet" />
        </Head>
        <MobileMenuContainer />
        <PageWrapper
          scrollY={scrollY}
          ref={pageRef}
        >
          <Header />
          <AnimatePresence
            exitBeforeEnter
          >
            <Component
              key={router.pathname}
              {...pageProps}
            />
          </AnimatePresence>
        </PageWrapper>
        <Footer
          scrollY={scrollY}
          pageRef={pageRef}
        />
      </MotionConfig>
    </ThemeContext.Provider>
  )
}

MyApp.propTypes = {
  router: PropTypes.object,
  Component: PropTypes.any,
  pageProps: PropTypes.object
}

export default MyApp
