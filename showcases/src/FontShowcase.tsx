import React from 'react';

export const FontShowcase = ({ definitions }) => (
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Sample</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(definitions).map(([label, style], i) => (
        <tr key={label}>
          <td>{label}</td>
          <td>
            <div style={style}>The quick brown fox jumps over the lazy dog.</div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
