export interface SellFormData {
  brand: string;
  model: string;
  year: number;
  mileage: number;
  fuelType: string;
  condition: string;
  images: File[];
  name: string;
  email: string;
  phone: string;
}

export interface SellFormErrors {
  brand?: string;
  model?: string;
  year?: string;
  mileage?: string;
  fuelType?: string;
  condition?: string;
  images?: string;
  name?: string;
  email?: string;
  phone?: string;
}

export interface SellingStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SellingAdvantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  feedback: string;
  image?: string;
}
