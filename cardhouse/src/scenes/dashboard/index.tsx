import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseSetup";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "@/firebaseSetup";

type Props = {};

const Dashboard = (props: Props) => {
  const [displayName, setDisplayName] = useState<string | null>(null);

  const handleClick = async(e: React.MouseEvent) => {
    e.preventDefault();  

    try {
      const docRef = await addDoc(collection(db, "deck"), {
          name: "chinese 1",
          updatedAt: new Date(),
          userId: auth.currentUser?.uid || "unknown"
      });
      console.log("Document written with ID: ", docRef.id);
  } catch (error) {
      console.error("Error adding document: ", error);
  }
  };




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

  return (
    <div className="flex justify-content items-center h-[500px] w-[500px] bg-blue-300">
      <p>Hi {displayName ? displayName : "Guest"}!</p>
      <button className="h-[50px] w-[60px] bg-red-700" onClick={handleClick}>Test db</button>
    </div>
  );
};

export default Dashboard;
