import {Component} from 'angular2/core';
import {RouteConfig,RouteParams,RouterOutlet,CanDeactivate,ComponentInstruction} from 'angular2/router';

import {HelpDetail} from './help-detail.component';

@Component({
    template: `
        <h2>Helpful Information</h2>
        <router-outlet></router-outlet>
    `,
    directives: [RouterOutlet]
})
@RouteConfig([
    {path:'/:id', name: 'HelpDetail', component: HelpDetail, useAsDefault: true}
])
export class Help implements CanDeactivate {

    routerCanDeactivate(next: ComponentInstruction, previous: ComponentInstruction) {
        return confirm('Leave the help page?');
    }
}