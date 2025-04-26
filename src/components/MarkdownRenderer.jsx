import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ content, darkMode }) => {
  // Helper function to recursively extract all text
  const extractText = (node) => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(extractText).join(" ");
    if (React.isValidElement(node)) return extractText(node.props.children);
    return "";
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={darkMode ? oneDark : oneLight} // 👈 Dynamic style
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className="inline-code" {...props}>
              {children}
            </code>
          );
        },

        blockquote({ node, children, ...props }) {
          const text = extractText(children).toLowerCase();
          const hasTip = text.includes("tip");
          const hasInformation = text.includes("information");
          const hasWarning = text.includes("warning");

          let className;
          if (hasTip) {
            className = "special-tip";
          } else if (hasInformation) {
            className = "special-information";
          } else if (hasWarning) {
            className = "special-warning";
          }

          return (
            <blockquote className={className} {...props}>
              {children}
            </blockquote>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
