
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