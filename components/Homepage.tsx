'use client'
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactForm } from './ContactForm';
import { Navbar, Hero, Services, Showreel, Features, CTA, Footer } from './sections';

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
  const container = useRef(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useGSAP(() => {
    // Navbar
    gsap.to('.navbar', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });

    // Hero
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl.to('.hero-title', { opacity: 1, y: 0, duration: 1 })
          .to('.hero-subtitle', { opacity: 1, y: 0, duration: 1 }, '-=0.6')
          .to('.hero-btn', { opacity: 1, y: 0, duration: 1 }, '-=0.6')
          .to('.hero-car', { opacity: 1, scale: 1, duration: 1.2 }, '-=0.8');

    // Services
    gsap.to('.services-header', {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.services-section',
            start: 'top 80%',
        }
    });

    gsap.to('.service-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.services-section',
            start: 'top 70%',
        }
    });

    // Showreel
    gsap.to('.showreel-container', {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.showreel-section',
            start: 'top 80%',
        }
    });

    // Features
    gsap.to('.features-left', {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.features-section',
            start: 'top 75%',
        }
    });

    gsap.to('.feature-item', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.features-section',
            start: 'top 75%',
        }
    });

    // CTA
    gsap.to('.cta-container', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
        }
    });

    // Footer
    gsap.to('.footer-section', {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
            trigger: '.footer-section',
            start: 'top 90%',
        }
    });

  }, { scope: container });

  const openContact = () => setIsContactOpen(true);

  return (
    <div ref={container} className="bg-black min-h-screen w-full text-white font-sans overflow-x-hidden selection:bg-white/20">
      <Navbar onOpenContact={openContact} />
      <Hero onOpenContact={openContact} />
      <Services />
      <Showreel />
      <Features onOpenContact={openContact} />
      <CTA onOpenContact={openContact} />
      <Footer onOpenContact={openContact} />
      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  );
}