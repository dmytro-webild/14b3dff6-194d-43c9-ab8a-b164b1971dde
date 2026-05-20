"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLarge"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Print Hub Targoviste"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Precision 3D Printing in Targoviste"
      description="Transforming your ideas into reality with state-of-the-art additive manufacturing technology for industry, design, and hobbyists."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/business-lady-looking-copyspace-with-interest_1262-2957.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-business-people-having-meeting-cafe_1262-1956.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/colleagues-with-smartphones-looking-camera_23-2147707735.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-young-smiling-woman_93675-135891.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/confident-entrepreneur-satisfied-with-own-success_1163-5474.jpg",
          alt: "Client 5",
        },
      ]}
      avatarText="Trusted by 500+ professionals"
      buttons={[
        {
          text: "Get a Quote",
          href: "#contact",
        },
        {
          text: "View Products",
          href: "#products",
        },
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/designer-using-3d-printer_23-2150941998.jpg",
          alt: "3d printer in action",
        },
        {
          type: "text",
          text: "Prototyping",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/designer-using-3d-printer_23-2150941980.jpg",
          alt: "Industrial printing",
        },
        {
          type: "text",
          text: "Custom Components",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/close-up-3d-printer_23-2151037126.jpg",
          alt: "High precision",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Innovating Through Additive Manufacturing"
      description={[
        "Print Hub Targoviste brings cutting-edge 3D printing services to your doorstep. We specialize in high-precision prototyping, custom parts manufacturing, and architectural modeling.",
        "Our facility is equipped with top-tier industrial printers capable of handling diverse materials for any project scope.",
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "#features",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Precision Engineering",
          subtitle: "High accuracy for complex parts",
          category: "Quality",
          value: "0.01mm",
        },
        {
          id: "2",
          title: "Rapid Production",
          subtitle: "Fast turnaround for prototypes",
          category: "Efficiency",
          value: "24h",
        },
        {
          id: "3",
          title: "Material Variety",
          subtitle: "PLA, PETG, ABS, and Resin",
          category: "Versatility",
          value: "10+",
        },
      ]}
      title="Why Choose Us"
      description="We combine industry-leading technology with personalized service to ensure the best results for every print."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Industrial Gear",
          price: "$45",
          variant: "Durable Resin",
          imageSrc: "http://img.b2bpic.net/free-photo/superstition-concept-with-lucky-cat-pedestal_23-2149314547.jpg",
        },
        {
          id: "2",
          name: "Mechanical Bracket",
          price: "$30",
          variant: "PLA Pro",
          imageSrc: "http://img.b2bpic.net/free-photo/printing-human-skeleton_1048-1972.jpg",
        },
        {
          id: "3",
          name: "Prototype Housing",
          price: "$85",
          variant: "ABS Heat-Resistant",
          imageSrc: "http://img.b2bpic.net/free-photo/architectural-blueprints_1359-458.jpg",
        },
        {
          id: "4",
          name: "Customized Fitting",
          price: "$25",
          variant: "PETG",
          imageSrc: "http://img.b2bpic.net/free-photo/view-tiny-music-boxes-collection_23-2150545651.jpg",
        },
        {
          id: "5",
          name: "Architectural Model",
          price: "$150",
          variant: "High-Res SLA",
          imageSrc: "http://img.b2bpic.net/free-photo/designer-using-3d-printer_23-2150941994.jpg",
        },
        {
          id: "6",
          name: "Tooling Part",
          price: "$60",
          variant: "Reinforced Nylon",
          imageSrc: "http://img.b2bpic.net/free-photo/female-business-owner-working-portrait_23-2148828316.jpg",
        },
      ]}
      title="Our Printing Capabilities"
      description="From small-scale components to complex industrial prototypes, we handle a wide range of print requirements."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "starter",
          tag: "Hobbyist",
          price: "$20",
          period: "/part",
          description: "For small, one-off projects.",
          button: {
            text: "Start Print",
            href: "#contact",
          },
          featuresTitle: "Included features:",
          features: [
            "Basic material options",
            "Standard quality settings",
            "48h turnaround",
          ],
        },
        {
          id: "pro",
          tag: "Professional",
          price: "$50",
          period: "/part",
          description: "For rapid prototyping & mechanical parts.",
          button: {
            text: "Choose Pro",
            href: "#contact",
          },
          featuresTitle: "Included features:",
          features: [
            "Advanced materials",
            "High precision settings",
            "Priority 24h turnaround",
          ],
        },
        {
          id: "industrial",
          tag: "Commercial",
          price: "$150",
          period: "/batch",
          description: "High-volume batch production.",
          button: {
            text: "Inquire Now",
            href: "#contact",
          },
          featuresTitle: "Included features:",
          features: [
            "Production grade materials",
            "Custom finishing included",
            "Dedicated project support",
          ],
        },
      ]}
      title="Flexible Printing Plans"
      description="Choose a plan that fits your project scale, from personal hobby builds to high-volume commercial production."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alex Ion",
          role: "Engineer",
          company: "TechDynamics",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-outline-business-side-face-male_1194-3839.jpg",
        },
        {
          id: "2",
          name: "Maria Popescu",
          role: "Architect",
          company: "UrbanDesign",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/computer-scientist-server-farm-ensuring-compliance-with-industry-standards_482257-123806.jpg",
        },
        {
          id: "3",
          name: "Andrei Dumitru",
          role: "Product Designer",
          company: "InnovateLabs",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-intelligent-leader-with-his-workers_1098-3491.jpg",
        },
        {
          id: "4",
          name: "Elena Marin",
          role: "Creative Lead",
          company: "CreativeStudio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-dark-jacket-pink-background_179666-14555.jpg",
        },
        {
          id: "5",
          name: "Radu Stan",
          role: "Manager",
          company: "ManufacturingCo",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-professional_1098-12931.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "500+",
          label: "Projects Completed",
        },
        {
          value: "98%",
          label: "Satisfaction Rate",
        },
        {
          value: "24h",
          label: "Avg Turnaround",
        },
      ]}
      title="What Our Clients Say"
      description="Trusted by engineers, designers, and local businesses."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "What file formats do you accept?",
          content: "We primarily use .STL, .STEP, and .OBJ files.",
        },
        {
          id: "2",
          title: "How long does a print take?",
          content: "Print time depends on volume and detail; most projects are ready in 24-48 hours.",
        },
        {
          id: "3",
          title: "Do you offer shipping?",
          content: "Yes, we offer nationwide shipping across Romania.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Got questions? We've got answers about our process, materials, and turnaround times."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in touch"
      title="Start Your 3D Print Project"
      description="Ready to bring your model to life? Send us your file for a quick quote and timeline assessment."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@printhubtargoviste.ro",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Print Hub Targoviste"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Products",
              href: "#products",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              href: "mailto:contact@printhubtargoviste.ro",
            },
            {
              label: "Facebook",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
