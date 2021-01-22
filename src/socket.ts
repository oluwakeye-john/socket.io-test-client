import { io, Socket } from "socket.io-client";

class SocketIO {
  private IO: null | Socket = null;
  private counter: number = 0;

  init(url: string, onConnect: any, onEvent: any) {
    this.IO?.disconnect();
    this.IO = io(url);
    this.counter = 0;
    this.IO.on("connect", () => {
      onConnect(true);
    });
    this.IO.on("disconnect", () => {
      onConnect(false);
    });
    this.IO.on("connect_error", () => {
      onConnect(false);
      if (this.counter === 0) {
        alert("Cannot connect");
      }
      this.counter += 1;
    });
    this.IO.onAny((eventName, args) => {
      onEvent(eventName, args);
    });
  }

  disconnect() {
    this.IO?.disconnect();
  }

  emit(eventName: string, eventData: any) {
    this.IO?.emit(eventName, eventData);
  }
}

const socketIO = new SocketIO();
export default socketIO;
