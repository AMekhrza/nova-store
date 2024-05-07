import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = (): React.ReactElement => {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 bg-primary p-4 text-center text-white md:flex-row md:gap-0">
    
      <small>Copyright © 2024. All rights reserved.</small>
      <div className="flex items-center gap-3">
        <a
          className="transition-all hover:text-black"
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/AMekhrza/nova-store"
        >
          <FaGithub size={25} />
        </a>
        <a
          className="transition-all hover:text-black"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin size={25} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
