import Link from "next/link"; // Use next/link for client-side navigation optimization
import Button from "./Button";
import { ButtonType } from "@/assets/assets";
import clsx from "clsx";

interface PdfLinkProps {
  pdfFileName: string; // e.g., 'your-resume.pdf'
  folderPath?: string; // e.g., 'resumes'
  displayText: string;
  index: number;
}
const PDFHandler = ({
  pdfFileName,
  folderPath = "", // Default to root of public if no folder specified
  displayText,
  index,
}: PdfLinkProps) => {
  // Construct the URL to the PDF file
  const pdfUrl = `/${folderPath ? folderPath + "/" : ""}${pdfFileName}`;

  return (
    <li
      className={clsx([
        "rounded-3xl backdrop-blur-lg bg-gradient-to-t from-secondary-950/50 to-30% to-primary-800/50 border border-primary-800 p-2 flex flex-col gap-2 w-full",
        "nth-[4n+1]:col-span-2 nth-[4n+2]:col-span-1 nth-[4n+3]:col-span-1 nth-[4n+4]:col-span-2",
        index % 2 === 0 ? "appearLeft" : "appearRight",
      ])}
    >
      <div
        className="bg-gradient-to-t  from-surface-200 to-surface-600 w-full h-24"
        style={{
          borderRadius: "inherit",
        }}
      />
      <p className="px-2 text-xl capitalize">{displayText}</p>
      <div className="w-1/2 h-px bg-primary-500" />
      <div className="w-1/3 h-px bg-primary-500" />
      <div className="flex gap-3 items-center">
        {pdfUrl}
        <a href={pdfUrl} download={pdfFileName}>
          <Button type={ButtonType.primary} label="download" icon="arrowDown" />
        </a>
        <Link href={pdfUrl} target="_blank" rel="noopener noreferrer">
          <Button type={ButtonType.secondary} label="view" icon="eye" />
        </Link>
      </div>
    </li>
  );
};

export default PDFHandler;
