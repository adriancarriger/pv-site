/**
 * @module SharedModule
 */ /** */
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer,
  ViewChild } from '@angular/core';
/**
 * @whatItDoes Creates an image that covers the element.
 * @consumers {@link HomeModule}
 *
 * Features:
 * - Covers the entire element using `background-size: cover`
 * - Creates an `img` that can be right clicked and saved
 * - `img` can have `alt` text
 *
 * The `img` element is not visible to the user. Instead the user sees the `background-image`
 * optimized with the `cover` style.
 */
@Component({
  selector: 'app-image-cover',
  templateUrl: './image-cover.component.html',
  styleUrls: ['./image-cover.component.scss']
})
export class ImageCoverComponent implements AfterViewInit, OnChanges, OnInit {
  showImage = false;
  srcDist: string;
  srcsetDist = '';
  @ViewChild('image') private image: ElementRef;
  /**
   * Optional string to use for the `alt` attribute of the `img` element.
   */
  @Input() alt: string;
  /**
   * Image will fade into view when true.
   */
  fadeIn = false;
  /**
   * True after there is an error loading the `img` element.
   */
  imgError = false;
  /**
   * True after `img` element has loaded.
   */
  imgLoad = false;
  /**
   * Image url to use for the `img` element and host element's `background-image` style.
   */
  @Input() src: string;
  @Input() srcList: any;
  /**
   * Creates the {@link ImageCoverComponent}
   * @param renderer used to update the DOM
   * [Angular 2 - Renderer](https://angular.io/docs/ts/latest/api/core/index/Renderer-class.html)
   * @param element a reference to the host element
   */
  constructor(
    private renderer: Renderer,
    private element: ElementRef,
    private cd: ChangeDetectorRef) { }
  ngOnInit() {

  }
  /**
   * First call to {@link updateImage}.
   */
  ngAfterViewInit() {
    if (this.element.nativeElement.offsetParent) {
      this.initImage();
    } else {
      setTimeout(() => this.initImage(), 6000);
    }
  }
  /**
   * Updates the image (via {@link updateImage}) if the {@link src} Input changes.
   */
  ngOnChanges() {
    if (this.showImage || this.element.nativeElement.offsetParent) {
      this.updateImage();
    }
  }

  onLoad() {
    this.imgLoad = true;
    this.updateBackground();
  }
  private initImage() {
    this.showImage = true;
    setTimeout(() => this.fadeIn = true, 300);
    this.updateImage();
  }
  /**
   * Sets the host element's `background-image` style to the {@link src} Input
   *
   * this helped!: http://stackoverflow.com/a/22374423/5357459
   */
  private updateImage() {
    setTimeout(() => {
      if (this.srcList && this.srcList.image_small) {
        this.srcDist = this.srcList.image_small;
        this.createSrcset();
      } else if (this.src !== undefined && this.src !== null) {
        this.srcDist = this.src;
      }
      this.cd.markForCheck();
    });
  }

  private createSrcset() {
    this.srcsetDist = [
      {size: 'medium', width: 1000},
      {size: 'large', width: 2000},
      {size: 'x_large', width: 3000}
    ].reduce((p, c) => {
      const url = this.srcList[`image_${c.size}`];
      if (url) { p.push(`${url} ${c.width}w`); }
      return p;
    }, [])
    .join(', ');
  }
  private updateBackground() {
    const url = this.currentSrc();
    this.renderer.setElementStyle(
      this.element.nativeElement, 'backgroundImage', `url(${url})`);
  }

  private currentSrc() {
    const image = this.image.nativeElement;
    return image.currentSrc || image.currentSrc;
  }
}
