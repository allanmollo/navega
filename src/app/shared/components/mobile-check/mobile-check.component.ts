import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from "@angular/core";
import { responsiveMediaService } from "../../services/responsive-media/responsive-media.service";
import { Subscription } from "rxjs";

@Component({
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export abstract class BaseMobileCheckComponent {
    public isMobile = false;
    private media: responsiveMediaService;
    private cdRef: ChangeDetectorRef;
    private resizeSubscription$: Subscription | undefined;

    constructor() {
        this.media = inject(responsiveMediaService);
        this.cdRef = inject(ChangeDetectorRef);
    }

    public initWindowResizeListener(): void {
        this.isMobile = this.media.isMobileView();
        this.resizeSubscription$ = this.media.onResize().subscribe(resize => {
            this.isMobile = resize.isMobileView;
            this.cdRef.markForCheck();
        })
    }

    public removeWindowResizeListener(): void {
        if (this.resizeSubscription$) this.resizeSubscription$.unsubscribe();
    }
}