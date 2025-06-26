export function createUniqueBlogPath(title: string) {
  const uniqueBlogPath = title.split(" ").join("_");
  return uniqueBlogPath;
}
