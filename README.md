# Amiga Debug App

**Note:** This app is built for the old stack.

## Purpose

The Amiga Debug App allows users to report issues directly from the Amiga robot. It provides a frontend interface for submitting issues and a backend gRPC server to handle incoming reports. This app is built on the [Amiga App Template](https://github.com/farm-ng/amiga-app-template) to streamline development for the Amiga brain.

## Features

- Report issues directly from the robot
- Real-time data monitoring via WebSockets
- QR code support using `qrcode.react`
- Integrated with gRPC backend for issue reporting
- Uses Envoy proxy for communication between frontend and backend
- Built with React, TypeScript, and FastAPI (for backend services)

## Installed Dependencies

### Frontend

- `qrcode.react` — display QR codes
- `react-icons` — commonly used icons
- `grpc-web` — communicate with gRPC backend
- ESLint & Prettier extensions — code formatting and linting

### Backend / Tooling

- `protoc` — protocol buffer compiler
- `protoc-gen-ts` — TypeScript plugin for protobuf
- Envoy proxy — handles gRPC-web traffic
- Docker — containerized environment

## Installation

### **1. Clone the repository:**

```bash
git clone <your-repo-url>
cd amiga-debug-app
```

### **2. Install frontend dependencies:**

```bash
cd frontend
npm install
```

### **3. Install backend dependencies (if any):**

```bash
cd ../backend
npm install
```

### **4. Make sure `protoc` and `protoc-gen-ts` are installed and in your `PATH`.**

## Running the App

### Backend gRPC Server

```bash
cd backend
ts-node server.ts
```

This will start the gRPC server on 0.0.0.0:9090.

### Frontend (React App)

```bash
cd frontend
npm start
```

The app will be available at http://localhost:3000 in your browser.

**Note:** In the production/deployed environment, the frontend is served via the Amiga brain using FastAPI and Docker. The above commands are for local development.

## References

- [Amiga App Template](https://github.com/farm-ng/amiga-app-template)
- [Farm-ng Github](https://github.com/farm-ng)
- [`protobuf-ts` Manual](https://github.com/timostamm/protobuf-ts/blob/main/MANUAL.md)
