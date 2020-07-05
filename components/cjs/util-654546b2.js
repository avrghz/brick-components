'use strict';

// ! fixme : no warning in production bundle
/* tslint:disable-next-line */
const consoleWarn = (title, message) => console.warn(title, message);

exports.consoleWarn = consoleWarn;
