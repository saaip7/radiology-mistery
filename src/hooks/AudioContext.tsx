"use client";

import { createContext, useContext, useRef, useState, useEffect } from "react";

type AudioContextType = {
  toggleAudio: () => void;
  isPlaying: boolean;
  audioRef: React.RefObject<HTMLAudioElement | null>;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // default false karena autoplay diblok

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch((err) => {
        console.warn("Failed to play:", err);
      });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // 👇 Auto play setelah interaksi pertama (klik di mana saja)
  useEffect(() => {
    const handleUserInteraction = () => {
      const audio = audioRef.current;
      if (audio && audio.paused) {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch((e) => console.warn("Autoplay blocked:", e));
      }

      // hanya perlu sekali
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <AudioContext.Provider value={{ toggleAudio, isPlaying, audioRef }}>
      <audio ref={audioRef} loop>
        <source src="/sound/sounds.mp3" type="audio/mpeg" />
      </audio>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
