import { useState } from "react";
import footerImg from "../../assets/img/stanley-footer.webp";
import flag from '../../assets/img/flags.jpg';

function Footer() {

  const [openCompany, setOpenCompany] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);

  return (
    <>
      <footer className="bg-[#101010] text-white py-12 px-4">
        <div className="max-w-[1250px] mx-auto">
          <section className="py-[48px]">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl max-lg:text-[18px] font-bold tracking-widest uppercase mb-2">
                  Be the first to know
                </h2>
                <p className="text-base">Hear about new arrivals, sales, and other news.</p>
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-8">
                <form className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    required
                    className="flex-1 h-[50px] border-b border-white bg-transparent text-white placeholder-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="h-[30px] w-[30px] flex items-center justify-center"
                  >
                    <i className="fa-solid fa-arrow-right text-white text-[22px]"></i>
                  </button>
                </form>

                <div className="flex-1 text-sm">
                  <h3 className="text-base font-semibold mb-2">
                    To receive SMS updates, text <strong>STANLEY</strong> to <strong>22936</strong>
                  </h3>
                  <p>
                    Msg &amp; data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available).{" "}
                    <a
                      href="/policies/privacy-policy"
                      target="_blank"
                      className="underline hover:text-gray-300"
                    >
                      Privacy Policy
                    </a>{" "}
                    &amp;{" "}
                    <a
                      href="https://www.stanley1913.com/pages/mobile-messaging-terms"
                      target="_blank"
                      className="underline hover:text-gray-300"
                    >
                      Terms
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-between gap-2 text-[16px] max-lg:flex-wrap relative">
            <div className="flex items-center justify-between gap-5">
              <div className="flex flex-col max-md:flex-col md:flex-row items-center justify-between gap-5">
                {/* Company olan hisse */}
                <div className="w-full max-md:w-full">
                  <h3
                    className="mb-[32px] cursor-pointer select-none flex items-center justify-between max-md:w-full"
                    onClick={() => setOpenCompany(!openCompany)}>
                    Company
                  </h3>

                  <ul className={`leading-[35px] transition-all duration-300 max-md:overflow-hidden max-md:px-2 ${openCompany ? "max-md:max-h-[500px] max-md:pt-2" : "max-md:max-h-0"
                      } max-md:bg-[#101010] max-md:rounded-md max-md:mb-5`}>
                    <li className="hover:underline transition-all"><a href="#">About Stanley 1913</a></li>
                    <li className="hover:underline transition-all"><a href="#">Careers</a></li>
                    <li className="hover:underline transition-all"><a href="#">Meet the BearForce</a></li>
                    <li className="hover:underline transition-all"><a href="#">Employee Spotlight</a></li>
                    <li className="hover:underline transition-all"><a href="#">Stanley 1913 Creators Fund</a></li>
                    <li className="hover:underline transition-all"><a href="#">Sustainability</a></li>
                    <li className="hover:underline transition-all"><a href="#">Blogs</a></li>
                    <li className="hover:underline transition-all"><a href="#">Refer a Friend</a></li>
                    <li className="hover:underline transition-all"><a href="#">Affiliate Program</a></li>
                    <li className="hover:underline transition-all"><a href="#">Stanley Club Loyalty Program</a></li>
                  </ul>
                </div>

                {/* Support olan hisse */}
                <div className="w-full max-md:w-full">
                  <h3
                    className="mb-[32px] cursor-pointer select-none flex items-center justify-between max-md:w-full"
                    onClick={() => setOpenSupport(!openSupport)}>
                    Support
                  </h3>

                  <ul className={`leading-[40px] transition-all duration-300 max-md:overflow-hidden max-md:px-2 ${openSupport ? "max-md:max-h-[500px] max-md:pt-2" : "max-md:max-h-0"
                      } max-md:bg-[#101010] max-md:rounded-md`}>
                    <li className="hover:underline transition-all"><a href="#">FAQ</a></li>
                    <li className="hover:underline transition-all"><a href="#">Contact Us</a></li>
                    <li className="hover:underline transition-all"><a href="#">Returns</a></li>
                    <li className="hover:underline transition-all"><a href="#">Stainless-Steel Warranty Policy</a></li>
                    <li className="hover:underline transition-all"><a href="#">Product Recalls</a></li>
                    <li className="hover:underline transition-all"><a href="#">Soft Goods Warranty Policy</a></li>
                    <li className="hover:underline transition-all"><a href="#">Find a Retail Store</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center max-lg:justify-start">
              <img className="max-w-[80%] min-h-[50%] rounded-[5px]" src={footerImg} alt="img" />
              <button className="absolute left-25 max-lg:left-8 max-md:left-5 bottom-5 flex text-[16px] max-sm:text-[8px] uppercase font-bold tracking-[1px] items-center gap-2 px-6 py-3 bg-black text-white border border-black rounded-md transition-all duration-300 hover:bg-white hover:text-black">
                Shop All Accept
                <i className="fa-solid fa-arrow-right text-[16px]"></i>
              </button>
            </div>
          </section>

          <div className="max-w-[200px] my-[60px]">
            <ul className="flex items-center justify-between gap-2 text-[16px]">
              <li><a href="https://www.tiktok.com/@stanleybrand?lang=en"><i className="fa-brands fa-tiktok"></i></a></li>
              <li><a href="https://www.instagram.com/stanley_brand/"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="https://www.facebook.com/StanleyBrand/"><i className="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="https://www.youtube.com/user/StanleyBottle"><i className="fa-brands fa-youtube"></i></a></li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-between items-start py-6 border-t border-gray-300 text-sm">
            <div className="flex flex-wrap items-start gap-8">
              <div className="flex flex-col gap-1 whitespace-nowrap">
                <span>© <a href="/" className="hover:underline">PMI WW Brands, LLC</a>,</span>
                <span>All Rights Reserved</span>
              </div>

              <nav aria-label="Stanley 1913 Legal Policies">
                <ul className="flex flex-col gap-2">
                  <li><a href="/pages/terms-of-sale" className="hover:underline focus:outline-none">Terms of Sale</a></li>
                  <li><a href="/pages/terms-of-service" className="hover:underline focus:outline-none">Terms of Service</a></li>
                  <li><a href="/pages/privacy-policy" className="hover:underline focus:outline-none">Privacy Policy</a></li>
                  <li className="flex items-center gap-1">
                    <a href="/pages/consumer-rights-privacy-form" className="hover:underline focus:outline-none flex items-center gap-1">
                      Your Privacy Choices
                      <span className="w-[30px] h-[14px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 14">
                          <path fill="#fff" fillRule="evenodd" d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" clipRule="evenodd" />
                          <path fill="#06f" fillRule="evenodd" d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" clipRule="evenodd" />
                          <path fill="#fff" d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" />
                          <path fill="#06f" d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li><a href="/pages/responsible-supply-chain-statement-2024" className="hover:underline focus:outline-none">Responsible Supply Chain Statement</a></li>
                  <li><button type="button" className="hover:underline focus:outline-none">Do Not Sell/Share - Cookie Preferences</button></li>
                </ul>
              </nav>
            </div>

            <div className="mt-4 md:mt-0">
              <div className='text-[#fff] mr-[28px] flex items-center justify-center'>
                <a href="#">
                  <span>USA</span>
                  <i className="fa-solid fa-angle-down ml-1"></i>
                </a>
                <img className='max-w-[40px] ml-2' src={flag} alt="imgs" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;

