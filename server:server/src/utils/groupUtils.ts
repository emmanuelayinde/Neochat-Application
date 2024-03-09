/**
 * Generate group id
 * 
 * @param input 
 * @returns 
 */
export function generateGroupLink(input: string): string {
    const sanitizedInput = input.replace(/[^a-zA-Z0-9_.]/g, '');
    const username = sanitizedInput.replace(/\s/g, '_');
    return username;
}
