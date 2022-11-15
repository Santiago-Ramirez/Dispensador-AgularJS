import { animate, state, style, transition, trigger } from '@angular/animations';

export const entraditaPrestasAnimation = trigger('entraditaPrestasAnimation', [
    state('open', style({
        opacity: 1
    })),
    state('close', style({
        height: '0px',
        opacity: 0
    })),
    transition('close => open', [
        animate('0.7s')
    ]),
    transition('open => close', [
        animate('0.7s')
    ]),
]);

export const mostrarPrestasAnimation = trigger('mostrarPrestasAnimation', [
    state('void', style({
        opacity: 0
    })),
    transition(':enter', [
        animate('2.5s', style({ opacity: 1 }))
    ])
]);

export const entradaPrestasAnimation = trigger('entradaPrestasAnimation', [
    state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
    })),
    transition(':enter', [
        animate('1s', style({ transform: 'translateX(0)', opacity: 1 }))
    ])
]);

export const entrada2PrestasAnimation = trigger('entrada2PrestasAnimation', [
    state('void', style({
        transform: 'translateX(100%)',
        opacity: 0
    })),
    transition(':enter', [
        animate('1s', style({ transform: 'translateX(0)', opacity: 1 }))
    ])
]);

export const desvanecidoPrestasAnimation = trigger("desvanecidoPrestasAnimation", [
    transition(":enter", [
        style({
            opacity: 0,
            transform: "translateY(20px)"
        }),
        animate(
            ".3s",
            style({
                opacity: 1,
                transform: "translateY(0)"
            })
        )
    ])
]);