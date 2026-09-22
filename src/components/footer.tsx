import { NavLink } from "react-router";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapPin,
} from "react-icons/fa";
export function Footer() {
  return (
    <div className="w-full bg-primary shadow-footer self-center mt-5 p-5 grid gap-5 sm:grid-cols-1 md:grid-cols-3">
      <section className="flex flex-col justify-center items-center">
        <h3 className="text-lg font-bold">Navigation</h3>
        <nav className="flex flex-col items-center md:items-start">
          <NavLink className="hover:underline" to="/">
            Home
          </NavLink>
          <NavLink className="hover:underline" to="/projects">
            Projects
          </NavLink>
          <NavLink className="hover:underline" to="/about">
            About
          </NavLink>
        </nav>
      </section>
      <section className="flex flex-col items-center">
        <h3 className="text-lg font-bold">Links</h3>
        <div className="items-center md:items-start flex flex-col">
          <a
            target="_blank"
            className="flex items-center gap-1 hover:underline"
            href="https://www.github.com/carlbern"
          >
            <FaGithub /> Carlbern
          </a>
          <a
            target="_blank"
            className="flex items-center gap-1 hover:underline"
            href="https://www.instagram.com/cfarrdal"
          >
            <FaInstagram /> Cfarrdal
          </a>
          <a
            target="_blank"
            className="flex items-center gap-1 hover:underline"
            href="https://www.linkedin.com/in/filipbernhard"
          >
            <FaLinkedin /> filipbernhard
          </a>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <h3 className="text-lg font-bold">Contact</h3>
        <div className="items-center md:items-start flex flex-col">
          <a
            href="tel:+33766127399"
            className="flex items-center gap-1 hover:underline"
          >
            <FaPhone />
            (+33) 7 66 12 73 99
          </a>
          <a
            href="mailto:hello@filipbernhard.com"
            className="flex items-center gap-1 hover:underline"
          >
            <FaEnvelope />
            hello@filipbernhard.com
          </a>
          <a
            target="_blank"
            href="https://www.google.fr/maps/place/75011+Paris/@48.8600683,2.3609466,14z/data=!3m1!4b1!4m6!3m5!1s0x47e66df6d6fb2ac5:0x1c0b82c6e1d851a0!8m2!3d48.857993!4d2.381153!16s%2Fm%2F0gxnjsc?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D"
            className="flex items-center gap-1 hover:underline"
          >
            <FaMapPin />
            Paris, 75011, France
          </a>
        </div>
      </section>
    </div>
  );
}
