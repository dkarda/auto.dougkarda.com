export const site = {
  name: 'auto.dougkarda.com',
  shortName: 'Auto',
  tagline: 'A personal automotive reference — detailing, repair, maintenance, and the rest of owning a car.',
  description:
    'Straightforward notes on detailing, repair, maintenance, insurance, license, registration, and the resources I actually use.',
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
  { title: 'Insurance', href: '/insurance', desc: 'Coverage, claims, and shopping a complex policy' },
  { title: 'License', href: '/license', desc: 'Registration, title, plates, and what to keep in the car' },
  { title: 'Resources', href: '/resources', desc: 'Manuals, tools, vehicle notes, and links' },
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
  { title: 'Preparedness', href: '/resources/preparedness', desc: 'What I actually keep in the cabin and trunk' },
  { title: 'My Lexus', href: '/resources/my-lexus', desc: 'Notes, quirks, and products for my own car' },
];

export const licensePages: HubLink[] = [
  { title: 'Registration', href: '/license/registration', desc: 'Renewals, windshield sticker, and proof that actually counts' },
  { title: 'Title & Plates', href: '/license/title-and-plates', desc: 'Who owns the car, and what happens when that changes' },
];
