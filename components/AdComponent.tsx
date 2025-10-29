import React, { useEffect } from 'react';

// Make adsbygoogle available on the window object
declare global {
  interface Window {
    adsbygoogle?: { [key: string]: unknown }[];
  }
}

interface AdComponentProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'display';
  responsive?: boolean;
}

const AdComponent: React.FC<AdComponentProps> = ({
  slot,
  format = 'auto',
  responsive = true,
}) => {

  const AdClient = "ca-pub-3540900632101010";

  useEffect(() => {
    // This effect will run after the component mounts.
    // It's a safe place to trigger the AdSense script.
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense script error:", e);
    }
  }, []);

  return (
    <div className="my-8 text-center bg-gray-800/50 border border-dashed border-gray-700 rounded-lg flex items-center justify-center min-h-[250px] p-4">
      <div>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={AdClient}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive.toString()}
          aria-hidden="true"
        ></ins>
        <p className="text-xs text-gray-600 mt-2">Advertisement</p>
      </div>
    </div>
  );
};

export default AdComponent;
