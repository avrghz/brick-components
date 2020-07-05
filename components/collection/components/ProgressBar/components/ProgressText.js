import { h } from '@stencil/core';
const ProgressText = ({ show, isInnerText, progress }) => show ? (h("div", { class: `bk-progress__text ${isInnerText ? 'inner' : ''} ${progress === 0 ? 'no-progress' : ''}` }, `${progress}%`)) : null;
export default ProgressText;
