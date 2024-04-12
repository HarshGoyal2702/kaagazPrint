import { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)


import pic1 from "../../assets/Loader/pic1.jpg"
import pic2 from "../../assets/Loader/pic2.jpg"
import pic3 from "../../assets/Loader/pic3.jpg"
import pic4 from "../../assets/Loader/pic4.jpg"

const Loader = () => {
    const box = useRef(null);

    useGSAP(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".part-1",
                start: "50% 50%",
                end: "190% 50%",
                scrub: true,
                // markers:true,
                pin: true,
            }
        })

        tl.to(".rotate-div", {
            rotate: -15,
            scale: 0.8,
        }, 'a')
        tl.to("#row-div-2", {
            marginTop: "5%"
        }, 'a')
        tl.to("#row-div-3", {
            marginTop: "-2%"
        }, 'a')
        tl.to("#row-div-4", {
            marginTop: "-8%"
        }, 'a')
        tl.to("#row-div-5", {
            marginTop: "-10%"
        }, 'a')
        tl.to(".overlay-div h1", {
            opacity: "1",
            delay: 0.2,
        }, 'a')
        tl.to(".overlay-div", {
            backgroundColor: "#000000b4",
        }, 'a')
        tl.to(".scrolling", {
            width: "100%",
        }, 'a')

     

    }, { scope : box })
return (
    <div id='main' className='z-50' ref={box}>
        <div className="part-1">
            <div className="content-part-1">
                <div className="rotate-div">
                    <div id="row-div-1" className="row-div">
                        <div className="img-div">
                            <img src={pic1} alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic2} alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic3}alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic4} alt="" />
                        </div>
                    </div>
                    <div id="row-div-2" className="row-div">
                        <div className="img-div">
                            <img src={pic1} alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic2} alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic3}alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic4} alt="" />
                        </div>
                    </div>
                    <div id="row-div-3" className="row-div">
                    <div className="img-div">
                            <img src={pic1} alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic2} alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic3}alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic4} alt="" />
                        </div>
                    </div>
                    <div id="row-div-4" className="row-div">
                    <div className="img-div">
                            <img src={pic1} alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic2} alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic3}alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic4} alt="" />
                        </div>
                    </div>
                    <div id="row-div-5" className="row-div">
                    <div className="img-div">
                            <img src={pic1} alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic2} alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic3}alt="" />
                        </div>
                        <div className="img-div">
                            <img src={pic4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="overlay-div">
                    <h1>Kagaz<span className='text-gray-500'>Prints</span></h1>
                    <div className="scroll-down">
                        <h3>SCROLL DOWN</h3>
                        <div className="scroll-p">
                            <div className="scrolling"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Loader
