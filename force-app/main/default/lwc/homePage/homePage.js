import { LightningElement } from 'lwc';
import TitanFitLogo from '@salesforce/resourceUrl/TitanFitLogo';
import Banner1 from '@salesforce/resourceUrl/Banner1';
import Banner2 from '@salesforce/resourceUrl/Banner2';
import Banner3 from '@salesforce/resourceUrl/Banner3';

export default class HomePage extends LightningElement {
    mainLogo = TitanFitLogo;
    isSigned = false;
    FirstBanner=Banner1;
    SecondBanner=Banner2;
    ThirdBanner=Banner3;
    images = [
        { id: 'slide-1', src: this.FirstBanner, index: 0 },
        { id: 'slide-2', src: this.SecondBanner, index: 1 },
        { id: 'slide-3', src: this.ThirdBanner, index: 2 }
    ];

    handleNavClick(event) {
        const slideIndex = event.target.dataset.slide;
        const slider = this.template.querySelector('[data-id="slider"]');
        const slideWidth = slider.clientWidth;

        slider.scrollTo({
            left: slideWidth * slideIndex,
            behavior: 'smooth'
        });
    }
    
}

