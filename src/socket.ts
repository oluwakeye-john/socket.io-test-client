import io from "socket.io-client";

class SocketIO {
  private IO: any = null;
  private counter: number = 0;
  private useSocketioV2 = process.env.REACT_APP_USE_SOCKETIO_V2;

  init(url: string, onConnect: any, onEvent: any) {
    const useV2 = this.useSocketioV2 === "true";
    console.log("USE SOCKET_IO_CLIENT_V2", useV2);
    this.IO?.disconnect();
    this.IO = io(url);
    if (useV2) {
      const _io = require("socketio-v2");
      var socket = _io(url);
      var patch = require("socketio-wildcard")(_io.Manager);
      patch(socket);
      this.IO = socket;
    }

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

    if (!useV2) {
      this.IO.onAny((eventName: string, args: any) => {
        onEvent(eventName, args);
      });
    }

    if (useV2) {
      this.IO.on("*", ({ data }: { data: any }) => {
        onEvent(data[0], data[1]);
      });
    }
  }

  disconnect() {
    this.IO?.disconnect();
  }

  subscribe(eventName: string, callback: any) {
    this.IO.on(eventName, callback);
  }

  emit(eventName: string, eventData: any) {
    this.IO?.emit(eventName, eventData);
  }
}

const socketIO = new SocketIO();
export default socketIO;
