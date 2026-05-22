import { siteConfig } from '@/lib/siteConfig';

type WorkingHoursProps = {
  className?: string;
  variant?: 'block' | 'footer';
};

export default function WorkingHours({
  className = '',
  variant = 'block',
}: WorkingHoursProps) {
  if (variant === 'footer') {
    return (
      <p className={`font-body-md text-sm text-concrete-grey font-bold ${className}`}>
        {siteConfig.workingHours.weekday}
        <br />
        {siteConfig.workingHours.saturday}
      </p>
    );
  }

  return (
    <p className={className}>
      {siteConfig.workingHours.weekday}
      <br />
      {siteConfig.workingHours.saturday}
    </p>
  );
}
