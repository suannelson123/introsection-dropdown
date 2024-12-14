import { useEffect, useState } from "react";
import { CompanyLogo, imageHeroMobile, imageHeroDesktop } from "../constant";
import Button from "../ReusableComponents/Button";


const Hero = () => {

    const [isViewport, setIsViewport] = useState(window.innerWidth);


    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsViewport(window.innerWidth);

        });
    }, [isViewport]);

    return (
        <main className=" pt-[5rem] text-black lg:flex flex-row-reverse lg:pt-[10rem]">

            {/* HERO SECTION */}
            <div className="lg:flex-1 lg:flex items-start justify-center">
                <img className="object-cover object-center lg:max-h-[560px]" src={isViewport >= 1024 ? imageHeroDesktop : imageHeroMobile} alt="image-hero" />
            </div>


            {/* HERO TEXT HEADERS */}

            <div className="py-[2rem] px-[1rem] font-bold text-center flex flex-col gap-5 lg:flex-1 lg:justify-end lg:px-[4rem] lg:leading-[4rem]">
                <h1 className="text-[2rem] lg:text-[4rem] lg:text-start">Make remote Work</h1>
                <p className="text-color-mediumGray text-balance lg:my-[4rem] lg:text-[1.5rem] lg:text-start">Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.</p>
                <div>
                    <Button text="Learn more" styles="bg-color-almostBlack p-[1rem] px-[1.5rem] text-color-almostWhite rounded-[1rem] lg:px-[5rem] lg:py-[0.5rem] hover:bg-color-almostWhite transition-all hover:text-black border border-color-mediumGray" />
                </div>
                {/* COMPANY LOGOS */}
                <div className="flex justify-evenly pt-[2rem] pb-[4rem] lg:pb-[2rem] lg:pt-[4rem]">
                    {
                        CompanyLogo.map((logo, index) => (
                            <img className="object-contain w-[50px] lg:w-[100px]" key={index} src={logo} alt="CompanyLogo" />
                        ))
                    }
                </div>
            </div>




        </main>
    );
};

export default Hero;
