export function isMale(name: string) {
  if (name === "Dave") return true;
  if (name === "Eileen") return false;
  if (name === "Jess") return false;
  if (name === "Agnes") return false;
  if (name === "Astrid") return false;
  if (name === "Elisabeth") return false;
  if (name === "George") return false;
  if (name === "Sarah") return false;
  if (name === "Eleanor") return false;
  if (name === "Joshua") return true;
  if (name === "Jake") return true;
  if (name === "Ruth") return false;
  const lastLetter = name[name.length - 1];
  if (["a", "e", "i", "y", ""].includes(lastLetter)) {
    return false;
  }

  return true
}