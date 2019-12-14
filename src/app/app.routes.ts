import {ROUTES as COLD_COMPOSITION_ROUTES} from "./examples/cold-composition/cold-composition.module";
import {ROUTES as LATE_SUBSCRIBER_ROUTES} from "./examples/late-subscriber/late-subscriber.module";
// import {ROUTES as TIMING_ROUTES} from "./examples/timing/timing.module";
import {ROUTES as SUBSCRIPTION_HANDLING_ROUTES} from "./examples/subscription-handling/subscription-handling.module";
import {ROUTES as SHARING_A_REFERENCE_ROUTES} from "./examples/sharing-a-reference/sharing-a-reference.module";
import {ROUTES as DECLARATIVE_INTERACTION_ROUTES} from "./examples/declarative-interaction/declarative-interaction.module";
import {ROUTES as RE_ENTRANCE_ROUTES} from "./examples/re-entrance/re-entrance.module";
// import {ROUTES as DEMO_BASICS_ROUTES} from "./examples/demo-basics/demo-basics.module";

export const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'timing'
    },
    // {path: 'timing', children: TIMING_ROUTES},
    {path: 'subscription-handling', children: SUBSCRIPTION_HANDLING_ROUTES},
    {path: 'late-subscriber', children: LATE_SUBSCRIBER_ROUTES},
    {path: 'sharing-a-reference', children: SHARING_A_REFERENCE_ROUTES},
    {path: 'cold-composition', children: COLD_COMPOSITION_ROUTES},
    {path: 'declarative-interaction', children: DECLARATIVE_INTERACTION_ROUTES},
    {path: 're-entrance', children: RE_ENTRANCE_ROUTES},
 //   {path: 'demo-basics', children: DEMO_BASICS_ROUTES}
];
