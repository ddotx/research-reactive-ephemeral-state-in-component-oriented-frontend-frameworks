import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {map, tap} from "rxjs/operators";
import {
    fetchRepositoryList,
    repositoryListFetchError,
    repositoryListFetchSuccess,
    RepositoryListItem,
    selectRepositoryList
} from "@data-access/github";
import {DemoBasicsViewModelService} from "./demo-basics.view-model.service";
import {DemoBasicsItem} from "../demo-basics-item.interface";
import {Actions, ofType} from "@ngrx/effects";

@Component({
    selector: 'demo-basics-4',
    templateUrl: './demo-basics-4.view.html',
    styles: [`
        .list .mat-expansion-panel-header {
            position: relative;
        }
        .list .mat-expansion-panel-header mat-progress-bar {
            position: absolute;
            top: 0px;
            left: 0;
        }

        .list .mat-expansion-panel-content .mat-expansion-panel-body {
            padding-top: 10px;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DemoBasicsViewModelService]
})
export class DemoBasicsComponent4 {

    @Input()
    set refreshInterval(refreshInterval: number) {
        if (refreshInterval > 4000) {
            this.vm.setState({refreshInterval});
        }
    }

    constructor(public vm: DemoBasicsViewModelService,
                private store: Store<any>,
                private actions$: Actions) {
        this.vm.connectState('list',
            this.store.select(selectRepositoryList).pipe(map(this.parseListItems))
        );
        this.vm.connectEffect(this.vm.refreshListSideEffect$
            .pipe(tap(_ => this.store.dispatch(fetchRepositoryList({}))))
        );
        this.vm.connectState('isPending', this.actions$
            .pipe(
                ofType(repositoryListFetchError, repositoryListFetchSuccess, fetchRepositoryList),
                map(a => a.type === fetchRepositoryList.type)
            ));
    }


    parseListItems(l: RepositoryListItem[]): DemoBasicsItem[] {
        return l.map(({id, name}) => ({id, name}))
    }

}
