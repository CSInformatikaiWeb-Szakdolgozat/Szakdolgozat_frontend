import { useState, useEffect, useRef, useMemo } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";  // Használt build importálása
import "ckeditor5/ckeditor5.css";
import "./css/ckeditor.css";

// License Key beállítása, ha szükséges
const LICENSE_KEY = "GPL"; // vagy saját licenc kulcs

export default function Ckeditor({ value, onChange }) {
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);
    return () => setIsLayoutReady(false);
  }, []);

  const { editorConfig } = useMemo(() => {
    if (!isLayoutReady) return {};

    return {
      editorConfig: {
        toolbar: {
          items: [
            "sourceEditing", "|", "heading", "|", "fontSize", "fontFamily", "fontColor", "fontBackgroundColor", "|",
            "bold", "italic", "underline", "strikethrough", "subscript", "superscript", "code", "removeFormat", "|",
            "horizontalLine", "link", "bookmark", "insertImage", "insertTable", "highlight", "blockQuote", "codeBlock", "|",
            "alignment", "|", "bulletedList", "numberedList", "outdent", "indent",
          ],
          shouldNotGroupWhenFull: true,
        },
        placeholder: "Type or paste your content here!",
        licenseKey: LICENSE_KEY,
        image: {
          toolbar: [
            "imageTextAlternative", "|", "imageStyle:alignBlockLeft", "imageStyle:block", "imageStyle:alignBlockRight",
          ],
          styles: { options: ["alignBlockLeft", "block", "alignBlockRight"] },
        },
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
        },
      },
    };
  }, [isLayoutReady]);

  return (
    <div className="editor-container">
      {editorConfig && (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          config={editorConfig}
          onChange={(event, editor) => onChange(editor.getData())}
        />
      )}
    </div>
  );
}
