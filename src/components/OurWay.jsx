
import { getText } from '../locales'

const OurWay = () => {
  return (
    <div className='OurWay' id='about'>
        <div className="container">
            <div className="row">
                <div className="col-md-6 z-2">
                    <div className="img">
                        <img src="img/ourway.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="info">
                        <div className="titles">
                        <h2>{getText("ourWay")}</h2>
                        </div>
                        <p>{getText("ourWayP")}</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default OurWay