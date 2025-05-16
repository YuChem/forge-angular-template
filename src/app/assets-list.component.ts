import { Component, OnInit } from '@angular/core';
import { AssetsService } from './assets.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assets-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Asset List</h2>
    <ul>
      <li *ngFor="let asset of assets">
        {{ asset.title }} ({{ asset.asset_type }})
      </li>
    </ul>
  `,
})
export class AssetsListComponent implements OnInit {
  assets: any[] = [];

  constructor(private assetsService: AssetsService) {}

  ngOnInit() {
    this.assetsService.getAssets().subscribe((response) => {
      this.assets = response.data;
    });
  }
}