export interface ContactInfoType {
  icon: string;
  label: string;
  value: string | string[];
}

export const contactInfo: ContactInfoType[] = [
  {
    icon: "map-pin",
    label: "Address",
    value: [
      "Suraj Enterprises",
      "Main Office Building",
      "City, State, Country"
    ]
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+91 9876543210"
  },
  {
    icon: "mail",
    label: "Email",
    value: "info@surajenterprises.work"
  },
  {
    icon: "clock",
    label: "Working Hours",
    value: "Monday - Friday: 9AM - 6PM"
  }
];