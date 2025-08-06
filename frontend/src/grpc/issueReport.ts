import { issueReporterClient } from "./IssueReportServiceClientPb";
import { issueRequest } from "./issueReport_pb.d";

const client = new issueReporterClient("http://localhost:8080", null, null);

export function issueReport({
  userEmail,
  userDescription,
  category,
  subcategory,
  urgent,
  timestamp,
  location,
  motorData,
}: {
  userEmail: string;
  userDescription: string;
  category: string;
  subcategory: string;
  urgent: boolean;
  timestamp: string;
  location: string;
  motorData: string;
}) {
  const request = new issueRequest();

  request.setUseremail(userEmail);
  request.setUserdescription(userDescription);
  request.setCategory(category);
  request.setSubcategory(subcategory);
  request.setUrgent(urgent);
  request.setTimestamp(timestamp);
  request.setLocation(location);
  request.setMotordata(motorData);

  return new Promise((resolve, reject) => {
    client.reportIssue(request, {}, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response?.getMessage());
      }
    });
  });
}
