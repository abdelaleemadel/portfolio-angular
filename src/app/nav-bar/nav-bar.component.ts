import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

}

window.addEventListener('scroll',function(){
  const offset = window.scrollY;
  const navBar =   this.document.querySelector('nav');

 if(this.document.querySelector('button[aria-expanded="false"]'))
  {console.log('notexpanded');

    if(offset > 20){
    navBar!.style.height = '70px';
  } else {
    navBar!.style.height = '100px';
  }}

})
window.addEventListener('click', function(){
  const btn = document.querySelector('.navbar-toggler');
  const navBar =   this.document.querySelector('nav');

  if(btn!.getAttribute('aria-expanded') == 'true'){
    console.log('expanded');
    navBar!.style.height = 'fit-content';
      }
})



