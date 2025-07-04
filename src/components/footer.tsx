"use client";

import { CompanyInfo, FooterSection } from "@/utils/interface";
import Image from "next/image";

interface CompanyDetailsProps {
  info: CompanyInfo;
}

export const CompanyDetails: React.FC<CompanyDetailsProps> = ({ info }) => (
  <div className="">
    <div>
      {/* <div className="relative my-4 inline-block">
       
        Logo
      </div> */}
    </div>
  </div>
);

interface FooterLinksProps {
  sections: FooterSection[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ sections }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-6 md:gap-8 text-gray-600">
    {sections.map((section) => (
      <div key={section.title}>
        <h3 className="font-semibold text-gray-700 mb-4">{section.title}</h3>

        {/* Handle string vs array */}
        {typeof section.links === "string" ? (
          <p className="text-base text-gray-600 ">{section.links}</p>
        ) : (
          <ul className="space-y-2 text-sm md:text-base">
            {section.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-primary hover:font-medium transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);


const BottomBar: React.FC = () => (
  <div className="border-t pt-4 mt-8">
    <div className="flex flex-col md:flex-row justify-center items-center gap-y-6">
      <p className="text-gray-600 text-sm text-center leading-8">
        ©2024 <span className="font-medium">iHaven</span> . All rights reserved.
        Empowering Northern Nigeria's digital future.
      </p>
    </div>
  </div>
);

const Footer: React.FC = () => {
  const companyInfo: CompanyInfo = {
    tel: "310-437-2766",
    email: "Logo@outlook.com",
    address: "706 Campfire Ave. Meriden, CT 06450",
    fax: "+1-000-0000",
  };

  const footerSections: FooterSection[] = [
    {
      title: "iHaven",
      links:
        "Empowering Northern Nigeria through digital innovation and comprehensive technology education. Building the next generation of tech leaders across the region.",
    },

    {
      title: "SUPPORT",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Contact Us", href: "/contact" },
        { label: "Online Chat", href: "/chat" },
        { label: "Contact Customer Services", href: "/customer-services" },
        { label: "Safety Resources Center", href: "/safety-resources" },
      ],
    },

    {
      title: "Programe",
      links: [
        { label: "Web Development", href: "/" },
        { label: "Mobile Development", href: "/" },
        { label: "Data Science", href: "/" },
        { label: "UI/UX Design", href: "/" },
      ],
    },

    {
      title: "COMPANY",
      links: [
        { label: "About Us", href: "/" },
        { label: "Our Team", href: "/" },
        { label: "Career", href: "/" },
        { label: "Patner", href: "/" },
      ],
    },
  ];

  return (
    <footer className="w-full  pt-8 pb-4 border-t px-[5px] ]">
      <div className="px-4">
        <div className="flex flex-col space-y-8">
          <CompanyDetails info={companyInfo} />

          <FooterLinks sections={footerSections} />
          <BottomBar />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
