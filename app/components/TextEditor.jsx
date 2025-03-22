import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

// Import react-quill only on the client side
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function TextEditor() {
  const [text, setText] = useState("");

  return (
    <div>
      <ReactQuill value={text} onChange={setText} />
    </div>
  );
}
