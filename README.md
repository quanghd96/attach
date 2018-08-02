# attach
A library helps connect xterm with stompJS and sockJS Spring boot

##Install
npm install atv-attach

import { Terminal } from 'xterm';
import * as attach from 'atv-attach/attach';

this.term.attach(this.stompClient, token);