
import { getText } from '../locales'

const Header = () => {
    return (
        <div className='Header'>
            <div className="image">
                <img src="img/header.png" alt="" />
            </div>
            <div className="bg-blue"></div>
            <div className="info">
                <div className="text">
                    <h1>{getText("headerT")}</h1>
                    <div className="myBtn">
                        <a href="tel:+998930028858">{getText("zakazZvonok")}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header