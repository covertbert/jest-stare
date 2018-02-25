import { Constants } from "../Constants";

/**
 * Interface mapping fields the user can specify in package.json
 * @export
 * @interface IJestStareConfig
 */
export interface IJestStareConfig {

     /**
      * The directory you would like the results to go to
      * @type {string}
      * @memberof IJestStareConfig
      */
     resultDir?: string;

     /**
      * Configure whether logging is on (true) or off (false)
      * @type {boolean}
      * @memberof IJestStareConfig
      */
     log?: boolean;
}

/**
 * Key in package.json that specified jest-stare config
 */
export const PACKAGE_JSON_KEY = Constants.NAME;