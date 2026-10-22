import { Component } from '@angular/core';
import { Footer1 } from '../footer-1/footer-1';
import { Footer2 } from '../footer-2/footer-2';
import { Footer3 } from '../footer-3/footer-3';

@Component({
  imports: [Footer1,Footer2,Footer3],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {}
