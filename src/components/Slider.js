import '../App.css'
import { useRef, useState, useEffect } from 'react'
import BillingToggle from './BillingToggle'


function Slider() {
    const [clicked, setClicked] = useState(false)
    const [views, setViews] = useState('100K')
    const [price, setPrice] = useState("16.00")
    const [width, setWidth] = useState("45%")
    const input = useRef(null)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1300)
    function updateScreen() {
        setIsDesktop(window.innerWidth > 1300)
    }
    useEffect(() => {
        window.addEventListener('resize', updateScreen)
        return () => window.removeEventListener('resize', updateScreen)
    })
    function handleInput() {
        const inputValue = input.current.value
        
        switch (inputValue) {
            case "1":
                setViews("10K")
                setPrice("8.00")
                setWidth("0")
                break
            case "2":
                setViews("50K")
                setPrice("12.00")
                setWidth("25%")
                break
            case "3":
                setViews("100K")
                setPrice("16.00")
                setWidth("45%")
                break
            case "4":
                setViews("500K")
                setPrice("24.00")
                setWidth("65%")
                break
            case "5":
                setViews("1M")
                setPrice("32.00")
                setWidth("85%")
                break
            default:
                setViews("")
        }
    }

    function handleButtonClick() { 
        setClicked(!clicked)
    }

    function discount(stringNum) {
        const num = Number(stringNum)
        const discountNum = num * .75
        const discountNumString = discountNum.toString()
        const outputNum = discountNumString + ".00"
        return outputNum
    }
    function desktopWidth(width) {
        if (width <= 0) return
        const noPercent = width.slice(0, width.length - 1)
        const widthNum = Number(noPercent)
        const newWidth = widthNum - 5
        const outputWidth = newWidth.toString() + "%"
        return outputWidth
    }
    
    return (
        <div className="top-container">
            <div className="slider__views">{views} pageviews</div>
            <div className="slider-wrapper">
                <input type="range" min="1" max="5" step="1" defaultValue="3" className="slider" ref={input} onInput={handleInput}/>
                <div className="slider__fill" style={isDesktop ? {width: desktopWidth(width)} : {width: width}}></div>
            </div>
            <div className="slider__price">${clicked ? discount(price) : price} <span>/ month</span></div>
            <BillingToggle onClick={handleButtonClick} clicked={clicked} isDesktop={isDesktop} />
        </div>
    )
}

export default Slider