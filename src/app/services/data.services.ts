import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Params } from '@angular/router';


const environment: string = "http://localhost:8080/";


@Injectable({
    providedIn: "root",
})
export class DataService {


    constructor(
        private http: HttpClient,
    ) { }

    protected generateBasicHeaders(): HttpHeaders {
        return new HttpHeaders({
            "Content-Type": "application/json"
        });
    }

    
    getGenericoService(urlService: string) {
        return this.http.get(environment + urlService, {
            headers: this.generateBasicHeaders()
        });
    }

    getGenericoServiceParam(urlService: string, queries: Params) {
        let queryParams: Params = {};
        queryParams = this.setParameter(queries);
        return this.http.get(environment + urlService, {
            headers: this.generateBasicHeaders(),
            params: queryParams,
        });
    }

    private setParameter(routerParams: Params): HttpParams {
        let queryParams = new HttpParams();
        for (const key in routerParams) {
            if (routerParams.hasOwnProperty(key)) {
                queryParams = queryParams.set(key, routerParams[key]);
            }
        }
        return queryParams;
    }
}