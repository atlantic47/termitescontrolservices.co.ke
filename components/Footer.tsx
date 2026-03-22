import Link from "next/link";
import Container from "./Container";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  const pestraidServices = [
    { name: "General Pest Control", url: "https://pestraid.co.ke/" },
    { name: "Snake Control Services", url: "https://pestraid.co.ke/services/snake-control-services-and-pricing-in-kenya/" },
    { name: "Rat & Rodents Control", url: "https://pestraid.co.ke/services/rat-and-rodents-control-service-and-pricing-in-kenya/" },
    { name: "Termites Control", url: "https://pestraid.co.ke/services/termites-control-services-and-pricing-in-kenya/" },
    { name: "Fleas Control", url: "https://pestraid.co.ke/services/fleas-control-services-and-pricing-in-kenya/" },
    { name: "Bed Bugs Control", url: "https://pestraid.co.ke/services/bed-bugs-control-services-and-pricing-in-kenya/" },
    { name: "Mosquitoes Control", url: "https://pestraid.co.ke/services/mosquitoes-and-sandflies-control-services-and-pricing-in-kenya/" },
    { name: "Spider Control", url: "https://pestraid.co.ke/services/spider-control-services-and-pricing-in-kenya/" },
    { name: "Houseflies Control", url: "https://pestraid.co.ke/services/houseflies-control-services-and-pricing-in-kenya/" },
    { name: "Cockroaches Control", url: "https://pestraid.co.ke/services/cockroaches-control-services-and-pricing-in-kenya/" },
  ];

  return (
    <footer className="bg-navy text-white pt-16">
      <Container>
        {/* Top Newsletter / CTA Section from Design */}
        <div className="bg-red rounded-lg p-8 mb-16 flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="mb-6 md:mb-0">
            <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-white mb-2">Stop Termites Before They Destroy Your Property.<br/>Get a Professional Inspection Today.</h3>
          </div>
          <div className="flex w-full md:w-auto">
            <Link href="/contact" className="bg-white text-navy px-8 py-3 rounded-full font-bold uppercase text-sm hover:bg-gray-100 transition-colors shadow-md">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Info */}
          <div>
            <Link href="/" className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 inline-block">
              Pestraid <span className="text-red">Kenya</span>
            </Link>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Pestraid Kenya is the premier provider of specialized termite control and eradication services across Kenya. We protect your property with advanced, long-lasting solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-300 hover:text-red transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-300 hover:text-red transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-300 hover:text-red transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-bold uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-red transition-colors text-sm flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-red transition-colors text-sm flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-red transition-colors text-sm flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Services</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-red transition-colors text-sm flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-red transition-colors text-sm flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-heading text-xl font-bold uppercase mb-6">Service Areas</h4>
            <ul className="space-y-3">
              <li><Link href="/areas/nairobi" className="text-gray-300 hover:text-red transition-colors text-sm flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Nairobi</Link></li>
              <li><Link href="/areas/mombasa" className="text-gray-300 hover:text-red transition-colors text-sm flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Mombasa</Link></li>
              <li><Link href="/areas/kisumu" className="text-gray-300 hover:text-red transition-colors text-sm flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Kisumu</Link></li>
              <li><Link href="/areas/nakuru" className="text-gray-300 hover:text-red transition-colors text-sm flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Nakuru</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl font-bold uppercase mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Argwings Kodhek Road, Rose Ave, Nairobi</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-red mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">0710907628</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-red mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">sales@pestraid.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pestraid Backlinks Section */}
        <div className="border-t border-gray-800 py-10">
          <h4 className="font-heading text-lg font-bold uppercase mb-6 text-center">Other Services Offered by Pestraid Kenya</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {pestraidServices.map((service, index) => (
              <a 
                key={index} 
                href={service.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full hover:bg-red hover:text-white transition-colors"
              >
                {service.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
      
      {/* Bottom Copyright */}
      <div className="bg-[#0a1a2b] py-6">
        <Container>
          <div className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pestraid Kenya Termite Control. All Rights Reserved.
          </div>
        </Container>
      </div>
    </footer>
  );
}
