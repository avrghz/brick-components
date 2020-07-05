import { EventEmitter, Event } from '../../stencil-public-runtime';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import { Variants, Shades } from '../../shared/types';
/**
 * @slot - Use this to render the content.
 */
export declare class Alert {
    /** Type of the alert */
    variant: Variants;
    /** Light or dark */
    shade: Shades;
    /** Make alert dismissible */
    dismissible: boolean;
    /** Event fired when close button is clicked */
    bkClosed: EventEmitter<null>;
    onCloseHandler: (e: Event) => void;
    render(): any;
}
