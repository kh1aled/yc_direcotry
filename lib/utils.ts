export function cn(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }
  
  
export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}