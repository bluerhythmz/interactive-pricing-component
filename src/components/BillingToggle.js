import '../App.css'

function BillingToggle({onClick, clicked, isDesktop}) {
    return (
        <div className="billing-container">
            <div className="billing__text">Monthly Billing</div>
            <div onClick={onClick} className={clicked ? "billing__toggle active" : "billing__toggle"} >
                <div className="billing__button" style={clicked ? {transform: "translateX(150%)"} : {transform: "translateX(0%)"}}></div>
            </div>
            {isDesktop ? <div className="billing__text">Yearly Billing <span>-25% discount</span></div> : <div className="billing__text">Yearly Billing <span>-25%</span></div> }
        </div>
    )
}

export default BillingToggle
