import { Facebook, Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition duration-300">
              NotesNeo
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Empowering students with high-quality academic resources for better learning outcomes.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500 transition duration-300 transform hover:scale-110" // Added hover:scale-110 for pop-out effect
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6" /> {/* Increased size */}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} NotesNeo. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/decodewithdeepak',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/deepakmodi1/',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/deepakmodi_io',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/deepakmodi.io/',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: 'https://m.facebook.com/deepak.modi.313924',
    icon: Facebook,
  },
  {
    name: 'Email',
    href: 'mailto:deepakmodi8676.com',
    icon: Mail,
  },
];

const footerLinks = [
  {
    title: 'Resources',
    links: [
      { name: 'Notes', href: '/notes' },
      { name: 'Study Tips', href: '/study-tips' },
      { name: 'Downloads', href: '/downloads' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press Kit', href: '/press' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Report Issue', href: '/report' },
    ],
  },
];
