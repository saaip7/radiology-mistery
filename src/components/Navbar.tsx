"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { useAudio } from "@/hooks/AudioContext";
import { Volume2, VolumeX } from "lucide-react";

export function Navbar() {
  const { toggleAudio, isPlaying } = useAudio();

  return (
    <nav className="relative container mx-auto px-[2.5vw] py-4 flex justify-between items-center border-b border-gray-100 z-10">
      <Link href="/">
        <div className="text-2xl font-bold text-blue-600">
          Radiology Mistery
        </div>
      </Link>
      <div className="flex gap-4">
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
    </nav>
  );
}
