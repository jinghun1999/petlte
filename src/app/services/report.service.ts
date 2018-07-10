import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Result} from '../models/result';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class ReportService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getGroupMonth(): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getGroupMonthTotalRevenue');
  }

  getBranchEnt(): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/report/getBranchEnterprise');
  }

  getMembers(): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getGuest');
  }
}
