
import { getText } from '../locales'

const Services = () => {
    return (
        <div className='Services' id='services'>
            <div className="titles text-center">
                <h2>{getText("servicesT")}</h2>
                <p>{getText("servicesP")}</p>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 mb-3 mb-lg-0">
                        <div className="card">
                            <div className="card-top">
                                <img className='w-100' src="./img/service1.png" alt="" />
                            </div>
                            <div className="card-body">
                                <h4>{getText("remontT")}</h4>
                                <ul>
                                    <li>{getText("washingMachines")}</li>
                                    <li>{getText("fridge")}</li>
                                    <li>{getText("freezer")}</li>
                                    <li>{getText("showcases")}</li>
                                    <li>{getText("oven")}</li>
                                    <li>{getText("vacumCleaners")}</li>
                                    <li>{getText("microwaves")}</li>
                                    <li>{getText("tv")}</li>
                                </ul>
                            </div>
                                <div className="myBtn">
                                    <a href="tel:+998930028858">{getText("orderServis")}</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-3 mb-lg-0">
                        <div className="card">
                            <div className="card-top">
                                <img className='w-100' src="./img/service2.png" alt="" />
                            </div>
                            <div className="card-body">
                                <h4>{getText("installation")}</h4>
                                <ul>
                                    <li>{getText("washingMachines")}</li>
                                    <li>{getText("plumbingS")}</li>

                                </ul>
                            </div>
                                <div className="myBtn">
                                    <a href="tel:+998930028858">{getText("orderServis")}</a>
                                </div>
                        </div>
                    </div>
                </div>
                <h6>{getText("garantiya")}</h6>
            </div>

        </div>
    )
}

export default Services