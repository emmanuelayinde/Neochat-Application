import { generateToken } from ".";



export const generateGroupLink = (groupName: string): string => {
    // Remove non-alphanumeric characters and emojis
    const cleanString = groupName.replace(/[^a-zA-Z0-9_]/g, '');
    const randomNumber = generateToken(5)

    return cleanString + randomNumber;
}
