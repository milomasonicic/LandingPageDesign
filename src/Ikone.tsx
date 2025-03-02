// src/components/IconsExample.jsx
import React from 'react';
// Uvoz specifičnih ikona
import { FaReact, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdHome } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';

const Icons = () => {
  return (
    <div style={{ textAlign: 'center', display:'flex', padding: '20px' }}>
      
      <div style={{ fontSize: '2rem', display:'flex', color: '#61DAFB' }}>
        {/* Primer React ikona */}
       
        <FaFacebook title="Facebook" style={{ marginLeft: '15px', color: '#1e293b' }} />
        <FaTwitter title="Twitter" style={{ marginLeft: '15px', color: '#1e293b' }} />
        <FaLinkedin title="LinkedIn" style={{ marginLeft: '15px', color: '#1e293b' }} />
        <MdEmail title="Email" style={{ marginLeft: '15px', color: '#1e293b' }} />
        <MdHome title="Home" style={{ marginLeft: '15px', color: '#1e293b' }} />
       
      </div>
    </div>
  );
};

export default Icons;



