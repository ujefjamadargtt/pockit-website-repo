import { Component } from '@angular/core';
import { ApiServiceService } from '../../Service/api-service.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerLogo: string='assets/img/PockIT_Logo.png';
  constructor(public apiService: ApiServiceService) { }
}
