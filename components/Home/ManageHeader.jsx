"use client";

import { useState, useEffect } from 'react';
import '/app/temp.css';
import '/styles/style.css';
import '/styles/music.css';
import Link from 'next/link';

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Toggle dropdown visibility on profile click
  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  // Close dropdown if click happens outside of dropdown or profile picture
  useEffect(() => {
    const handleClickOutside = (event) => {
      const pfp = document.getElementById('pfp');
      const dropdown = document.getElementById('pfpdropdown');

      // Only close dropdown if click is outside the dropdown or profile image
      if (pfp && dropdown && !dropdown.contains(event.target) && !pfp.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="main-div">
        <div className="sub-main-div">
          <img src="/images/logo.svg" alt="Logo" />
          <a href="/home" className="anchor-sub-main"></a>
        </div>
        <div className="right">
          <span className="right-span">Credits Remaining: <span id="number">9979</span></span>
          <div className="line"></div>
          <div className="img" id="pfp" onClick={toggleDropdown}>
            <div className="img-sub-div">
              <div className="img-sub">
                <img src="/images/profile.svg" alt="Profile" />
              </div>
            </div>
          </div>

          {/* Dropdown Menu */}
          <div 
            id="pfpdropdown"
            className={isDropdownVisible ? 'present' : 'not-present'}
          >
            <div className="not-present-sub">
              <span className="not-present-sub-span1">Omar</span>
              <span className="not-present-sub-span2">omar@gmail.com</span>
            </div>
            <div className="profile-main-div">
              <div className="profile-sub-div">
                <div className="dropdownText">
                  <span className="dropdownText" style={{ width: 'fit-content' }}>Credit Left</span>
                  <span className="dropdownText" style={{ width: 'fit-content', color: '#19191980' }}>9979</span>
                </div>
              </div>
              <span className="dropdownText">
                <Link href="/manage/manage-assets">Manage Asset Library</Link>
              </span>
              <span className="dropdownText">
                <Link href="/manage/manage-video">Manage Video Drafts</Link>
              </span>
              <span className="dropdownText">
                <Link href="/manage/manage-subs">Manage Subscription</Link>
              </span>
            </div>
            <div className="profile-last-div">
              <span className="dropdownText"><a href="/">Log Out</a></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
