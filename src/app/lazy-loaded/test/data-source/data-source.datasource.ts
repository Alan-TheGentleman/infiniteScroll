import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class ItemsDataSource extends DataSource<string | undefined> {
  // the items already loaded
  private itemsInMemory = Array.from<string>({ length: 0 });

  // an observable to get the changes on the items
  private itemChanges$: BehaviorSubject<string[]>;

  // called when we destroy the scroll to stop any subscriptions
  private destroy$ = new Subject();

  // 30 items per time
  private pageSize = 30;

  // the last loaded index
  private lastLoadedPage = 0;

  // the source information
  private source = [
    'Sydney',
    'Albury',
    'Armidale',
    'Bathurst',
    'Broken Hill',
    'Cessnock',
    'Coffs Harbour',
    'Dubbo',
    'Gosford',
    'Goulburn',
    'Grafton',
    'Griffith',
    'Lake Macquarie',
    'Lismore',
    'Maitland',
    'Newcastle',
    'Nowra',
    'Orange',
    'Port Macquarie',
    'Queanbeyan',
    'Tamworth',
    'Tweed Heads',
    'Wagga Wagga',
    'Wollongong',
    'Wyong',
  ];

  constructor() {
    super();
    this.itemChanges$ = new BehaviorSubject(this.itemsInMemory);
    this.getInformation();
  }

  /**
   * @desc it calls the connect method from the DataSource class
   * @param collectionViewer - CollectionViewer / Angular CDK class that provides a view and change detection for a collection of elements
   * @return Observable<(string | undefined)[] | ReadonlyArray<string | undefined>>
   */
  connect(
    collectionViewer: CollectionViewer
  ): Observable<(string | undefined)[] | ReadonlyArray<string | undefined>> {
    collectionViewer.viewChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((range) => {
        const currentPage = this.getPageIndex(range.end);
        if (currentPage > this.lastLoadedPage) {
          this.lastLoadedPage = currentPage;
          this.getInformation();
        }
      });

    return this.itemChanges$;
  }

  /**
   * @desc it calls the disconnect method from the DataSource class
   * @return void
   */
  disconnect(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  /**
   * @desc it gets information from the source property, adds it to the itemsInMemory and shares it with the itemChanges$ observable
   * @return void
   */
  private getInformation(): void {
    for (let i = 0; i < this.pageSize; ++i) {
      this.itemsInMemory = [
        ...this.itemsInMemory,
        this.source[Math.floor(Math.random() * this.source.length) + 1],
      ];
    }
    this.itemChanges$.next(this.itemsInMemory);
  }

  /**
   * @desc it returns the current index of the view
   * @return void
   */
  private getPageIndex(i: number): number {
    return Math.floor(i / this.pageSize);
  }
}
