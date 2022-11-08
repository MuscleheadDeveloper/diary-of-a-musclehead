import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://amuscleheads-bio.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image
            src="/logo.png"
            alt="Diary of a musclehead Logo"
            width={72}
            height={16}
          />
        </a>
      </footer>
    </>
  );
}

export default Footer
