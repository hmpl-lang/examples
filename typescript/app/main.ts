import {
  HMPLRequestOptions,
  HMPLTemplateFunction,
  HMPLInstance,
} from "hmpl-js";

const templateFn: HMPLTemplateFunction = require("./main.hmpl");

const options: HMPLRequestOptions = {};

const elementObj: HMPLInstance = templateFn(options);

console.log(elementObj);
