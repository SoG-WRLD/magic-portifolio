type Document = {
  title: string;
  path: string;
};
const srcPath = "documents";

const resume: Document = {
  title: "gilsonVicente",
  path: `${srcPath}/resume.pdf`,
};
const certificates: Document[] = [
  {title:"Hack4dev certificate",
  path: `${srcPath}/hack4dev.pdf`}
];

export type { Document };
export { resume, certificates };
