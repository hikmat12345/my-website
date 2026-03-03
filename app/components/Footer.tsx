import Link from "next/link";
import { socialLinks } from "./data-helper";

const Footer = () => {
    return (
      <footer className=" text-white py-8">
        <div className="container mx-auto text-center flex justify-between px-9 mobile-block flex-col">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-6 flex-wrap gap-4">
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-grayblack hover:text-green font-semibold transition-colors"
            >
              GitHub
            </Link>
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-grayblack hover:text-green font-semibold transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href={socialLinks.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-grayblack hover:text-green font-semibold transition-colors"
            >
              Medium
            </Link>
            <Link
              href={socialLinks.awsCertificate}
              target="_blank"
              rel="noopener noreferrer"
              className="text-grayblack hover:text-green font-semibold transition-colors"
            >
              AWS Certificate
            </Link>
            <Link
              href={socialLinks.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-grayblack hover:text-green font-semibold transition-colors"
            >
              Schedule Call
            </Link>
          </div>
  
          {/* Footer Text */}
          <p className="text-sm text-grayblack">
            © 2024 All rights reserved. Hikmat Ullah Khan | Senior Full-Stack Developer
          </p>
        </div>
      </footer>
    );
};
  
  export default Footer;