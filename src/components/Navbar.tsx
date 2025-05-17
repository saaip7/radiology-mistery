"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAudio } from "@/hooks/AudioContext";
import { Volume2, VolumeX, Menu, X } from "lucide-react";

export function Navbar() {
  const { toggleAudio, isPlaying } = useAudio();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle clicks outside of the menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white relative container mx-auto px-[5vw] md:px-[2.5vw] py-4 flex justify-between items-center border-b border-gray-100 z-30">
      {/* Logo - always visible */}
      <Link href="/">
        <div className="text-2xl font-bold text-blue-600">
          Radiology Mistery
        </div>
      </Link>
      
      {/* Desktop navigation */}
      <div className="hidden md:flex gap-4">
        <Link href="/">
          <Button
            variant="outline"
            className="rounded-full border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            Image Assessment
          </Button>
        </Link>
        <Link href="/suspects">
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700">
            Suspect List
          </Button>
        </Link>
        <Button onClick={toggleAudio} className="bg-blue-600 hover:bg-blue-700 rounded-full">
          {isPlaying ? 
          <div className="flex flex-row items-center space-x-2">
            <Volume2 /> 
            <p className="text-white">
              Mute
            </p>
          </div>
          : 
          <div className="flex flex-row items-center space-x-2">
            <VolumeX />
            <p className="text-white">
              Unmute
            </p>
          </div>
          }
        </Button>
      </div>
      
      {/* Mobile navigation */}
      <div className="flex md:hidden items-center gap-2">
        {/* Mute button - icon only on mobile */}
        <Button onClick={toggleAudio} className="bg-blue-600 hover:bg-blue-700 rounded-md p-2">
          {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
        </Button>
        
        {/* Hamburger menu button */}
        <Button 
          ref={buttonRef}
          onClick={toggleMenu} 
          className="bg-blue-600 hover:bg-blue-700 rounded-md p-2"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="absolute top-full right-[2.5vw] mt-2 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 md:hidden z-20"
        >
          <Link href="/" onClick={toggleMenu}>
            <Button
              variant="outline"
              className="w-full rounded-full border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              Image Assessment
            </Button>
          </Link>
          <Link href="/suspects" onClick={toggleMenu}>
            <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700">
              Suspect List
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}