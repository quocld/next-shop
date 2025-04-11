'use client';
import { useEffect, useState } from 'react';

export function WelcomeToast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const isFirstVisit = !localStorage.getItem('hasVisited');

    if (isFirstVisit) {
      setIsVisible(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsVisible(false)}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-neutral-800 rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome to Seraphine Jewelry 🎉</h2>
        <p className="text-lg mb-6 text-center">Enjoy 10% off your first purchase!</p>
        <div className="flex justify-center">
          <button
            onClick={() => setIsVisible(false)}
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-neutral-800 transition-colors"
          >
            Shop Now
          </button>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
}