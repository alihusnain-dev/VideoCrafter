// components/Home/ProgressBar.jsx
'use client';
import { usePathname } from 'next/navigation';
import '/app/temp.css';
import '/styles/style.css';
import '/styles/music.css';

const ProgressBar = () => {
  const pathname = usePathname();

  // Define the steps and their corresponding routes
  const steps = [
    { name: 'Voice & Subtitle Design', route: '/home' }, // Adjust if needed
    { name: 'Scene Selection', route: '/app/scene' },        // Matches your /scene route
    { name: 'Background Music Selection', route: '/background-music' },
    { name: 'Download', route: '/download' },
  ];

  // Determine the current step index based on the pathname
  const currentStepIndex = steps.findIndex((step) => {
    // Handle exact match or partial match for dynamic routes
    return pathname === step.route || pathname.startsWith(step.route);
  });

  // Debugging: Log the current pathname and step index
  console.log('Current Pathname:', pathname);
  console.log('Current Step Index:', currentStepIndex);

  return (
    <div className="progressbar">
      <div className="sub-div">
        <div className={`sub-div2 ${currentStepIndex >= 0 ? 'active' : ''} ${currentStepIndex > 0 ? 'completed' : ''}`}></div>
        <div className={`sub-div3 ${currentStepIndex >= 1 ? 'active' : ''} ${currentStepIndex > 1 ? 'completed' : ''}`}></div>
        <div className={`sub-div4 ${currentStepIndex >= 2 ? 'active' : ''} ${currentStepIndex > 2 ? 'completed' : ''}`}></div>
        <div className={`sub-div5 ${currentStepIndex >= 3 ? 'active' : ''} ${currentStepIndex > 3 ? 'completed' : ''}`}></div>

        <div className={`voice-subtitle ${currentStepIndex === 0 ? 'active-text' : ''}`}>
          Voice & Subtitle Design
        </div>
        <div className={`sceneselection ${currentStepIndex === 1 ? 'active-text' : ''}`}>
          Scene Selection
        </div>
        <div className={`bgmselection ${currentStepIndex === 2 ? 'active-text' : ''}`}>
          Background Music Selection
        </div>
        <div className={`download ${currentStepIndex === 3 ? 'active-text' : ''}`}>
          Download
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;