import React from 'react';

const Definitions = ({
  osName,
  definitions,
}: {
  osName: string;
  definitions: Record<string, any>;
}) => (
  <>
    {Object.entries(definitions).map(([label, style], i) => (
      <tr key={label}>
        {i === 0 && <td rowSpan={Object.keys(definitions).length}>{osName}</td>}
        <td>{label}</td>
        <td>
          <pre>
            <code>{JSON.stringify(style, null, 2)}</code>
          </pre>
        </td>
        <td>
          <div style={style}>The quick brown fox jumps over the lazy dog.</div>
        </td>
      </tr>
    ))}
  </>
);

export const FontShowcase = ({ fontConfig }) => (
  <table>
    <thead>
      <tr>
        <th>OS</th>
        <th>Type</th>
        <th>Definition</th>
        <th>Sample</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(fontConfig).map(([osName, definitions]) => (
        <Definitions key={osName} osName={osName} definitions={definitions} />
      ))}
    </tbody>
  </table>
);
