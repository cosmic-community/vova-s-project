import { createBucketClient } from '@cosmicjs/sdk'
import { Location, Coach, Program, hasStatus } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getLocations(): Promise<Location[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'locations' })
      .depth(1);
    return response.objects as Location[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch locations');
  }
}

export async function getLocation(slug: string): Promise<Location | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'locations', slug })
      .depth(1);
    return response.object as Location;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch location');
  }
}

export async function getCoaches(): Promise<Coach[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'coaches' })
      .depth(1);
    return response.objects as Coach[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch coaches');
  }
}

export async function getCoach(slug: string): Promise<Coach | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'coaches', slug })
      .depth(1);
    return response.object as Coach;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch coach');
  }
}

export async function getPrograms(): Promise<Program[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'programs' })
      .depth(1);
    return response.objects as Program[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch programs');
  }
}

export async function getProgram(slug: string): Promise<Program | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'programs', slug })
      .depth(1);
    return response.object as Program;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch program');
  }
}