import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

const baseUrl: string = 'http://localhost:5000/CodeChallenge/api/';

@Injectable({providedIn: 'root'})
export class EmployeeDataService {
  constructor(private httpClient: HttpClient) {}

  getData(action: string) {
    const url: string = baseUrl + action;
    return this.httpClient.get(url);
  }

  postData(action: string, data: any) {
    const url: string = baseUrl + action;
    return this.httpClient.post(url, data);
  }

}
