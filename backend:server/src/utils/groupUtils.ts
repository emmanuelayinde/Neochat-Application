import { generateToken } from ".";



// export const generateGroupLink = async (groupName: string): Promise<string> => {
//     // Remove non-alphanumeric characters and emojis
//     const cleanString = groupName.replace(/[^a-zA-Z0-9_]/g, '');
//     const randomNumber = await generateToken(5)

//     return cleanString + randomNumber;
// }



export function generateGroupLink(input: string): string {
    // Remove characters other than alphabets (capital and small), numbers, underscores, and dots
    const sanitizedInput = input.replace(/[^a-zA-Z0-9_.]/g, '');

    // Convert remaining characters to lowercase
    // const lowercaseInput = sanitizedInput.toLowerCase();

    // Replace spaces with underscores
    const username = sanitizedInput.replace(/\s/g, '_');

    return username;
}
