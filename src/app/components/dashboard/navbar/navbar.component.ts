import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interface/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [];


  constructor(private _menuService: MenuService) { }

  ngOnInit() {
    this.carregarMenu();
  }

  carregarMenu()
  {
    this._menuService.getMenu().subscribe(data => {
      //console.log(data);
      this.menu = data; 
    });
  }

}
