interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  const align = center ? 'text-center' : 'text-left';
  const lineMargin = center ? 'mx-auto' : 'ml-0';

  return (
    <div className={`mb-12 ${align}`}>
      {label && (
        <span className="font-label-caps text-label-caps text-gold-primary mb-2 inline-block tracking-[0.15em]">
          {label}
        </span>
      )}
      <h2 className="font-headline-lg text-headline-lg text-white mb-4">
        {title}
      </h2>
      <div className={`h-1 w-24 bg-gold-primary ${lineMargin}`} />
      {subtitle && (
        <p className="font-body-lg text-body-lg text-text-light mt-4 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
