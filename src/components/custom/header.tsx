"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Navigation links data
    const navLinks = useMemo(
        () => [
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#projects", label: "Projects" },
        ],
        []
    );

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMobileMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        document.addEventListener("keydown", handleEscKey);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [isMobileMenuOpen]);

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            // Update header background opacity based on scroll
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Update active section
            const sections = navLinks.map((link) => link.href.substring(1));

            // Find the section that is currently in view
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [navLinks]);

    // Smooth scrolling with header offset
    const handleLinkClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        sectionId: string
    ) => {
        event.preventDefault();
        setIsMobileMenuOpen(false);

        const section = document.getElementById(sectionId);
        const header = document.querySelector("header");

        if (section && header) {
            const headerHeight = header.offsetHeight;
            const y =
                section.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                40;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/60 backdrop-blur-md py-2 shadow-md text-black"
                    : "bg-transparent py-4 text-black"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/images/wb-logo.ico"
                        alt="Logo"
                        width={40}
                        height={40}
                        className={cn(
                            "transition-all duration-300",
                            scrolled ? "h-8 w-8" : "h-10 w-10"
                        )}
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
							key={link.href}
                            href={link.href}
                            onClick={(event) =>
                                handleLinkClick(event, link.href.substring(1))
                            }
                            className={cn(
                                "transition-all duration-200 hover:text-purple-500 relative py-2 px-1 text-sm uppercase tracking-wider font-medium",
                                activeSection === link.href.substring(1) &&
                                    "text-purple-500"
                            )}
                        >
                            <span>{link.label}</span>
                            <span
                                className={cn(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full",
                                    activeSection === link.href.substring(1) &&
                                        "w-full"
                                )}
                            />
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-black hover:bg-purple-100"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </Button>
            </div>

            {/* Mobile Drawer Menu */}
            <div
                ref={menuRef}
                className={cn(
                    "absolute left-0 right-0 bg-white/95 backdrop-blur-md text-black overflow-hidden transition-all duration-500 ease-in-out border-t border-gray-200",
                    isMobileMenuOpen
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0"
                )}
            >
                <div className="flex flex-col items-center space-y-6 py-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(event) =>
                                handleLinkClick(event, link.href.substring(1))
                            }
                            className={cn(
                                "text-lg transition-all duration-300 ease-in-out relative group",
                                activeSection === link.href.substring(1)
                                    ? "text-purple-500 font-bold"
                                    : "hover:text-purple-500"
                            )}
                        >
                            {link.label}
                            <span
                                className={cn(
                                    "absolute -bottom-1 left-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full",
                                    activeSection === link.href.substring(1)
                                        ? "w-full"
                                        : "w-0"
                                )}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}