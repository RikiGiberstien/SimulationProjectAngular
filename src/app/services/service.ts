import { inject, Injectable } from '@angular/core';
import { CustomerModule } from '../models/customer/customer-module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomertypeModule } from '../models/customer/customertype-module';
import { DealsModule } from '../models/deal/deals-module';
import { dealsillustrationmoudule } from '../models/deal/deals-illustration-moudule';
import { OrdersModule } from '../models/order/orders-moduls';
@Injectable({
  providedIn: 'root'
})
export class Service {
  http: HttpClient = inject(HttpClient)
  list: CustomerModule[] = []
  list1: DealsModule[] = []
  list2: dealsillustrationmoudule[] = []
  list3: OrdersModule[] = []
  list$: Observable<CustomerModule[]> = this.GetAllCustomers();
  list1$: Observable<DealsModule[]> = this.getAllDeals();
  list2$: Observable<dealsillustrationmoudule[]> = this.getAllillustrationDeals()
  list3$:Observable<OrdersModule[]> = this.getAllOrders()
  curentcustomer: CustomerModule = new CustomerModule();
  BASEURL: String = "https://localhost:7191/";
  projects = [{
    title: 'הדמיית דירה יוקרתית',
    description: 'הדמיה תלת-ממדית לדירת יוקרה בתל אביב.',
    image: 'public/pictures/1.jpg'
  },
  {
    title: 'עיצוב משרד מודרני',
    description: 'הדמיה למשרד בעיצוב מודרני ונקי.',
    image: 'pictures/2.jpg'
  },
  {
    title: 'וילה כפרית',
    description: 'הדמיה חיצונית ופנימית לוילה בסגנון כפרי.',
    image: 'pictures/3.jpg',
    link: 'https://your-link.com/project3'
  }

  ];


  public GetAllCustomers(): Observable<CustomerModule[]> {

    return this.http.get<CustomerModule[]>(this.BASEURL + "Customers/GetAll")
  }
  public updateCustomers(c: CustomerModule): Observable<CustomerModule[]> {

    return this.http.put<CustomerModule[]>(this.BASEURL + "Customers/update/client", c)
  }
  public GetByMail(mail: string): Observable<CustomerModule> {
    return this.http.get<CustomerModule>(this.BASEURL + "Customers/GetClientByMail/Mail", { params: { mail: mail } })
  }
  public CreateCustomer(c: CustomerModule) {
    return this.http.post<boolean>(this.BASEURL + "Customers/create/client", c)

  }
  public getTypesCustomers() {
    return this.http.get<CustomertypeModule[]>(this.BASEURL + "CustomerType/GetAllTypes/GetAllTypes")
  }
  public getallproject() {
    return this.projects;
  }
  public getAllDeals(): Observable<DealsModule[]> {
    return this.http.get<DealsModule[]>(this.BASEURL + "Deals/GetAllDeals/GetAllDeals")
  }
  public getAllillustrationDeals(): Observable<dealsillustrationmoudule[]> {
    return this.http.get<dealsillustrationmoudule[]>(this.BASEURL + "Illustration/GetAllIllustration/GetAllIllustration")
  }
  public getAllOrders(): Observable<OrdersModule[]> {
    return this.http.get<OrdersModule[]>(this.BASEURL + "Orders/GetAllorders/GetAllorders")
  }
  public refresh() {
    this.GetAllCustomers().subscribe(res => this.list = res)
    this.list$ = this.GetAllCustomers();
    this.getAllDeals().subscribe(res => this.list1 = res)
    this.list1$ = this.getAllDeals();
    this.getAllillustrationDeals().subscribe(res => this.list2 = res)
    this.list2$ = this.getAllillustrationDeals();
     this.getAllOrders().subscribe(res => this.list3 = res)
    this.list3$ = this.getAllOrders();
  }
}