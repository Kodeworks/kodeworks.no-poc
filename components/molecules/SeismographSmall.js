import {urlPrefix} from '../../utils/urlPrefix'
const SeismographSmall = ({children}) => {
  return (
    <div className="aspect-w-3 aspect-h-4">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src={urlPrefix + '/SeismographSmall.svg'}
        alt=""
      />
    </div>
  )
}

export default SeismographSmall
