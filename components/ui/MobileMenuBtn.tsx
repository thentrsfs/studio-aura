import { IoClose } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

const MobileMenuBtn = ({ isMenuOpen, setIsMenuOpen, theme } : { isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>, theme: string }) => {
  return (
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='font-medium lg:hidden font-sora z-26'>{isMenuOpen ? <IoClose className="text-3xl text-black" /> : <HiOutlineMenu className={`text-3xl ${theme === 'dark' ? 'text-white' : 'text-primary'}`} />}</button>
  )
}

export default MobileMenuBtn