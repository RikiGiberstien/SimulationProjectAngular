import { inject, Injectable } from '@angular/core';
import { CustomerModule } from '../models/customer/customer-module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomertypeModule } from '../models/customer/customertype-module';
import { DealsModule } from '../models/deal/deals-module';
import { Dealsillustrationmoudule } from '../models/deal/deals-illustration-moudule';
import { OrdersModule } from '../models/order/orders-moduls';
import { RecommendModule } from '../models/recommend/recommend-module';
import { MyPackages } from '../component/my-packages/my-packages';
import { ProjectModule } from '../models/project/project-module';
import { PicturesModule } from '../models/pictures/pictures-module';
import { VidoesModule } from '../models/vidoes/vidoes-module';

@Injectable({
  providedIn: 'root'
})
export class Service {

  http: HttpClient = inject(HttpClient)
  list: CustomerModule[] = []
  list1: DealsModule[] = []
  list2: Dealsillustrationmoudule[] = []
  list3: OrdersModule[] = []
  list4: RecommendModule[] = []
  list5:ProjectModule[]=[];
  list6:PicturesModule[]=[]
  list7:VidoesModule[]=[]
  list$: Observable<CustomerModule[]> = this.GetAllCustomers();
  list1$: Observable<DealsModule[]> = this.getAllDeals();
  list2$: Observable<Dealsillustrationmoudule[]> = this.GetAllillustrationDeals();
  list3$: Observable<OrdersModule[]> = this.GetAllOrders();
  list4$: Observable<RecommendModule[]> = this.GetAllRecommendations()
  list5$:Observable<ProjectModule[]>= this.GetAllProjects()
  list6$:Observable<PicturesModule[]>= this.GetAllPicturs()
  list7$:Observable<VidoesModule[]>= this.GetAllVidoes()
  curentcustomer: CustomerModule = new CustomerModule();
  curentorder:OrdersModule=new OrdersModule();
  currentPackage:DealsModule=new DealsModule();
  currentProject:ProjectModule=new ProjectModule();
  BASEURL: String = "https://localhost:7191/";
  private apiUrl = 'https://localhost:7191/Projects'; // כתובת API שלך

  public GetAllCustomers(): Observable<CustomerModule[]> {

    return this.http.get<CustomerModule[]>(this.BASEURL + "Customers/GetAllClient")
  }
   public GetAllPicturs(): Observable<PicturesModule[]> {

    return this.http.get<PicturesModule[]>(this.BASEURL + "Pictures/GetAllPictures")
  }
  // public GetAllProjects(): Observable<ProjectModule[]>{

  //   return this.http.get<ProjectModule[]>(this.BASEURL + "Projects/GetAllProjects")
  // }
    public GetAllProjects(): Observable<ProjectModule[]> {
    return this.http.get<ProjectModule[]>(`${this.apiUrl}/GetAllProjects`);
  }


  public updateCustomers(c: CustomerModule): Observable<CustomerModule[]> {

    return this.http.put<CustomerModule[]>(this.BASEURL + "Customers/updateClient/client", c)
  }
  public updatePackages(d: DealsModule): Observable<DealsModule[]> {

    return this.http.put<DealsModule[]>(this.BASEURL + "Deals/updateDeal/deal", d)
  }
  public updateOrders(d: OrdersModule): Observable<OrdersModule[]> {

    return this.http.put<OrdersModule[]>(this.BASEURL + "Order/UpdateOrder/order", d)
  }
  public GetByMail(mail: string): Observable<CustomerModule> {
    return this.http.get<CustomerModule>(this.BASEURL + "Customers/GetClientByMail/mail", { params: { mail: mail } })
  }
  
public deletePackage(deal: DealsModule): Observable<DealsModule> {
  // שימוש ב-request כדי לשלוח את האובייקט ב-body
  return this.http.request<DealsModule>('DELETE', `${this.BASEURL}Deals/DeleteDeal`, {
    body: deal
  });
}
 
  public Hasorder(custId: number) {
  return this.http.get<boolean>(
    this.BASEURL + "Reconnendation/search",
    { params: { custId: custId } }
  );
}
  public CreateCustomer(c: CustomerModule) {
    return this.http.post<boolean>(this.BASEURL + "Customers/CreateClient", c)

  }
 public CreateRecommandation(r: RecommendModule) {
    return this.http.post<boolean>(this.BASEURL + "Reconnendation/CreateRecommend/recommend",r)

  }
  public CreateOrder(o: OrdersModule) {
    return this.http.post<boolean>(this.BASEURL + "Order/CreateOrder/order", o)
  }
  public CreatePackage(d: DealsModule){
    return this.http.post<boolean>(this.BASEURL + "Deals/CreateDeal/deal",d)

  }
  // public CreateProject(data: any){
  //   return this.http.post<number>(this.BASEURL + "Projects/Createproject",data)
    
  // }
 
  public getTypesCustomers() {
    return this.http.get<CustomertypeModule[]>(this.BASEURL + "CustomerType/GetAllTypes/GetAllTypes")
  }
 

  // constructor(private http: HttpClient) {}
// uploadImage(file: File): Observable<{ url: string }> {
//     const formData = new FormData();
//     formData.append('file', file);
//     return this.http.post<{ url: string }>(`${this.apiUrl}/upload`, formData);
//   }
uploadImage(
  file: File,
  custId: number,
  packageId: number,
  finalDate: any
): Observable<any> {

  const formData = new FormData();

  formData.append('file', file);
  formData.append('custId', custId.toString());
  formData.append('packageId', packageId.toString());
  formData.append('finalDate', finalDate);

  return this.http.post(
    this.BASEURL + "Projects/UploadProject",
    formData
  );
}
  getProjectImages(projectId: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/project/${projectId}`);
  }
  
  // ----------------------------
  // ----------------------------
  getPicturesByProjectId(projectId: number) {
  return this.http.get<PicturesModule[]>(this.BASEURL + `Pictures/GetPictures/${projectId}`
  )
}
  public getAllDeals(): Observable<DealsModule[]> {
    return this.http.get<DealsModule[]>(this.BASEURL + "Deals/GetAllDeals")
  }
  public GetAllillustrationDeals(): Observable<Dealsillustrationmoudule[]> {
    return this.http.get<Dealsillustrationmoudule[]>(this.BASEURL + "Illustration/GetAllIllustration/GetAllIllustration")
  }
   public GetAllOrders(): Observable<OrdersModule[]> {
    return this.http.get<OrdersModule[]>(this.BASEURL + "Order/GetAllorders")
  }
   public GetAllVidoes(): Observable<VidoesModule[]> {
    return this.http.get<VidoesModule[]>(this.BASEURL + "Vidoes/GetAllvidoes")
  }
//   getCustomerByOrder(orderId: number) {
//   return this.http.get<any>(this.BASEURL + "Order/${orderId}/customer/GetCustomerByOrder");
// }
// getCustomerByOrder(orderId: number) {
//   return this.http.get<any>(`${this.BASEURL}Order/Customer/GetCustomerByOrder/${orderId}` );
// }
// getCustomerByOrder(orderId: number) {
//   return this.http.get<any>(
//     `${this.BASEURL}Order/GetCustomerByOrder/${orderId}/customer`
//   );
// }
public GetClientByOrder(custId: number): Observable<CustomerModule> {
    return this.http.get<CustomerModule>(this.BASEURL + "Order/GetClientByOrder/custId", { params: { custId: custId } })
  }

  // getAuthStatus(): Observable<AuthStatus> {
  //   return this.http.get<AuthStatus>('/api/client/is-authenticated');
  // }
  GetAllRecommendations(): Observable<RecommendModule[]> {
    return this.http.get<RecommendModule[]>(this.BASEURL + "Reconnendation/GetAllRecommendations/GetAllRecommendations");
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
  public refreshProjects() {
    this.GetAllProjects().subscribe(res => this.list5 = res)
    this.list5$ = this.GetAllProjects();
  }
  
  public refreshIlustrations() {
    this.GetAllillustrationDeals().subscribe(res => this.list2 = res)
    this.list2$ = this.GetAllillustrationDeals();
  }
   public refreshPictures() {
    this.GetAllPicturs().subscribe(res => this.list6 = res)
    this.list6$ = this.GetAllPicturs();
  }
public refreshVidoes(){
this.GetAllVidoes().subscribe(res=>this.list7=res)
this.list7$ = this.GetAllVidoes();
}




  // =========================
  // יצירת פרויקט חדש עם תמונה ראשית  
  // =========================
  uploadProject(file: File, custId: number, packageId: number, finalDate: any): Observable<any> {

  const formData = new FormData();

  formData.append('file', file);
  formData.append('custId', custId.toString());
  formData.append('packageId', packageId.toString());

  if (finalDate) {
    formData.append('finalDate', new Date(finalDate).toISOString());
  }

  return this.http.post(this.BASEURL + "Projects/UploadProject",formData);
}
//   uploadMainProjectImage(file: File,custId: number,packageId: number,finalDate: any):  Observable<any>
    
//   {

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('custId', custId.toString());
//     formData.append('packageId', packageId.toString());
//     formData.append('finalDate', finalDate);

//     return this.http.post(
// this.BASEURL + "Projects/upload",
//         formData
//     );
//   }

  // =========================
  // הרבה תמונות קטנות
  // =========================
  uploadProjectGallery(files: File[], projectId: number): Observable<any> {

    const formData = new FormData();

    files.forEach(file  => {
      formData.append('files', file );
    });

    formData.append('projectId', projectId.toString());

    return this.http.post(
      this.BASEURL + "Picture/upload-gallery",
      formData
    );
  }
}


export interface AuthStatus {
  isAuthenticated: boolean;
}
// ----------------








