import React from 'react';

const CustomRichTextRenderer = ({ text }) => {
  // Remove <iframe> tags from the text
  const filteredText = text.replace(/<iframe.*?<\/iframe>/gi, '');

  return <div dangerouslySetInnerHTML={{ __html: filteredText }} />;
};

export default CustomRichTextRenderer;
