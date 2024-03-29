import ButtonStyled from "./ButtonStyled"
import Link from 'next/link'
import { useRouter } from "next/router"
import { useState } from 'react'
const Navbar = () => {
    const router=useRouter()
    const [selected, setSelected] = useState<string>('home')
    const [hamburger,setHamburger]=useState<boolean>(false)
    const navlinks = [
        {
            text: "home",
            link: ""
        },
        // {
        //     text: "about",
        //     link: "/"
        // },
        {
            text: "solutions",
            link: "#solutions"
        },
        // {
        //     text: "FAQ",
        //     link: "/"
        // },
        {
            text: "work with us",
            link: "https://fr2iizdys3b.typeform.com/to/e4nuAjp1"
        }
    ]
    return (
        <>
            <nav className="z-30 w-full h-[88px] md:px-[106px] px-6 py-[27px] flex justify-between items-center  backdrop-blur-3xl backdrop-brightness-150 bg-transparent fixed top-0">

                <div>
                    <svg width="140" height="18" viewBox="0 0 140 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="140" height="17" fill="url(#pattern0)" />
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_150_698" transform="matrix(0.00341297 0 0 0.0281068 0 -0.00592251)" />
                            </pattern>
                            <image id="image0_150_698" width="293" height="36" href="data:image/png;base64,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" />
                        </defs>
                    </svg>
                </div>
                <ul className="lg:flex gap-12 hidden">
                    {navlinks.map((item, i) => {
                        return (
                            <Link onClick={() => setSelected(item.text)} key={`navbar${i}`} href={`${item.link}`}>
                                <li className={`capitalize  text-[14px] font-[400] ${selected == item.text ? "text-[#4B61DC] !font-[700]" : " text-[#5E5E5E] "}`}>
                                    {item.text}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
                <ButtonStyled classes={"lg:flex hidden"} handleClick={() => { return router.push('https://fr2iizdys3b.typeform.com/to/T23kcKoM') }} text={'enquire now'} type={'primary'} />
                <button onClick={()=>setHamburger(!hamburger)} className=" lg:hidden flex h-7 w-7">
                    <svg fill="none" viewBox="0 0 15 15" height="100%" width="100%" >
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </nav>
            <div className={`md:w-[25%] w-[61%] z-40 px-[1.15rem] py-[1.35rem] text-white fixed h-[100vh] bg-[#4B61DC] lg:hidden transition ease-in-out delay-150 ${hamburger ? ' ' : '-translate-x-[80vw]'}`}>
                <div onClick={()=>setHamburger(false)} className=" h-6 font-semibold w-6 mb-[4.7rem] ">
                    <svg fill="none" viewBox="0 0 15 15" height="100%" width="100%" >
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <ul className="lg:hidden  gap-6 flex  flex-col px-[1.15rem]">
                    {navlinks.map((item, i) => {
                        return (
                            <Link onClick={() => {return (setSelected(item.text) ,setHamburger(false))}} key={`navbar${i}`} href={`${item.link}`}>
                                <li className={`capitalize  text-base  text-white ${selected == item.text ? " !font-bold" : " font-normal "}`}
                                >
                                    {item.text}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
                <ButtonStyled classes={"flex lg:hidden px-5 py-2 mt-10 ml-[1.15rem]  "} handleClick={() => { return router.push('https://fr2iizdys3b.typeform.com/to/T23kcKoM') }} text={'Enquire now'} type={'secondary'} />
            </div>
        </>
    )
}


export default Navbar
