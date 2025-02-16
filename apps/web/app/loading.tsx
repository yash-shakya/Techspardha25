"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Loading() {
    const [visibleSquares, setVisibleSquares] = useState(0);
    const totalSquares = 9;
    const delay = 200; // milliseconds
    useEffect(() => {
        let timeoutIds: ReturnType<typeof setTimeout>[] = [];

        const showSquares = () => {
            setVisibleSquares(0);
            for (let i = 0; i < totalSquares; i++) {
                timeoutIds.push(
                    setTimeout(() => {
                        setVisibleSquares((prev) => prev + 1);
                    }, i * delay)
                );
            }
            timeoutIds.push(
                setTimeout(() => {
                    setVisibleSquares(0);
                }, totalSquares * delay + 500)
            );
        };

        showSquares();
        const intervalId = setInterval(showSquares, totalSquares * delay + 1000);

        return () => {
            timeoutIds.forEach(clearTimeout);
            clearInterval(intervalId);
        };
    }, []);
    return (
        <div className="flex flex-col items-center justify-center w-full h-[80vh]">
            <div className="loader absolute h-[38px] w-[229px]">
                <div data-svg-wrapper className="absolute">
                    <svg width="229" height="38" viewBox="0 0 229 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_133_13615)">
                            <mask id="mask0_133_13615" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="229" height="38">
                                <path d="M229 0H0V38H229V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_133_13615)">
                                <path d="M8.32715 0H12.4908V4.75H8.32715V0Z" fill="white" />
                                <path d="M12.4912 0H16.6548V4.75H12.4912V0Z" fill="white" />
                                <path d="M16.6543 0H20.8179V4.75H16.6543V0Z" fill="white" />
                                <path d="M20.8184 0H24.982V4.75H20.8184V0Z" fill="white" />
                                <path d="M24.9814 0H29.1451V4.75H24.9814V0Z" fill="white" />
                                <path d="M29.1455 0H33.3091V4.75H29.1455V0Z" fill="white" />
                                <path d="M33.3096 0H37.4732V4.75H33.3096V0Z" fill="white" />
                                <path d="M37.4727 0H41.6363V4.75H37.4727V0Z" fill="white" />
                                <path d="M41.6367 0H45.8004V4.75H41.6367V0Z" fill="white" />
                                <path d="M45.7998 0H49.9634V4.75H45.7998V0Z" fill="white" />
                                <path d="M49.9639 0H54.1275V4.75H49.9639V0Z" fill="white" />
                                <path d="M54.127 0H58.2906V4.75H54.127V0Z" fill="white" />
                                <path d="M58.291 0H62.4547V4.75H58.291V0Z" fill="white" />
                                <path d="M62.4541 0H66.6177V4.75H62.4541V0Z" fill="white" />
                                <path d="M66.6182 0H70.7818V4.75H66.6182V0Z" fill="white" />
                                <path d="M70.7822 0H74.9459V4.75H70.7822V0Z" fill="white" />
                                <path d="M74.9453 0H79.1089V4.75H74.9453V0Z" fill="white" />
                                <path d="M79.1094 0H83.273V4.75H79.1094V0Z" fill="white" />
                                <path d="M83.2725 0H87.4361V4.75H83.2725V0Z" fill="white" />
                                <path d="M87.4365 0H91.6002V4.75H87.4365V0Z" fill="white" />
                                <path d="M91.5996 0H95.7632V4.75H91.5996V0Z" fill="white" />
                                <path d="M95.7637 0H99.9273V4.75H95.7637V0Z" fill="white" />
                                <path d="M99.9277 0H104.091V4.75H99.9277V0Z" fill="white" />
                                <path d="M104.091 0H108.254V4.75H104.091V0Z" fill="white" />
                                <path d="M108.255 0H112.419V4.75H108.255V0Z" fill="white" />
                                <path d="M112.418 0H116.582V4.75H112.418V0Z" fill="white" />
                                <path d="M116.582 0H120.746V4.75H116.582V0Z" fill="white" />
                                <path d="M120.745 0H124.909V4.75H120.745V0Z" fill="white" />
                                <path d="M124.909 0H129.073V4.75H124.909V0Z" fill="white" />
                                <path d="M129.072 0H133.236V4.75H129.072V0Z" fill="white" />
                                <path d="M133.236 0H137.4V4.75H133.236V0Z" fill="white" />
                                <path d="M137.4 0H141.564V4.75H137.4V0Z" fill="white" />
                                <path d="M141.563 0H145.727V4.75H141.563V0Z" fill="white" />
                                <path d="M145.728 0H149.891V4.75H145.728V0Z" fill="white" />
                                <path d="M149.891 0H154.054V4.75H149.891V0Z" fill="white" />
                                <path d="M154.055 0H158.218V4.75H154.055V0Z" fill="white" />
                                <path d="M158.218 0H162.381V4.75H158.218V0Z" fill="white" />
                                <path d="M162.382 0H166.545V4.75H162.382V0Z" fill="white" />
                                <path d="M166.546 0H170.71V4.75H166.546V0Z" fill="white" />
                                <path d="M170.709 0H174.873V4.75H170.709V0Z" fill="white" />
                                <path d="M174.873 0H179.037V4.75H174.873V0Z" fill="white" />
                                <path d="M179.036 0H183.2V4.75H179.036V0Z" fill="white" />
                                <path d="M183.2 0H187.364V4.75H183.2V0Z" fill="white" />
                                <path d="M187.363 0H191.527V4.75H187.363V0Z" fill="white" />
                                <path d="M191.527 0H195.691V4.75H191.527V0Z" fill="white" />
                                <path d="M195.691 0H199.855V4.75H195.691V0Z" fill="white" />
                                <path d="M199.854 0H204.018V4.75H199.854V0Z" fill="white" />
                                <path d="M204.019 0H208.182V4.75H204.019V0Z" fill="white" />
                                <path d="M208.182 0H212.345V4.75H208.182V0Z" fill="white" />
                                <path d="M212.346 0H216.509V4.75H212.346V0Z" fill="white" />
                                <path d="M216.509 0H220.672V4.75H216.509V0Z" fill="white" />
                                <path d="M4.16406 4.75H8.3277V9.5H4.16406V4.75Z" fill="white" />
                                <path d="M220.673 4.75H224.836V9.5H220.673V4.75Z" fill="white" />
                                <path d="M0 9.5H4.16364V14.25H0V9.5Z" fill="white" />
                                <path d="M224.836 9.5H229V14.25H224.836V9.5Z" fill="white" />
                                <path d="M0 14.25H4.16364V19H0V14.25Z" fill="white" />
                                <path d="M224.836 14.25H229V19H224.836V14.25Z" fill="white" />
                                <path d="M0 19H4.16364V23.75H0V19Z" fill="white" />
                                <path d="M224.836 19H229V23.75H224.836V19Z" fill="white" />
                                <path d="M0 23.75H4.16364V28.5H0V23.75Z" fill="white" />
                                <path d="M224.836 23.75H229V28.5H224.836V23.75Z" fill="white" />
                                <path d="M4.16406 28.5H8.3277V33.25H4.16406V28.5Z" fill="white" />
                                <path d="M220.673 28.5H224.836V33.25H220.673V28.5Z" fill="white" />
                                <path d="M8.32715 33.25H12.4908V38H8.32715V33.25Z" fill="white" />
                                <path d="M12.4912 33.25H16.6548V38H12.4912V33.25Z" fill="white" />
                                <path d="M16.6543 33.25H20.8179V38H16.6543V33.25Z" fill="white" />
                                <path d="M20.8184 33.25H24.982V38H20.8184V33.25Z" fill="white" />
                                <path d="M24.9814 33.25H29.1451V38H24.9814V33.25Z" fill="white" />
                                <path d="M29.1455 33.25H33.3091V38H29.1455V33.25Z" fill="white" />
                                <path d="M33.3096 33.25H37.4732V38H33.3096V33.25Z" fill="white" />
                                <path d="M37.4727 33.25H41.6363V38H37.4727V33.25Z" fill="white" />
                                <path d="M41.6367 33.25H45.8004V38H41.6367V33.25Z" fill="white" />
                                <path d="M45.7998 33.25H49.9634V38H45.7998V33.25Z" fill="white" />
                                <path d="M49.9639 33.25H54.1275V38H49.9639V33.25Z" fill="white" />
                                <path d="M54.127 33.25H58.2906V38H54.127V33.25Z" fill="white" />
                                <path d="M58.291 33.25H62.4547V38H58.291V33.25Z" fill="white" />
                                <path d="M62.4541 33.25H66.6177V38H62.4541V33.25Z" fill="white" />
                                <path d="M66.6182 33.25H70.7818V38H66.6182V33.25Z" fill="white" />
                                <path d="M70.7822 33.25H74.9459V38H70.7822V33.25Z" fill="white" />
                                <path d="M74.9453 33.25H79.1089V38H74.9453V33.25Z" fill="white" />
                                <path d="M79.1094 33.25H83.273V38H79.1094V33.25Z" fill="white" />
                                <path d="M83.2725 33.25H87.4361V38H83.2725V33.25Z" fill="white" />
                                <path d="M87.4365 33.25H91.6002V38H87.4365V33.25Z" fill="white" />
                                <path d="M91.5996 33.25H95.7632V38H91.5996V33.25Z" fill="white" />
                                <path d="M95.7637 33.25H99.9273V38H95.7637V33.25Z" fill="white" />
                                <path d="M99.9277 33.25H104.091V38H99.9277V33.25Z" fill="white" />
                                <path d="M104.091 33.25H108.254V38H104.091V33.25Z" fill="white" />
                                <path d="M108.255 33.25H112.419V38H108.255V33.25Z" fill="white" />
                                <path d="M112.418 33.25H116.582V38H112.418V33.25Z" fill="white" />
                                <path d="M116.582 33.25H120.746V38H116.582V33.25Z" fill="white" />
                                <path d="M120.745 33.25H124.909V38H120.745V33.25Z" fill="white" />
                                <path d="M124.909 33.25H129.073V38H124.909V33.25Z" fill="white" />
                                <path d="M129.072 33.25H133.236V38H129.072V33.25Z" fill="white" />
                                <path d="M133.236 33.25H137.4V38H133.236V33.25Z" fill="white" />
                                <path d="M137.4 33.25H141.564V38H137.4V33.25Z" fill="white" />
                                <path d="M141.563 33.25H145.727V38H141.563V33.25Z" fill="white" />
                                <path d="M145.728 33.25H149.891V38H145.728V33.25Z" fill="white" />
                                <path d="M149.891 33.25H154.054V38H149.891V33.25Z" fill="white" />
                                <path d="M154.055 33.25H158.218V38H154.055V33.25Z" fill="white" />
                                <path d="M158.218 33.25H162.381V38H158.218V33.25Z" fill="white" />
                                <path d="M162.382 33.25H166.545V38H162.382V33.25Z" fill="white" />
                                <path d="M166.546 33.25H170.71V38H166.546V33.25Z" fill="white" />
                                <path d="M170.709 33.25H174.873V38H170.709V33.25Z" fill="white" />
                                <path d="M174.873 33.25H179.037V38H174.873V33.25Z" fill="white" />
                                <path d="M179.036 33.25H183.2V38H179.036V33.25Z" fill="white" />
                                <path d="M183.2 33.25H187.364V38H183.2V33.25Z" fill="white" />
                                <path d="M187.363 33.25H191.527V38H187.363V33.25Z" fill="white" />
                                <path d="M191.527 33.25H195.691V38H191.527V33.25Z" fill="white" />
                                <path d="M195.691 33.25H199.855V38H195.691V33.25Z" fill="white" />
                                <path d="M199.854 33.25H204.018V38H199.854V33.25Z" fill="white" />
                                <path d="M204.019 33.25H208.182V38H204.019V33.25Z" fill="white" />
                                <path d="M208.182 33.25H212.345V38H208.182V33.25Z" fill="white" />
                                <path d="M212.346 33.25H216.509V38H212.346V33.25Z" fill="white" />
                                <path d="M216.509 33.25H220.672V38H216.509V33.25Z" fill="white" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_133_13615">
                                <rect width="229" height="38" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="absolute top-[9px] left-[12px] h-[19.19px] flex gap-1">
                    {[...Array(totalSquares)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-[19.19px] h-[19.19px] bg-[#28ac3a]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: i < visibleSquares ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}