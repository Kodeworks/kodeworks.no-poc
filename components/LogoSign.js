import {memo} from 'react'
const LogoSign = () => {
  const scaleFactor = 0.915
  return (
    <>
      <div className="relative flex items-center justify-center isolate m-28">
        <img
          src="/Logo.svg"
          alt="Kodeworks Logo"
          className="z-10 flex h-12 transform translate-x-0.5 translate-y-0.5"
          style={{'--tw-scale-x': scaleFactor, '--tw-scale-y': scaleFactor}}
        />
        <img
          src="/Logo-symbol.svg"
          alt="Kodeworks Logo"
          className="absolute z-0 h-60"
        />
      </div>
    </>
  )
}

export default memo(LogoSign)
