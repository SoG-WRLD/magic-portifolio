type Document = {
  title: string;
  path: string;
};
const srcPath = "documents";

const resume: Document = {
  title: "gilsonVicente",
  path: `${srcPath}/resume.pdf`,
};
const certificates: Document[] = [];

export type { Document };
export { resume, certificates };
