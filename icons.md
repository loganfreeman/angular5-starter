[How to register and sanitize svg icons globally for use by all components?](https://github.com/angular/material2/issues/2610)
---
Bug, feature request, or proposal:
Feature request

What is the expected behavior?
A way to register and sanitize svg icons globally for use by all components.

What is the current behavior?
Currently following the demo at:
https://github.com/angular/material2/tree/master/src/demo-app/icon

Each component needs 2 imports:
```
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
```
and constructor code for each icon:
```
constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry.addSvgIcon('icon1',sanitizer.bypassSecurityTrustResourceUrl('assets/icon1.svg'));
    mdIconRegistry.addSvgIcon('icon2',sanitizer.bypassSecurityTrustResourceUrl('assets/icon2.svg'));
}
```
example code
```
import {Component, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'mat-icon-demo',
  templateUrl: 'icon-demo.html',
  styleUrls: ['icon-demo.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class IconDemo {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
        .addSvgIcon('thumb-up',
            sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/thumbup-icon.svg'))
        .addSvgIconSetInNamespace('core',
            sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/core-icon-set.svg'))
        .registerFontClassAlias('fontawesome', 'fa');
  }
}
```
