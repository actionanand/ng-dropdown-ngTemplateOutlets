import { ChangeDetectorRef, Component, EmbeddedViewRef, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output, 
  TemplateRef, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, fromEvent, takeUntil } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import Popper from 'popper.js';

@UntilDestroy()
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent implements OnInit, OnDestroy {
  @Input() model: any;
  @Input() labelKey = 'label';
  @Input() idKey = 'id';
  @Input() options: any[] = [];
  @Input() optionTpl!: TemplateRef<any>;
  @Output() selectChange = new EventEmitter();
  @Output() closed = new EventEmitter();

  visibleOptions = 4;
  searchControl = new FormControl();

  private view!: EmbeddedViewRef<any>;
  private popperRef!: Popper;
  private originalOptions: any[] = [];

  constructor(private vcr: ViewContainerRef, private zone: NgZone, private cdr: ChangeDetectorRef) { }

  get isOpen() {
    return !!this.popperRef;
  }

  ngOnInit(): void {
    this.originalOptions = [...this.options];
    if (this.model !== undefined) {
      this.model = this.options.find(currentOption => currentOption[this.idKey] === this.model);
    }

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        untilDestroyed(this)
      )
      .subscribe(term => this.search(term));
  }

  get label() {
    return this.model ? this.model[this.labelKey] : 'Select...';
  }

  open(dropdownTpl: TemplateRef<any>, origin: HTMLElement) {
    this.view = this.vcr.createEmbeddedView(dropdownTpl);
    const dropdown = this.view.rootNodes[0];

    document.body.appendChild(dropdown);
    dropdown.style.width = `${origin.offsetWidth}px`;

    this.zone.runOutsideAngular(() => {
      this.popperRef = new Popper(origin, dropdown, {
        removeOnDestroy: true
      });
    });

    this.handleClickOutside();
  }

  close() {
    this.closed.emit();
    this.popperRef.destroy();
    this.view.destroy();
    this.searchControl.patchValue('');
    // this.view = null;
    // this.popperRef = null;
  }

  select(option: any) {
    this.model = option;
    this.selectChange.emit(option[this.idKey]);
    // the handleClickOutside function will close the dropdown
  }

  isActive(option: any) {
    if (!this.model) {
      return false;
    }
    return option[this.idKey] === this.model[this.idKey];
  }

  search(value: string) {
    this.options = this.originalOptions.filter(option => option[this.labelKey].includes(value));
    requestAnimationFrame(() => (this.visibleOptions = this.options.length || 1));
  }

  private handleClickOutside() {
    fromEvent(document, 'click')
      .pipe(
        filter(({ target }) => {
          const origin = this.popperRef.reference as HTMLElement;
          return origin.contains(target as HTMLElement) === false;
        }),
        takeUntil(this.closed)
      )
      .subscribe(() => {
        this.close();
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {}

}
