type Project = {
  id: string;
  name: string;
  icon: string;
  images: string[];
  description: string;
  link?: string;
  githubRepo?: string;
  status: "uploaded" | "not uploaded";
  languages: { name: string; logoPath: string }[];
};

export type { Project };
