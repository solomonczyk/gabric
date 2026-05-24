interface HeroSectionProps {
  backgroundImage: string;
  label?: string;
  title: string;
  description?: string;
  height?: string;
  children?: React.ReactNode;
}

export default function HeroSection({
  backgroundImage,
  label,
  title,
  description,
  height,
  children,
}: HeroSectionProps) {
  const heightClass =
    height ?? 'min-h-[min(100dvh,720px)] md:min-h-[600px] md:h-[819px]';

  return (
    <section
      className={`relative ${heightClass} flex items-center overflow-hidden bg-dark-primary py-20 md:py-0`}
    >
      <img
        src={backgroundImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/95 via-dark-primary/70 to-dark-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/40 via-transparent to-transparent" />
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-primary via-gold-accent to-gold-primary/20" />
      <div className="relative z-10 max-w-container-max mx-auto px-4 md:px-gutter w-full">
        <div className="max-w-2xl">
          {label && (
            <span className="font-label-caps text-label-caps text-gold-primary mb-base inline-block tracking-[0.15em]">
              {label}
            </span>
          )}
          <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl text-white mb-gutter leading-tight">
            {title}
          </h1>
          {description && (
            <p className="font-body-lg text-body-lg text-text-light mb-8">{description}</p>
          )}
          {children && <div className="flex flex-col sm:flex-row flex-wrap gap-4">{children}</div>}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold-primary via-gold-accent to-gold-deep" />
    </section>
  );
}
