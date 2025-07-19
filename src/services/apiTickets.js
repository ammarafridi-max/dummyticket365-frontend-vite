import { BASEURL } from '../config';

export async function fetchTicketBySessionId(sessionId) {
  const res = await fetch(`${BASEURL}/api/ticket/${sessionId}`);
  if (!res.ok) throw new Error('Failed to fetch ticket data');
  const json = await res.json();
  return json.data;
}
