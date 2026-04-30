import { inject, Injectable } from '@angular/core';
import { CustomerModule } from '../models/customer/customer-module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomertypeModule } from '../models/customer/customertype-module';
import { DealsModule } from '../models/deal/deals-module';
import { dealsillustrationmoudule } from '../models/deal/deals-illustration-moudule';
import { OrdersModule } from '../models/order/orders-moduls';
import { RecommendModule } from '../models/recommend/recommend-module';
import { MyPackages } from '../component/my-packages/my-packages';
@Injectable({
  providedIn: 'root'
})
export class Service {

  http: HttpClient = inject(HttpClient)
  list: CustomerModule[] = []
  list1: DealsModule[] = []
  list2: dealsillustrationmoudule[] = []
  list3: OrdersModule[] = []
  list4: RecommendModule[] = []
  list$: Observable<CustomerModule[]> = this.GetAllCustomers();
  list1$: Observable<DealsModule[]> = this.getAllDeals();
  list2$: Observable<dealsillustrationmoudule[]> = this.GetAllillustrationDeals();
  list3$: Observable<OrdersModule[]> = this.GetAllOrders();
  list4$: Observable<RecommendModule[]> = this.GetAllRecommendations()
  curentcustomer: CustomerModule = new CustomerModule();
  curentorder:OrdersModule=new OrdersModule();
  currentPackage:DealsModule=new DealsModule();
  BASEURL: String = "https://localhost:7191/";
 


  public GetAllCustomers(): Observable<CustomerModule[]> {

    return this.http.get<CustomerModule[]>(this.BASEURL + "Customers/GetAll")
  }
  public updateCustomers(c: CustomerModule): Observable<CustomerModule[]> {

    return this.http.put<CustomerModule[]>(this.BASEURL + "Customers/update/client", c)
  }
  public updatePackages(d: DealsModule): Observable<DealsModule[]> {

    return this.http.put<DealsModule[]>(this.BASEURL + "Deals/update/deal", d)
  }
  public updateOrders(d: OrdersModule): Observable<OrdersModule[]> {

    return this.http.put<OrdersModule[]>(this.BASEURL + "Order/UpdateOrder/update/order", d)
  }
  //  public updatestars(id: Number,stars:Number) {
  //   return this.http.patch(this.BASEURL + "Order/update/stars", {params:{id:id}, stars})
  // }`
  public GetByMail(mail: string): Observable<CustomerModule> {
    return this.http.get<CustomerModule>(this.BASEURL + "Customers/GetClientByMail/mail", { params: { mail: mail } })
  }
  public CreateCustomer(c: CustomerModule) {
    return this.http.post<boolean>(this.BASEURL + "Customers/CreateClient", c)

  }

  public CreateOrder(o: OrdersModule) {
    return this.http.post<boolean>(this.BASEURL + "Order/CreateOrder/CreateOrder", o)
  }
  public CreatePackage(d: DealsModule){
    return this.http.post<boolean>(this.BASEURL + "Deals/dealcreate/deal",d)
  }
  public getTypesCustomers() {
    return this.http.get<CustomertypeModule[]>(this.BASEURL + "CustomerType/GetAllTypes/GetAllTypes")
  }
  // public getallproject() {
  //   return this.projects;
  // }

  // ----------------------------
  // --------------------------------
  public getAllDeals(): Observable<DealsModule[]> {
    return this.http.get<DealsModule[]>(this.BASEURL + "Deals/GetAllDeals/GetAllDeals")
  }
  public GetAllillustrationDeals(): Observable<dealsillustrationmoudule[]> {
    return this.http.get<dealsillustrationmoudule[]>(this.BASEURL + "Illustration/GetAllIllustration/GetAllIllustration")
  }
  public GetAllOrders(): Observable<OrdersModule[]> {
    return this.http.get<OrdersModule[]>(this.BASEURL + "Order/GetAllorders/GetAllorders")
  }
  getCustomerByOrder(orderId: number) {
  return this.http.get<any>(this.BASEURL + "Order/${orderId}/customer/GetCustomerByOrder");
}
  // getAuthStatus(): Observable<AuthStatus> {
  //   return this.http.get<AuthStatus>('/api/client/is-authenticated');
  // }
  GetAllRecommendations(): Observable<RecommendModule[]> {
    return this.http.get<RecommendModule[]>(this.BASEURL + "Reconnendation/GetAllRecommendations");
  }
  public refreshCustomers() {
    this.GetAllCustomers().subscribe(res => this.list = res)
    this.list$ = this.GetAllCustomers();
  }
  public refreshDeals() {
    this.getAllDeals().subscribe(res => this.list1 = res)
    this.list1$ = this.getAllDeals();
  }
  public refreshOrders() {
    this.GetAllOrders().subscribe(res => this.list3 = res)
    this.list3$ = this.GetAllOrders();
  }
  public refreshRecommendations() {
    this.GetAllRecommendations().subscribe(res => this.list4 = res)
    this.list4$ = this.GetAllRecommendations();
  }
  
  public refreshIlustrations() {
    this.GetAllillustrationDeals().subscribe(res => this.list2 = res)
    this.list2$ = this.GetAllillustrationDeals();
  }


}

export interface AuthStatus {
  isAuthenticated: boolean;
}
// ----------------






