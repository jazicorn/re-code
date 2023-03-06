import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function Editor() {
  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    console.log('value:', value);
  }, []);
  return (
    <div className="Editor">
      <h1>Page: Editor</h1>
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange} />
    </div>
  );
}

export default Editor;
