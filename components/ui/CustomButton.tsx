
const CustomButton = ({theme = 'primary', className} : {theme?: 'primary' | 'secondary', className?: string}) => {
  return (
     <button className={`py-2.5 px-10 rounded-lg ${theme === 'primary' ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-background text-primary hover:bg-background-hover'} font-medium cursor-pointer transition-all duration-300 ${className}`}>
      Objednat se
    </button>
  )
}

export default CustomButton