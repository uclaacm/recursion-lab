import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockProps {
  code: string;
  language: string;
}

const customStyle = {
  lineHeight: '1.5',
  fontSize: '1rem',
};

const CodeBlock = (props: CodeBlockProps): JSX.Element => {
  return (
    <div>
      <SyntaxHighlighter
        language={props.language}
        showLineNumbers={false}
        style={atomOneLight}
        customStyle={customStyle}
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
