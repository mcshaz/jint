// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype property "toLocaleDateString" has { DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.6/S15.9.5.6_A1_T3.js
 * @description Checking DontEnum attribute
 */

if (Date.prototype.propertyIsEnumerable('toLocaleDateString')) {
  $ERROR('#1: The Date.prototype.toLocaleDateString property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "toLocaleDateString") {
    $ERROR('#2: The Date.prototype.toLocaleDateString has the attribute DontEnum');
  }
}


