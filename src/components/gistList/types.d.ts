export type GistType = {
  filename: string;
  html_url: string;
  updated_at: string;
  files: Record<string, { filename: string }>;
};