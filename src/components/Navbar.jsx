import logo from "../assets/SanjanaDeshanLogo.png";
import resume from "../assets/Deshan_Kahawala_Resume2.pdf";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sanjana-deshan-b2bb39256"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sanjana0826"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/morgan_?igsh=bGtpdG82aXFmbTNt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/sanjana.deshan.7?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>

        <a
          href={resume}
          download
          className="border border-neutral-800 px-4 py-2 text-lg rounded hover:bg-neutral-800 hover:text-white transition"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
