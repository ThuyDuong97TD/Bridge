import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ContactAction } from '../action/contact.action';
import { Injectable } from '@angular/core';
import { switchMap, map, catchError, of } from 'rxjs';
import { ContactsService } from '../../../contact.service';

@Injectable()
export class ContactEffect {
  constructor(
    private action$: Actions,
    private ContactService: ContactsService
  ) {}

  addContact$ = createEffect(() =>
    this.action$.pipe(
      ofType(ContactAction.addContact),
      switchMap((contact: any) =>
        this.ContactService.addContact(contact.contact)
      ),
      map((contact: any) => {
        return ContactAction.addContactSuccess({ contact: contact });
      }),
      catchError((error) => {
        return of(ContactAction.addContactFailure({ error: error }));
      })
    )
  );

  deleteContact$ = createEffect(() =>
    this.action$.pipe(
      ofType(ContactAction.deleteContact),
      switchMap((id: any) => this.ContactService.deleteContact(id.id)),
      map(() => {
        return ContactAction.deleteContactSuccess();
      }),
      catchError((error) => {
        return of(ContactAction.deleteContactFailure({ error: error }));
      })
    )
  );
  // deleteLead$ = createEffect(() =>);
}
