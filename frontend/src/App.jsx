import { useState, useEffect } from "react";
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // or any highlight.js theme
import axios from "axios";
import "./App.css";
import "github-markdown-css/github-markdown.css";

function App() {
  const [code, setCode] = useState("function sun(){ return 1+1; }");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true);
    setReview(""); // clear old review while loading
    try {
      // Use relative URL since frontend and backend are served from same origin
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
      const response = await axios.post(`${API_BASE_URL}/ai/get-review`, {
        code,
      });
      setReview(response.data);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setReview("❌ Failed to fetch review. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={15}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                // border: "1px solid #333",
                borderRadius: "12px",
                width: "100%",
                minHeight: "100%",
                backgroundColor: "black",
                color: "#ffffff",
                overflow: "auto",
                resize: "vertical"
              }}
              textareaId="code-editor"
              className="code-editor"
            />
          </div>
          <button onClick={reviewCode} className="review" disabled={loading}>
            {loading ? "Reviewing..." : "Review"}
          </button>
        </div>


        <div className="right">
          <div className="markdown-body">
            {loading ? (
              <div className="loader">⏳ Fetching AI review...</div>
            ) : (
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {review}
              </Markdown>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
