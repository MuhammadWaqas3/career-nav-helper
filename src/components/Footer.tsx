
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold text-primary">
              Rahnuma
            </h3>
            <p className="text-secondary text-sm">
              Helping students make informed decisions about their future careers
              and education.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-secondary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-secondary hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-secondary hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-secondary hover:text-primary text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-secondary mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-secondary hover:text-primary text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/universities" className="text-secondary hover:text-primary text-sm transition-colors">
                  Universities
                </Link>
              </li>
              <li>
                <Link to="/entry-test" className="text-secondary hover:text-primary text-sm transition-colors">
                  Entry Tests
                </Link>
              </li>
              <li>
                <Link to="/career-guide" className="text-secondary hover:text-primary text-sm transition-colors">
                  Career Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-secondary mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-secondary text-sm">
            © {new Date().getFullYear()} Rahnuma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
