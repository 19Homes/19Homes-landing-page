export function cutOutText(text: string) {
    const extractedText = `${text.substring(0, 100)}...`;
    return extractedText;
  }