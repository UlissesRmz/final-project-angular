import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagService {
  private _featureFlags: Array<string> = []; // A list of all features turned ON
  private _initialized = false;
 
  constructor(private featureFlagDataService: FeatureFlagDataService) { }
 
  featureOff(featureName: string) {
    return !this.featureOn(featureName);
  }
 
  featureOn(featureName: string) {
    if (!featureName) {
      return true;
    }
    // Find the feature flag that is turned on
    return this._featureFlags && !!this._featureFlags.find(feature => {
      return feature === featureName;
    });
    // if feature not found, default to turned off
  }
 
  get initialized() {
    return this._initialized;
  }
 
  // This method is called once and a list of features is stored in memory
  initialize() {
    this._featureFlags = [];
    return new Promise((resolve, reject) => {
      // Call API to retrieve the list of features and their state
      // In this case, the method returns a Promise,
      // but it could have been implemented as an Observable
      this.featureFlagDataService.getFeatureFlags()
        .then(featureFlags => {
          this._featureFlags = featureFlags;
          this._initialized = true;
          resolve();
        })
        .catch((e) => {
          resolve();
        });
  });
