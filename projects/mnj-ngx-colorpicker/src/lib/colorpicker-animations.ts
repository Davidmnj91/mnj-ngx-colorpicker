import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

/**
 * Animations used by the colorpicker.
 * @docs-private
 */
export const mnjColorpickerAnimations: {
  readonly transformPanel: AnimationTriggerMetadata;
  readonly fadeInColorPanel: AnimationTriggerMetadata;
} = {
  /** Transforms the height of the colorpicker's panel. */
  transformPanel: trigger('transformPanel', [
    state(
      'void',
      style({
        opacity: 0,
        transform: 'scale(1, 0.8)',
      })
    ),
    transition(
      'void => enter',
      animate(
        '120ms cubic-bezier(0, 0, 0.2, 1)',
        style({
          opacity: 1,
          transform: 'scale(1, 1)',
        })
      )
    ),
    transition('* => void', animate('100ms linear', style({ opacity: 0 }))),
  ]),

  /** Fades in the content of the panel. */
  fadeInColorPanel: trigger('fadeInColorPanel', [
    state('void', style({ opacity: 0 })),
    state('enter', style({ opacity: 1 })),

    // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
    // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
    transition('void => *', animate('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')),
  ]),
};
