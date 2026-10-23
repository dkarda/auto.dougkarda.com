export const site = {
  name: 'auto.dougkarda.com',
  shortName: 'Auto',
  tagline: 'A personal automotive reference — detailing, repair, maintenance, and the rest of owning a car.',
  description:
    'Straightforward notes on detailing, repair, maintenance, insurance, and the resources I actually use.',
};

export type HubLink = {
  title: string;
  href: string;
  desc: string;
};

export const sections: HubLink[] = [
  { title: 'Detailing', href: '/detailing', desc: 'The exact setup I use to keep cars clean' },
  { title: 'Repair', href: '/repair', desc: 'When to DIY, when to stop, and how I diagnose' },
  { title: 'Maintenance', href: '/maintenance', desc: 'Intervals, fluids, filters, and wear items' },
  { title: 'Resources', href: '/resources', desc: 'Manuals, tools, vehicle notes, and links' },
  { title: 'Insurance', href: '/insurance', desc: 'Coverage, claims, and shopping without the fog' },
];

export const detailingPages: HubLink[] = [
  { title: 'Full Kit', href: '/detailing/full-kit', desc: 'Everything I actually use, in one place' },
  { title: 'Carpet Cleaning', href: '/detailing/carpet-cleaning', desc: 'Stains, mats, and a deep-clean setup' },
  { title: 'Seat Cleaning', href: '/detailing/seat-cleaning', desc: 'Cloth and leather routine' },
  { title: 'Dash & Trim', href: '/detailing/dash-trim', desc: 'Interior surfaces that stay clean' },
  { title: 'Exterior', href: '/detailing/exterior', desc: 'Wash, foam, and protection' },
  { title: 'Tires', href: '/detailing/tires', desc: 'Wheels, tires, and shine' },
];

export const repairPages: HubLink[] = [
  { title: 'When to DIY', href: '/repair/when-to-diy', desc: 'A simple filter before you pick up a wrench' },
];

export const maintenancePages: HubLink[] = [
  { title: 'Oil Changes', href: '/maintenance/oil-changes', desc: 'Intervals, oil type, and what I actually watch' },
];

export const resourcePages: HubLink[] = [
  { title: 'My Lexus', href: '/resources/my-lexus', desc: 'Notes, quirks, and products for my own car' },
];

export const insurancePages: HubLink[] = [
  { title: 'Coverage Basics', href: '/insurance/coverage-basics', desc: 'What the common coverages actually mean' },
];
