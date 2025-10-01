
/**
 * Formats a timestamp to a readable date in Spanish
 * 
 * @param timestamp - Timestamp in milliseconds since Unix epoch
 * @returns Formatted string as "Publicado el [date]"
 * 
 * @example
 * formatDate(1695565200000) // "Publicado el 24 de septiembre de 2023"
 */
export function formatDate(timestamp: number) {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formattedDate = date.toLocaleDateString('es-ES', options);
    return `Publicado el ${formattedDate}`;
}

/**
 * Formats a Unix timestamp into a readable date string
 * @param {number} ts - Unix timestamp in milliseconds
 * @returns  Formatted date string (DD/MM/YYYY)
 */
export function formatTimestamp(ts: number) {
    const date = new Date(ts);
    // Format as DD/MM/YYYY (month is 0-indexed, so we add 1)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}