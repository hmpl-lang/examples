import { HMPLRequestInit, HMPLTemplateFunction, HMPLInstance } from "hmpl-js";

const templateFn: HMPLTemplateFunction = require("./main.hmpl");

const options: HMPLRequestInit = {};

const elementObj: HMPLInstance = templateFn(options);

console.log(elementObj);
