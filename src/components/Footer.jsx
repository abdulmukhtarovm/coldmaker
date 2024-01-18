
import { getText } from '../locales'

const Footer = () => {
    return (
        <div className='Footer' id='contacts'>
            <div className="titles text-center">
                <h2>{getText("co")}</h2>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3">
                        <div className="blok">
                            <h6>{getText("grafik")}</h6>
                            <p>{getText("duju")} 07:00-22:00</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="blok">
                            <h6>{getText("numbers")}</h6>
                            <a href="tel:+998901258850">+998 90 125 88 50</a>
                            <a href="tel:+998930028858">+998 93 002 88 58</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="blok">
                            <h6>{getText("address")}</h6>
                            <a href="/">{getText("addres")}</a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="map">
                            <iframe className='w-100' title='Location'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.5221740232977!2d69.23177989501815!3d41.28517405917598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a5bba91b4ed%3A0x73d49938dbeb065e!2zMjQg0YPQu9C40YbQsCDQkNGA0L3QsNGB0LDQuSwg0KLQsNGI0LrQtdC90YIgMTAwMTE1LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1658819649015!5m2!1sru!2s"
                                loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer