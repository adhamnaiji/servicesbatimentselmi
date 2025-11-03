"use client";

import { useState, useEffect } from "react";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for window load event (all resources including images loaded)
    const handleLoad = () => {
      // Add a small delay for smooth transition
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    // Check if already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <div className="splash-content">
          <div className="spinner"></div>
          <h1 className="splash-title">Lina Constructions</h1>
          <p className="splash-subtitle">Chargement en cours...</p>
        </div>

        <style jsx>{`
          .splash-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #0f1115 0%, #1a1d24 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            animation: fadeOut 0.5s ease-out 0s forwards;
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 1;
            }
          }

          .splash-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            animation: slideUp 0.6s ease-out;
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .spinner {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255, 157, 58, 0.2);
            border-top: 4px solid #ff9d3a;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .splash-title {
            font-size: clamp(1.8rem, 4vw, 2.8rem);
            font-weight: 700;
            color: #ffffff;
            margin: 0;
            text-align: center;
          }

          .splash-subtitle {
            font-size: 1rem;
            color: #98a2b3;
            margin: 0;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}
