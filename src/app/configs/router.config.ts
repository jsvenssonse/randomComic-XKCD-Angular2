import {UIRouter} from "ui-router-ng2";
import {Injector, Injectable} from "@angular/core";


/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {

  // If no URL matches, go to the `hello` state by default
  router.urlService.rules.otherwise({ state: 'hello' });
}