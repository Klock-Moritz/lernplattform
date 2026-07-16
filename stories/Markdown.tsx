import ReactMarkdown, { Options } from "react-markdown";
import remarkGfm from "remark-gfm";

export const Markdown: React.FC<Options> = (props) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} {...props}>
      {props.children}
    </ReactMarkdown>
  );
};
