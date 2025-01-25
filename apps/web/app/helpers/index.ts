export function isValidURL(str: string): boolean {
    try {
        new URL(str);
        return true;
    } catch (err) {
        return false;
    }
}