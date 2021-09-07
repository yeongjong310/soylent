import { isObject } from "./typeIs";

export function classNames(...classes: (string | object)[]):string {
  return classes.map((className) => {
    if (isObject(className)) {
      const truthyValues = Object.entries(className).filter(([key, value]) => value);

      return truthyValues.map(([key, value]) => key).join(' ');
    } 

    return className;
  })
  .join(' ')
  .trim();
}