import React, { useEffect } from "react";

const ExternalFormLoader = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://mf-stack.kit.com/b5925d1137/index.js";
    script.async = true;
    script.setAttribute("data-uid", "b5925d1137");

    // Append script to document body
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Return a container div where the form will be injected
  return <div id="form-container" className="twp w-full" />;
};

export default ExternalFormLoader;
