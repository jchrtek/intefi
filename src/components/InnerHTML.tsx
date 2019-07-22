import React from 'react';

interface Props {
  content: string;
}

const InnerHTML = ({ content }: Props) => (
  <span
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
);

export default InnerHTML;
