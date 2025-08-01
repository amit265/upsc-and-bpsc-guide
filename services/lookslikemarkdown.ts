export function looksLikeMarkdown(text: string): boolean {
    const markdownPatterns = [
      /^#{1,6}\s/gm,          // headings
      /\*\*(.*?)\*\*/g,       // bold
      /\*(.*?)\*/g,           // italic
      /-\s.+/gm,              // bullet list
      /\d+\.\s.+/gm,          // numbered list
      />\s.+/gm,              // blockquote
      /`{1,3}[^`]+`{1,3}/g,   // inline or block code
    ];
  
    return markdownPatterns.some((pattern) => pattern.test(text));
  }
  