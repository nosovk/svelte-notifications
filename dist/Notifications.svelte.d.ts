/** @typedef {typeof __propDef.props}  NotificationsProps */
/** @typedef {typeof __propDef.events}  NotificationsEvents */
/** @typedef {typeof __propDef.slots}  NotificationsSlots */
export default class Notifications extends SvelteComponentTyped<{
    themes?: {
        danger: string;
        success: string;
        warning: string;
        info: string;
        default: string;
    };
    timeout?: number;
    sessionKey?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NotificationsProps = typeof __propDef.props;
export type NotificationsEvents = typeof __propDef.events;
export type NotificationsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        themes?: {
            danger: string;
            success: string;
            warning: string;
            info: string;
            default: string;
        };
        timeout?: number;
        sessionKey?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
