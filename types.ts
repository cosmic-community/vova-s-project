export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    name?: string;
    city?: string;
    address?: string;
    phone?: string;
    email?: string;
    description?: string;
    hero_image?: CosmicImage;
    gallery?: CosmicImage[];
    number_of_courts?: number;
    facilities?: string[];
    operating_hours?: string;
  };
}

export interface Coach extends CosmicObject {
  type: 'coaches';
  metadata: {
    full_name?: string;
    title?: string;
    photo?: CosmicImage;
    bio?: string;
    years_of_experience?: number;
    specialties?: string[];
    certifications?: string;
    location?: Location;
    languages?: string[];
  };
}

export interface Program extends CosmicObject {
  type: 'programs';
  metadata: {
    program_name?: string;
    description?: string;
    featured_image?: CosmicImage;
    skill_level?: string;
    age_group?: string;
    schedule?: string;
    duration_weeks?: number;
    price_egp?: number;
    available_locations?: Location[];
    lead_coach?: Coach;
    whats_included?: string;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}