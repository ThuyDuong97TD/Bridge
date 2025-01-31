import { Actions, createEffect, ofType } from "@ngrx/effects";

import { LeadAction } from "../action/lead.action";
import { Injectable } from "@angular/core";
import { LeadsService } from "../../leads.service";
import { switchMap, map, catchError, of } from "rxjs";

@Injectable()
export class LeadEffect {
    constructor(private action$: Actions, private leadService: LeadsService){}


    addLead$ = createEffect(() => 
        this.action$.pipe(
            ofType(LeadAction.addLead),
            switchMap((lead: any) => this.leadService.addLead(lead.lead)),
            map((lead:any ) => {
                return LeadAction.addLeadSuccess({lead: lead});
            }),
            catchError((error) => {
                return of(LeadAction.addLeadFailure({ error: error }));
            })
        ));

    deleteLead$ = createEffect(() =>
        this.action$.pipe(
            ofType(LeadAction.deleteLead),
            switchMap((id: any) => this.leadService.deleteLead(id.id)),
            map(( ) => {
                return LeadAction.deleteLeadSuccess();
            }),
            catchError((error) => {
                return of(LeadAction.deleteLeadFailure({ error: error }));
            })
        )
    )

    updateLead$ = createEffect(() => 
        this.action$.pipe(
            ofType(LeadAction.updateLead),
            switchMap((lead: any) => this.leadService.updateLead(lead.lead)),
            map((lead:any ) => {
                return LeadAction.updateLeadSuccess();
            }),
            catchError((error) => {
                return of(LeadAction.updateLeadFailure({ error: error }));
            })
        ));
    

}