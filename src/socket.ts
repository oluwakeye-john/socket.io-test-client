import { io, Socket } from "socket.io-client";

class SocketIO {
  private IO: null | Socket = null;

  init(url: string, onConnect: any, onEvent: any) {
    this.IO = io(url);
    this.IO.on("connect", () => {
      onConnect();
    });
    this.IO.onAny((eventName, args) => {
      console.log({ eventName, args: args });
    });
  }
}

const socketIO = new SocketIO();
export default socketIO;
