/**
 * Formats the current time for a given IANA timezone in 24-hour HH:MM format.
 *
 * @param timeZone - The IANA time zone identifier (e.g., 'Europe/London', 'America/New_York')
 * @param date - Optional date instance (defaults to current time)
 * @returns Formatted time string (e.g., "14:35")
 */
export function formatOfficeTime(timeZone: string, date: Date = new Date()): string {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(date);
  } catch (e) {
    // Fallback if timezone is invalid or unsupported
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }
}
