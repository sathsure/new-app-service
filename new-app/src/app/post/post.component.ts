import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked
{
  interval: any;
  counter: number = 1;
  headVal: string = '';
  contVal: string = '';
  isValid: boolean = false;
  @Input() onChangeInput: string;
  // @ViewChild('headRefVal', { static: true }) viewChildRef: ElementRef;
  @ContentChild('firstPostRef', { static: true }) contentChildRef: ElementRef;

  constructor(private postService: PostService) {
    // console.log('Child Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Child ngOnChange');
    // console.log(changes);
  }

  ngOnInit() {
    // console.log('Child ngOnInit');
    // console.log(this.viewChildRef);
    // console.log(this.contentChildRef);
    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000);
  }

  ngDoCheck(): void {
    // console.log('Child ngDoCheck');
  }

  ngAfterContentInit(): void {
    // console.log(this.contentChildRef);
    // console.log('Child ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // console.log('Child ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // console.log(this.viewChildRef);
    // console.log('Child ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // console.log('Child ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // clearInterval(this.interval);
    // console.log('Child ngOnDestroy');
  }

  // onClickSubmit(contRefVal: HTMLInputElement): void {
  //   this.postService.addPost({
  //     heading: this.viewChildRef.nativeElement.value,
  //     content: contRefVal.value,
  //     newDate: new Date(),
  //   });
  // }

  onClickSubmit(): void {
    if(this.headVal && this.contVal){
      this.postService.addPost({
        heading: this.headVal,
        content: this.contVal,
        newDate: new Date(),
      });
      this.headVal = '';
      this.contVal = '';
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }
}
