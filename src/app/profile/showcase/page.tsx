'use client'
import Script from 'next/script'
export default function Home() {

    //  onClick={() => console.log("sip")}

    return (
        <div>
            <blockquote data-instgrm-permalink="https://www.instagram.com/jonasphotoid/" className=" instagram-media bg-white border-0 rounded-[3px] mx-1 w-[62.5vw]">
                <div className="p-4" >
                    <a id="main_link" href="jonasphotoid" className="bg-white p-0 text-center w-full" target="_blank">
                        <div className="flex flex-row items-center">
                            <div className="bg-smokeWhite rounded-[50%] flex-grow-0 h-10 mr-4 w-10" >
                            </div>
                            <div className="flex flex-col flex-grow-1 justify-center">
                                <div className="bg-smokeWhite rounded-[4px] flex-grow-1 h-4 mb-2 w-24">
                                </div>
                                <div className="bg-smokeWhite rounded-[4px] flex-grow-0 h-4 w-16">
                                </div>
                            </div>
                        </div>
                        <div className="pt-2" >
                            <div className="text-blue-500 text-sm not-italic font-medium leading-5 "> View this post on Instagram</div>
                        </div>
                        <div className="py-0.5 px-0"></div>
                        <div className="flex flex-row mb-4 items-center">
                            <div>
                                <div className="bg-smokeWhite rounded-[50%] h-3 w-3 translate-x-0 translate-y-2"></div>
                                <div className="bg-smokeWhite h-3 rotate-45 translate-x-1 w-3 flex-grow-0 mr-4 ml-0.5"></div>
                                <div className="bg-smokeWhite rounded-[50%] h-3 w-3 translate-x-2 -translate-y-5"></div>
                            </div>
                            <div className="ml-2">
                                <div className="bg-smokeWhite rounded-[50%] flex-grow-0 h-5 w-5"></div>
                                <div className="w-0 h-0 border-t-0.5 border-solid border-transparent border-l-8 bg-smokeWhite border-b-0.5 translate-x-4 -translate-y-1 rotate-45"></div>
                            </div>
                            <div className="ml-auto">
                                <div className="w-0 border-t-8 border-solid border-smokeWhite border-r-8 border-r-solid border-r-transparent translate-x-4"></div>
                                <div className="bg-smokeWhite flex-grow-0 h-3 w-4 -translate-y-1"></div>
                                <div className="w-0 h-0 border-t-8 border-solid border-smokeWhite border-l-8 border-l-solid border-l-transparent -translate-y-1 -translate-x-2">
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow-1 justify-center mb-6">
                            <div className="bg-smokeWhite rounded-s flex-grow-0 h-4 mb-2 w-56">
                            </div>
                            <div className="bg-smokeWhite rounded-s flex-grow-0 h-4 w-36">
                            </div>
                        </div>
                    </a>

                </div>
            </blockquote>
            <Script src="https://www.instagram.com/embed.js"></Script>
            <Script type="text/javascript" src="https://www.embedista.com/j/instagramfeed.js"></Script>
        </div>

    );
}


