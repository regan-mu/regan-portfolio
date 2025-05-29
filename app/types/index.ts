export interface ContactInfo {
    name: string,
    email: string,
    phone: string,
    message: string
}

export interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
  gradient?: boolean;
}