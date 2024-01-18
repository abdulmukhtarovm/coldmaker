
import { getText } from '../locales'

const Benefits = () => {
  return (
    <div className='Benefits'>
            <div className="titles text-center">
                <h2>{getText("benefitsT")}</h2>
            </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-3 mt-3 mt-lg-0">
                    <div className="card">
                      <div className="img">
                          <img src="img/benefiticon1.png" alt="" />
                      </div>
                        <h6>{getText("benefitsCard1T")}</h6>
                        <p>{getText("benefitsCard1P")}</p>
                    </div>
                </div>
                <div className="col-lg-3 mt-3 mt-lg-0">
                    <div className="card">
                      <div className="img">
                          <img src="img/benefiticon2.png" alt="" />
                      </div>
                        <h6>{getText("benefitsCard2T")}</h6>
                        <p>{getText("benefitsCard2P")}</p>
                    </div>
                </div>
                <div className="col-lg-3 mt-3 mt-lg-0">
                    <div className="card">
                      <div className="img">
                          <img src="img/benefiticon3.png" alt="" />
                      </div>
                        <h6>{getText("benefitsCard1T")}</h6>
                        <p>{getText("benefitsCard1P")}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Benefits