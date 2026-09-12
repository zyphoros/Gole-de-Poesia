export interface Workshop {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  facilitator: {
    name: string;
    role: string;
    photoLocal: string;
    photoDrive: string;
    fallbackColor: string;
  };
  description: string;
  fullDescription?: string;
  topics?: string[];
  formUrl: string;
  targetAudience?: string;
  highlightTag?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
