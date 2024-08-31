import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green sm:px-16 lg:px-24 flex flex-col gap-9 text-white pt-10 pb-4">
      <div className="container flex flex-col md:flex-row mx-auto px-4 md:flex md:justify-between md:gap-5">
        <div className="flex flex-row sm:flex-col mb-8 md:mb-0">
          <div>
            <h2 className="logo-image mb-4 md:mb-8">
              <img src="../assets/logo_white.png" alt="logo" className="" />
            </h2>
            <p className="text-lg md:text-xl mb-4 md:mb-12 font-medium">
              Empowering Rural Lives with Health and Education
            </p>
          </div>
          <div>
            <Link
              to="/donate"
              className="text-2xl bg-white text-green py-2 px-10 rounded-[0.5rem] tracking-wider"
              style={{ fontFamily: "Bebas Neue" }}
            >
              DONATE
            </Link>
          </div>
        </div>
        <div className="flex justify-between gap-16 lg:gap-32 xl:gap-48">
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-semibold mb-4 md:mb-8">Connect</h3>
            <ul className="text-xl">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Reach Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-4 md:mb-8">Company</h3>
            <ul className="text-xl">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Blogs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Campaigns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Affiliated Partners
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white mt-8 px-4 pt-4 text-center">
        <p>© 2024 iTraction. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
