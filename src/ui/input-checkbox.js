import React, { useCallback } from 'react';
import { css } from 'emotion';

export default ({ label, name, checked, onChange }) => {
  const onToggle = useCallback((e) => {
    onChange(e.target.name, e.target.checked);
  }, []);

  return (
    <label
      className={css`
        padding: 1em 0;
        position: relative;
        text-align: left;
        line-height: 1.5;
        font-weight: 400;
        background-image: linear-gradient(to bottom, #000000 0%, #000000 100%);
        background-repeat: no-repeat;
        background-position: 0 1.6em;
        transition: background-size 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        background-size: ${checked ? '100% ' : '0%'} 0.09em;
      `}
    >
      <input
        className={css`
          opacity: 0;
          position: absolute;
          width: 100%;
          height: 100%;
        `}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onToggle}
      />
      {label}
    </label>
  );
};