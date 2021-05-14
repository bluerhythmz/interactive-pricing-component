import '../App.css'
import img from '../images/pattern-circles.svg'

function Header() {
    return (
        <header className="header">
            <img src={img} alt="" className="header__img" />
            <h1 className="header__title">Simple, traffic-based pricing</h1>
            <p className="header__paragraph">Sign-up for our 30-day trial. No credit card required.</p>
        </header>
    )
}

export default Header
