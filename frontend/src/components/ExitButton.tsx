import React, { useState, useEffect } from "react";

const ExitButton: React.FC = () => {
  const [appData, setAppData] = useState<{ [key: string]: any }>({});

  const handleClick = () => {
    const baseEndpoint = `http://${window.location.hostname}:8042/systemctl_action/`;

    const requestBody = {
      account_name: appData.account,
      service_id: appData.name,
      action: "stop",
      app_route: appData.app_route,
    };

    // request server start the service
    fetch(baseEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Service action response:", result);
        // redirect
        window.location.href = `${window.location.protocol}//${window.location.hostname}/apps/launcher`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const baseEndpoint = `http://${window.location.hostname}:8042/custom_app_info/${window.location.port}`;

    fetch(baseEndpoint)
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setAppData(result.service);
        }
      });
  }, []);

  return (
    <button
      style={{
        position: "absolute",
        bottom: 5,
        left: 10,
        zIndex: 1000,
      }}
      onClick={handleClick}
    >
      EXIT
    </button>
  );
};

export default ExitButton;
