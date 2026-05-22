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
  const baseStyles = 'font-headline-md font-bold px-8 py-4 rounded transition-all';
  
  const variants = {
    primary: 'bg-construction-amber text-deep-slate hover:opacity-90',
    secondary: 'border-2 border-plaster-white text-plaster-white hover:bg-plaster-white hover:text-deep-slate',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
