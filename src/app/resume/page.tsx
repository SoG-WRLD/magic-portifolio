import PDFHandler from "@/components/PDFHandler";
import { certificates, Document, resume } from "@/modules/document";
const ResumePage = () => {
  const docs: Document[] = certificates;

  return (
    <main className="sm:mt-20 p-2">
      <ul className="grid grid-cols-3 gap-y-5 gap-x-3 my-4">
        <div className="flex flex-col w-11/12 sm:w-1/2 appearTop place-self-center items-center col-span-full">
          <h2 className="subtitle">Resume</h2>
          <PDFHandler
            displayText={resume.title}
            pdfFileName={resume.path}
            index={0}
          />
        </div>
        <h2 className="subtitle col-span-full text-center">Certificates</h2>
        {docs.map((doc, index) => (
          <PDFHandler
            displayText={doc.title}
            pdfFileName={doc.path}
            index={index}
            key={index}
          />
        ))}
      </ul>
    </main>
  );
};

export default ResumePage;
