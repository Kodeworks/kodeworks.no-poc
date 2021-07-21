import Variant from '../atoms/Variant'
import classNames from 'classnames'

const VARIANT_MAPS = {
  [Variant.MAIN_GRAY]: 'bg-main-gray-500 text-black',
  [Variant.BLACK]: 'bg-gray-900 text-gray-200',
  [Variant.WHITE]: 'bg-gray-50 text-gray-900',
}

const CardContainer = ({variant = Variant.MAIN_GRAY, children}) => {
  return (
    <div
      className={classNames(
        'max-w-md px-4 py-12 mx-auto text-left sm:max-w-7xl sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24',
        VARIANT_MAPS[variant],
      )}
    >
      {children}
    </div>
  )
}
export default CardContainer
