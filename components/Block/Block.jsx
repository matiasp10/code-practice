import { CopyBlock, dracula } from 'react-code-blocks';

function Block({ code, language }) {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={true}
      theme={dracula}
      codeBlock
    />
  );
}

export default Block;
