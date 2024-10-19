import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { debounceTime, fromEvent, map, Observable } from "rxjs";
import { Resize } from './resize.model';

@Injectable({
    providedIn: 'root'
})
export class responsiveMediaService {
    private readonly windowRef: Window;

    constructor(
        @Inject(DOCUMENT) private docRef: Document
    ) {
        this.windowRef = this.docRef.defaultView as Window;
    }

    public onResize(): Observable<Resize> {
        return fromEvent(this.windowRef, 'resize').pipe(
            debounceTime(100),
            map(event => this.deviceBreakpointView(event))
        );
    }

    private deviceBreakpointView(event: any): Resize {
        const isScreenMobile = this.isMobileView();

        return {
            isMobileView: isScreenMobile,
            event
        };
    }

    private readonly mobileMediaQuery = '(max-width: 1023px)';

    public isMobileView(): boolean {
        return this.windowRef.matchMedia(this.mobileMediaQuery).matches;
    }

    public getMobileMediaQuery(): string {
        return this.windowRef.matchMedia(this.mobileMediaQuery).media;
    }

    public getCurrentScreenSize(): number {
        return this.windowRef.innerWidth;
    }
}