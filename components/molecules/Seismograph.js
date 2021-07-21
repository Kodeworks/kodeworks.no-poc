import {urlPrefix} from '../../utils/urlPrefix'
const Seismograph = ({children}) => {
  return (
    <div className="relative flex justify-center">
      <img
        src={urlPrefix + '/seismograph.svg'}
        alt="Generative art looking like a seismogram based on digital interactions in Kodeworks"
      />
      {children}
    </div>
  )
}

export default Seismograph
