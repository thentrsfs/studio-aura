import Link from 'next/link';

const CustomButton = ({
	theme = 'primary',
	className,
	href,
	handleClick,
}: {
	theme?: 'primary' | 'secondary';
	className?: string;
	href?: string;
	handleClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
	return (
		<Link
			onClick={handleClick}
			href={href ?? '#'}
			className={`py-2.5 px-10 rounded-lg text-center ${theme === 'primary' ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-background text-primary hover:bg-background-hover'} font-medium cursor-pointer transition-all duration-300 ${className}`}>
			Objednat se
		</Link>
	);
};

export default CustomButton;
