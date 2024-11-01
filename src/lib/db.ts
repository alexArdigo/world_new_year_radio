import { kv } from '@vercel/kv';

export async function saveCountdown(eventName, eventDate) {
  await kv.set('countdown', { eventName, eventDate });
}

export async function getCountdown() {
  return await kv.get('countdown');
}

export async function deleteCountdown() {
  await kv.del('countdown');
}