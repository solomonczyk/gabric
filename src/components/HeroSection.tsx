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
      className={`relative ${heightClass} flex items-center overflow-hidden bg-deep-slate py-20 md:py-0`}
    >
      <img
        src={backgroundImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-slate/90 via-deep-slate/50 to-transparent" />
      <div className="relative z-10 max-w-container-max mx-auto px-4 md:px-gutter w-full">
        <div className="max-w-2xl">
          {label && (
            <span className="font-label-caps text-label-caps text-construction-amber mb-base inline-block">
              {label}
            </span>
          )}
          <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl text-plaster-white mb-gutter leading-tight">
            {title}
          </h1>
          {description && (
            <p className="font-body-lg text-body-lg text-concrete-grey mb-8">{description}</p>
          )}
          {children && <div className="flex flex-col sm:flex-row flex-wrap gap-4">{children}</div>}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-construction-amber" />
    </section>
  );
}
