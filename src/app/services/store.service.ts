import { Injectable } from "@angular/core";
import { Generic } from '../models/generic';

@Injectable({
    providedIn: "root",
})
export class StoreService {

    roles: Generic[] = [];



    getRoles() {
        return this.roles;
    }

    setRoles(roles: Generic[]) {
        this.roles = roles;
    }
}