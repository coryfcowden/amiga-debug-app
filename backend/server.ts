import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

const PROTO_PATH = path.join(__dirname, "../proto/issueReport.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;
const issuePackage = protoDescriptor.issue;

const issueReporterImpl = {
  ReportIssue: (
    call: grpc.ServerUnaryCall<any, any>,
    callback: grpc.sendUnaryData<any>,
  ) => {
    console.log("Received ReportIssue request:", call.request);

    callback(null, {
      success: true,
      message: `Issue reported by ${call.request.userEmail}`,
    });
  },
};

function main() {
  const server = new grpc.Server();

  server.addService(issuePackage.issueReporter.service, issueReporterImpl);

  const addr = "0.0.0.0:9090";
  server.bindAsync(
    addr,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error("Server binding failed:", err);
        return;
      }
      console.log(`gRPC server running at ${addr}`);
    },
  );
}

main();
