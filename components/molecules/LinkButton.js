import Link from 'next/link'
import Variant from '../atoms/Variant'
import classNames from 'classnames'

const VARIANT_MAPS = {
  [Variant.MAIN_GRAY]: 'bg-main-gray-500 text-black',
  [Variant.BLACK]: 'text-gray-200 bg-black hover:bg-gray-900',
  [Variant.WHITE]: 'text-gray-900 bg-white hover:bg-gray-50',
}

const LinkButton = ({variant = Variant.MAIN_GRAY, url = '#', linkText}) => {
  return (
    <div className="inline shadow-2xl">
      <Link href={url}>
        <a
          className={classNames(
            'inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium',
            VARIANT_MAPS[variant],
          )}
        >
          {linkText}
          <svg
            className="w-5 h-5 ml-3 -mr-1 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
      </Link>
    </div>
  )
}

export default LinkButton
