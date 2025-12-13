import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Twitter,
  Linkedin,
  Github,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Updates", href: "#updates" },
    ],
    company: [
      { name: "About Us", href: "about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press", href: "#press" },
      { name: "Partners", href: "#partners" },
    ],
    resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "API Status", href: "#status" },
      { name: "Webinars", href: "#webinars" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
      { name: "Security", href: "#security" },
    ],
  };

  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
      color: "hover:text-gray-700 dark:hover:text-gray-300",
    },
  ];

  return (
    <footer className="bg-neutral text-neutral-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="fix-alignment">
          {/* Top Section */}
          <div className="py-16 border-b border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Brand & Newsletter */}
              <div className="space-y-6">
                <h1 className="text-4xl font-bold">WorkNest</h1>

                <p className="text-gray-300 max-w-md text-lg leading-relaxed">
                  Transform your hybrid workspace with intelligent management
                  solutions. Empower your team, optimize your space, and drive
                  productivity.
                </p>

                {/* Newsletter Signup */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold">Stay Updated</h3>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 max-w-md">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors duration-200 flex items-center space-x-2 group">
                      <span>Subscribe</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-400">
                    Get the latest product updates and company news.
                  </p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-4">Product</h3>
                  <ul className="space-y-3">
                    {navigation.product.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">Company</h3>
                  <ul className="space-y-3">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">Resources</h3>
                  <ul className="space-y-3">
                    {navigation.resources.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">Legal</h3>
                  <ul className="space-y-3">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-6 text-gray-300">
                <p>&copy; {currentYear} WorkNest. All rights reserved.</p>

                {/* Contact Info */}
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Mail className="w-4 h-4" />
                    <span>hello@worknest.com</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`text-gray-400 hover:text-white transition-colors duration-200 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
