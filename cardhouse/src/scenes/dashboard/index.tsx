import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseSetup";

type Props = {};

const Dashboard = (props: Props) => {
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const displayName = user.displayName || "User"; // Fallback to "User" if displayName is null
        console.log("uid", uid);
        console.log("displayName", displayName);
        setDisplayName(displayName);
      } else {
        console.log("User is logged out");
        setDisplayName(null); // Clear displayName if logged out
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  return <p>Hi {displayName ? displayName : "Guest"}!</p>;
};

export default Dashboard;
