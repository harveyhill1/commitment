// Booking link for consultations. Set VITE_BOOKING_URL to a real scheduler URL;
// until then, consultation buttons lead to the contact page.
export const BOOKING_URL: string = (import.meta.env["VITE_BOOKING_URL"] as string | undefined) || "/contact";
export const CONTACT_EMAIL = "harvey@getcommitment.ai";
export const SITE_DOMAIN = "getcommitment.ai";
