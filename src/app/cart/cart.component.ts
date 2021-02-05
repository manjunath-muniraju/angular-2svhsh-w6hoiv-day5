import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  
  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  routeTo400(){
    this.router.navigateByUrl('page-not-found');
  }

  routeTo500(){
    this.router.navigateByUrl('internal-server-error');
  }

  routeToGenericError(){
    this.router.navigateByUrl('error');
  }

}