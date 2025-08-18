// "global" variables = React Context
import React, { createContext, useContext, useState } from "react";

type urgent = 1 | 2 | null;

export interface IssueReport {
  userEmail: string;
  userDescription: string;
  category: string | null;
  subCategory: string | null;
  urgent: urgent;
}

interface IssueReportContextType {
  issue: IssueReport;
  setIssue: React.Dispatch<React.SetStateAction<IssueReport>>;
  resetIssue: () => void;
}

const IssueReportContext = createContext<IssueReportContextType | undefined>(
  undefined,
);

export const IssueReportProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [issue, setIssue] = useState<IssueReport>({
    userEmail: "",
    userDescription: "",
    category: null,
    subCategory: null,
    urgent: null,
  });

  const resetIssue = () =>
    setIssue({
      userEmail: "",
      userDescription: "",
      category: null,
      subCategory: null,
      urgent: null,
    });

  return (
    <IssueReportContext.Provider value={{ issue, setIssue, resetIssue }}>
      {children}
    </IssueReportContext.Provider>
  );
};

export const useIssueReport = () => {
  const context = useContext(IssueReportContext);
  if (!context) {
    throw new Error(
      "useIssueReport must be used within an IssueReportProvider",
    );
  }
  return context;
};
