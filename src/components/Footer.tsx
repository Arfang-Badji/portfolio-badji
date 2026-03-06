import { Container, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="p-10 footer footer-center ">
  <aside>

    <Container className="w-10 h-10"/>
    <p className="font-bold">
                ARFANG
                <span className="text-accent">.DEV</span>
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Twitter className="w-6 h-6 text-current" />
        </a>    
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-6 h-6 text-current" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6 text-current" />
        </a>
    </div>
  </nav>
</footer>
    )
}

export default Footer;