import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MnjColorPanel, MnjColorPanelHeader } from './color-panel';
import { MnjColorpicker, MnjColorpickerContent, MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from './colorpicker';
import { MnjColorpickerInput } from './colorpicker-input';
import { MnjColorpickerIntl } from './colorpicker-intl';
import { MnjColorpickerToggle, MnjColorpickerToggleIcon } from './colorpicker-toggle';
import { MnjAlphaSelector, MnjGridSelector, MnjHueSelector, MnjInputSelector, MnjPipetteSelector, MnjPreviewSwatch, MnjSaturationSelector, } from './selectors';
import { MnjArmoniesPickerView, MnjChromePickerView, MnjPalettePickerView, MnjScanPickerView } from './views';
import * as i0 from "@angular/core";
export class MnjColorpickerModule {
}
MnjColorpickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: MnjColorpickerModule });
MnjColorpickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MnjColorpickerModule_Factory(t) { return new (t || MnjColorpickerModule)(); }, providers: [MnjColorpickerIntl, MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[CommonModule, MatButtonModule, MatIconModule, PortalModule, A11yModule, OverlayModule, MatDialogModule], CdkScrollableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MnjColorpickerModule, { declarations: [MnjColorpickerToggle,
        MnjColorpickerToggleIcon,
        MnjColorpicker,
        MnjColorpickerContent,
        MnjColorpickerInput,
        MnjColorPanel,
        MnjColorPanelHeader,
        MnjAlphaSelector,
        MnjHueSelector,
        MnjSaturationSelector,
        MnjInputSelector,
        MnjGridSelector,
        MnjPipetteSelector,
        MnjPreviewSwatch,
        MnjChromePickerView,
        MnjPalettePickerView,
        MnjArmoniesPickerView,
        MnjScanPickerView], imports: [CommonModule, MatButtonModule, MatIconModule, PortalModule, A11yModule, OverlayModule, MatDialogModule], exports: [CdkScrollableModule,
        MnjColorpickerToggle,
        MnjColorpickerToggleIcon,
        MnjColorpicker,
        MnjColorpickerContent,
        MnjColorpickerInput,
        MnjColorPanel,
        MnjColorPanelHeader,
        MnjAlphaSelector,
        MnjHueSelector,
        MnjSaturationSelector,
        MnjInputSelector,
        MnjGridSelector,
        MnjPipetteSelector,
        MnjPreviewSwatch,
        MnjChromePickerView,
        MnjPalettePickerView,
        MnjArmoniesPickerView,
        MnjScanPickerView] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MnjColorpickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, MatButtonModule, MatIconModule, PortalModule, A11yModule, OverlayModule, MatDialogModule],
                declarations: [
                    MnjColorpickerToggle,
                    MnjColorpickerToggleIcon,
                    MnjColorpicker,
                    MnjColorpickerContent,
                    MnjColorpickerInput,
                    MnjColorPanel,
                    MnjColorPanelHeader,
                    MnjAlphaSelector,
                    MnjHueSelector,
                    MnjSaturationSelector,
                    MnjInputSelector,
                    MnjGridSelector,
                    MnjPipetteSelector,
                    MnjPreviewSwatch,
                    MnjChromePickerView,
                    MnjPalettePickerView,
                    MnjArmoniesPickerView,
                    MnjScanPickerView,
                ],
                providers: [MnjColorpickerIntl, MNJ_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
                exports: [
                    CdkScrollableModule,
                    MnjColorpickerToggle,
                    MnjColorpickerToggleIcon,
                    MnjColorpicker,
                    MnjColorpickerContent,
                    MnjColorpickerInput,
                    MnjColorPanel,
                    MnjColorPanelHeader,
                    MnjAlphaSelector,
                    MnjHueSelector,
                    MnjSaturationSelector,
                    MnjInputSelector,
                    MnjGridSelector,
                    MnjPipetteSelector,
                    MnjPreviewSwatch,
                    MnjChromePickerView,
                    MnjPalettePickerView,
                    MnjArmoniesPickerView,
                    MnjScanPickerView,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbW5qLW5neC1jb2xvcnBpY2tlci9zcmMvbGliL2NvbG9ycGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQUUsZ0RBQWdELEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEYsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLHFCQUFxQixHQUN0QixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBK0M5RyxNQUFNLE9BQU8sb0JBQW9COzt3REFBcEIsb0JBQW9CO3VIQUFwQixvQkFBb0IsbUJBdkJwQixDQUFDLGtCQUFrQixFQUFFLGdEQUFnRCxDQUFDLFlBckJ4RSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQyxFQXVCL0csbUJBQW1CO3dGQXFCVixvQkFBb0IsbUJBMUM3QixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLGlCQUFpQixhQW5CVCxZQUFZLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxlQUFlLGFBdUI5RyxtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixpQkFBaUI7a0RBR1Isb0JBQW9CO2NBN0NoQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDO2dCQUNqSCxZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQix3QkFBd0I7b0JBQ3hCLGNBQWM7b0JBQ2QscUJBQXFCO29CQUNyQixtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QscUJBQXFCO29CQUNyQixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsZ0RBQWdELENBQUM7Z0JBQ2pGLE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsd0JBQXdCO29CQUN4QixjQUFjO29CQUNkLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixjQUFjO29CQUNkLHFCQUFxQjtvQkFDckIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIscUJBQXFCO29CQUNyQixpQkFBaUI7aUJBQ2xCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgQ2RrU2Nyb2xsYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1uakNvbG9yUGFuZWwsIE1uakNvbG9yUGFuZWxIZWFkZXIgfSBmcm9tICcuL2NvbG9yLXBhbmVsJztcclxuaW1wb3J0IHsgTW5qQ29sb3JwaWNrZXIsIE1uakNvbG9ycGlja2VyQ29udGVudCwgTU5KX0NPTE9SUElDS0VSX1NDUk9MTF9TVFJBVEVHWV9GQUNUT1JZX1BST1ZJREVSIH0gZnJvbSAnLi9jb2xvcnBpY2tlcic7XHJcbmltcG9ydCB7IE1uakNvbG9ycGlja2VySW5wdXQgfSBmcm9tICcuL2NvbG9ycGlja2VyLWlucHV0JztcclxuaW1wb3J0IHsgTW5qQ29sb3JwaWNrZXJJbnRsIH0gZnJvbSAnLi9jb2xvcnBpY2tlci1pbnRsJztcclxuaW1wb3J0IHsgTW5qQ29sb3JwaWNrZXJUb2dnbGUsIE1uakNvbG9ycGlja2VyVG9nZ2xlSWNvbiB9IGZyb20gJy4vY29sb3JwaWNrZXItdG9nZ2xlJztcclxuaW1wb3J0IHtcclxuICBNbmpBbHBoYVNlbGVjdG9yLFxyXG4gIE1uakdyaWRTZWxlY3RvcixcclxuICBNbmpIdWVTZWxlY3RvcixcclxuICBNbmpJbnB1dFNlbGVjdG9yLFxyXG4gIE1ualBpcGV0dGVTZWxlY3RvcixcclxuICBNbmpQcmV2aWV3U3dhdGNoLFxyXG4gIE1ualNhdHVyYXRpb25TZWxlY3RvcixcclxufSBmcm9tICcuL3NlbGVjdG9ycyc7XHJcbmltcG9ydCB7IE1uakFybW9uaWVzUGlja2VyVmlldywgTW5qQ2hyb21lUGlja2VyVmlldywgTW5qUGFsZXR0ZVBpY2tlclZpZXcsIE1ualNjYW5QaWNrZXJWaWV3IH0gZnJvbSAnLi92aWV3cyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgUG9ydGFsTW9kdWxlLCBBMTF5TW9kdWxlLCBPdmVybGF5TW9kdWxlLCBNYXREaWFsb2dNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTW5qQ29sb3JwaWNrZXJUb2dnbGUsXHJcbiAgICBNbmpDb2xvcnBpY2tlclRvZ2dsZUljb24sXHJcbiAgICBNbmpDb2xvcnBpY2tlcixcclxuICAgIE1uakNvbG9ycGlja2VyQ29udGVudCxcclxuICAgIE1uakNvbG9ycGlja2VySW5wdXQsXHJcbiAgICBNbmpDb2xvclBhbmVsLFxyXG4gICAgTW5qQ29sb3JQYW5lbEhlYWRlcixcclxuICAgIE1uakFscGhhU2VsZWN0b3IsXHJcbiAgICBNbmpIdWVTZWxlY3RvcixcclxuICAgIE1ualNhdHVyYXRpb25TZWxlY3RvcixcclxuICAgIE1uaklucHV0U2VsZWN0b3IsXHJcbiAgICBNbmpHcmlkU2VsZWN0b3IsXHJcbiAgICBNbmpQaXBldHRlU2VsZWN0b3IsXHJcbiAgICBNbmpQcmV2aWV3U3dhdGNoLFxyXG4gICAgTW5qQ2hyb21lUGlja2VyVmlldyxcclxuICAgIE1ualBhbGV0dGVQaWNrZXJWaWV3LFxyXG4gICAgTW5qQXJtb25pZXNQaWNrZXJWaWV3LFxyXG4gICAgTW5qU2NhblBpY2tlclZpZXcsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtNbmpDb2xvcnBpY2tlckludGwsIE1OSl9DT0xPUlBJQ0tFUl9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWV9QUk9WSURFUl0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ2RrU2Nyb2xsYWJsZU1vZHVsZSxcclxuICAgIE1uakNvbG9ycGlja2VyVG9nZ2xlLFxyXG4gICAgTW5qQ29sb3JwaWNrZXJUb2dnbGVJY29uLFxyXG4gICAgTW5qQ29sb3JwaWNrZXIsXHJcbiAgICBNbmpDb2xvcnBpY2tlckNvbnRlbnQsXHJcbiAgICBNbmpDb2xvcnBpY2tlcklucHV0LFxyXG4gICAgTW5qQ29sb3JQYW5lbCxcclxuICAgIE1uakNvbG9yUGFuZWxIZWFkZXIsXHJcbiAgICBNbmpBbHBoYVNlbGVjdG9yLFxyXG4gICAgTW5qSHVlU2VsZWN0b3IsXHJcbiAgICBNbmpTYXR1cmF0aW9uU2VsZWN0b3IsXHJcbiAgICBNbmpJbnB1dFNlbGVjdG9yLFxyXG4gICAgTW5qR3JpZFNlbGVjdG9yLFxyXG4gICAgTW5qUGlwZXR0ZVNlbGVjdG9yLFxyXG4gICAgTW5qUHJldmlld1N3YXRjaCxcclxuICAgIE1uakNocm9tZVBpY2tlclZpZXcsXHJcbiAgICBNbmpQYWxldHRlUGlja2VyVmlldyxcclxuICAgIE1uakFybW9uaWVzUGlja2VyVmlldyxcclxuICAgIE1ualNjYW5QaWNrZXJWaWV3LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNbmpDb2xvcnBpY2tlck1vZHVsZSB7fVxyXG4iXX0=