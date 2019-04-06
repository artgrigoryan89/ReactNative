export const SHOW_WAITING_MODAL = 'SHOW_WAITING_MODAL';
export const HIDE_WAITING_MODAL = 'HIDE_WAITING_MODAL';

export function showWaitingModal() {
    return {
        type: SHOW_WAITING_MODAL
    };
}

export function hideWaitingModal() {
    return {
        type: HIDE_WAITING_MODAL
    };
}