import { HeroHeader } from 'Components/Common/Headers'
import { IoChevronBackOutline } from 'react-icons/io5'
import CommonSection from 'Components/Common/Section'
import Button from 'Components/Common/Button'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Page from 'Components/Page'
import Link from 'next/link'

const Error = forwardRef(({ statusCode, ...rest }, ref) => {
  return (
    <Page>
      <CommonSection
        className='lg:space-x-16 space-y-8 lg:space-y-0'
      >
        <div
          className='max-w-sm flex-shrink'
        >
          <img
            src='/undraw/404.svg'
            className='w-full'
            alt='next'
          />
        </div>
        <div className='flex flex-col flex-grow space-y-4 w-full max-w-prose'>
          <HeroHeader>
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : 'no can dosville babydoll...'}
          </HeroHeader>
          <p
            className='
              font-body
              text-2xl
              lg:text-4xl
              max-w-prose
            '
          >
            If you think this page should exist, let me know or maybe just try again later
          </p>
          <Link
            href='/'
            className='rounded-md shadow self-start'
          >
            <Button className='space-x-1'>
              <IoChevronBackOutline />
              <span>
                home
              </span>
            </Button>
          </Link>
        </div>
      </CommonSection>
    </Page>
  )
})

Error.propTypes = {
  statusCode: PropTypes.any
}

export default Error
