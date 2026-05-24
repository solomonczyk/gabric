export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseStyles = 'font-headline-md font-bold px-8 py-4 rounded-sm transition-all';

  const variants = {
    primary: 'bg-gold-primary text-dark-primary hover:bg-gold-accent',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-dark-primary',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
