import { Terminal } from 'xterm';
import { Client } from '@stomp/stompjs';
export declare function attach(term: Terminal, socket: Client, token:string, bidirectional: boolean, buffered: boolean): void;
export declare function detach(term: Terminal, socket: Client): void;
export declare function apply(terminalConstructor: typeof Terminal): void;
