export type JobStatus = 'available' | 'in-progress' | 'completed';
export type DeliveryType = 'direct' | 'relay';

export type DriverJob = {
  id: string;
  tag: string;
  size: 'Small' | 'Medium' | 'Large';
  eta?: string;
  pickup: string;
  dropoff: string;
  distance: string;
  customer: string;
  customerPhone?: string;
  earnings: string;
  status: JobStatus;
  deliveryType: DeliveryType;
  relayPoint?: string;
  qrCode?: string;
  packageDescription?: string;
  specialInstructions?: string;
};

export const jobs: DriverJob[] = [
  {
    id: '1',
    tag: 'JOB-2026-5647',
    size: 'Small',
    eta: '30 mins',
    pickup: 'BGC, Taguig City',
    dropoff: 'Makati Avenue, Makati',
    distance: '3.2 km',
    customer: 'Maria Santos',
    customerPhone: '+63 912 345 6789',
    earnings: 'P85',
    status: 'available',
    deliveryType: 'direct',
    packageDescription: 'Documents and papers',
    specialInstructions: 'Please handle with care. Ring doorbell twice.',
  },
  {
    id: '2',
    tag: 'JOB-2026-5648',
    size: 'Medium',
    eta: '25 mins',
    pickup: 'SM Megamall, Mandaluyong',
    dropoff: 'Ortigas Center, Pasig',
    distance: '2.8 km',
    customer: 'Juan Reyes',
    customerPhone: '+63 917 234 5678',
    earnings: 'P120',
    status: 'in-progress',
    deliveryType: 'direct',
    packageDescription: 'Electronics - Laptop',
    specialInstructions: 'Fragile item. Call upon arrival.',
  },
  {
    id: '3',
    tag: 'JOB-2026-5645',
    size: 'Small',
    pickup: 'Quezon City Hall',
    dropoff: 'UP Diliman, QC',
    distance: '4.5 km',
    customer: 'Anna Cruz',
    customerPhone: '+63 915 876 5432',
    earnings: 'P95',
    status: 'completed',
    deliveryType: 'direct',
    packageDescription: 'Books and stationery',
    specialInstructions: 'Leave at security desk if not home.',
  },
  {
    id: '4',
    tag: 'R-2026-3401',
    size: 'Small',
    eta: '20 mins',
    pickup: '7-Eleven Frassati Gate',
    dropoff: 'Mini Stop Commonwealth Ave',
    distance: '2.1 km',
    customer: 'Jose Garcia',
    customerPhone: '+63 918 765 4321',
    earnings: 'P65',
    status: 'available',
    deliveryType: 'relay',
    relayPoint: '7-Eleven Frassati Gate',
    qrCode: 'PKS-RELAY-3401',
    packageDescription: 'Clothing package',
    specialInstructions: 'Scan the customer QR code at the pickup point to confirm.',
  },
  {
    id: '5',
    tag: 'R-2026-3398',
    size: 'Small',
    eta: '15 mins',
    pickup: '7-Eleven Frassati Gate',
    dropoff: 'FamilyMart Near Frassati',
    distance: '1.2 km',
    customer: 'Rosa Martinez',
    customerPhone: '+63 921 234 5678',
    earnings: 'P50',
    status: 'in-progress',
    deliveryType: 'relay',
    relayPoint: '7-Eleven Frassati Gate',
    qrCode: 'PKS-RELAY-3398',
    packageDescription: 'Snacks and beverages',
    specialInstructions: 'Quick relay handoff, perishable items inside.',
  },
  {
    id: '6',
    tag: 'R-2026-3395',
    size: 'Medium',
    pickup: 'Mini Stop Commonwealth Ave',
    dropoff: 'Alfamart Frassati Corner',
    distance: '2.3 km',
    customer: 'Carlos Diaz',
    customerPhone: '+63 922 345 6789',
    earnings: 'P60',
    status: 'completed',
    deliveryType: 'relay',
    relayPoint: 'Mini Stop Commonwealth Ave',
    qrCode: 'PKS-RELAY-3395',
    packageDescription: 'Office supplies',
    specialInstructions: 'Package was picked up and delivered successfully.',
  },
];
