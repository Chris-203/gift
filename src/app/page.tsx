"use client";

import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

export default function SecretLetter() {
  const [answer, setAnswer] = useState("");
  const [isCorrect1, setIsCorrect1] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);

  // Check answer for the first question and set isCorrect1
  const handleSubmitFirst = () => {
    const words = answer.toLowerCase().split(/\s+/);
    if (words.includes("solecito")) {
      setIsCorrect1(true);
    } else {
      setIsCorrect1(false);
    }
  };

  // Check answer for the second question and set isCorrect2
  const handleSubmitSecond = () => {
    const words = answer.toLowerCase().split(/\s+/);
    if (words.includes("florecita")) {
      setIsCorrect2(true);
    } else {
      setIsCorrect2(false);
    }
  };

  useEffect(() => {
    if (isCorrect1 && !isCorrect2) {
      setAnswer("");
    }
  }, [isCorrect1, isCorrect2]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "0 16px", // Added padding for mobile screens
        boxSizing: "border-box", // To make sure padding doesn't cause overflow
      }}
    >
      {!isCorrect1 ? (
        <Card
          sx={{
            padding: 4,
            maxWidth: "100%", // Make the card width responsive
            width: "100%",
            textAlign: "center",
            boxShadow: 3,
            marginTop: 2,
            "@media (max-width: 600px)": {
              maxWidth: "90%", // For mobile screens, reduce the card width
            },
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
              🔒 Answer this question 🔒
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: 2, fontSize: { xs: "1rem", sm: "1.2rem" } }}
            >
              What is my nickname?
            </Typography>
            <TextField
              fullWidth
              label="Your Answer"
              variant="outlined"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              sx={{
                marginTop: 2,
                "& .MuiInputLabel-root": { fontSize: { xs: "0.9rem", sm: "1rem" } },
                "& .MuiInputBase-root": { fontSize: { xs: "1rem", sm: "1.2rem" } },
              }}
            />
            <Button
              variant="text"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={handleSubmitFirst}
            >
              Analyze
            </Button>
          </CardContent>
        </Card>
      ) : !isCorrect2 ? (
        <Card
          sx={{
            padding: 4,
            maxWidth: "100%", 
            width: "100%",
            textAlign: "center",
            boxShadow: 3,
            marginTop: 2,
            "@media (max-width: 600px)": {
              maxWidth: "90%",
            },
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
              🔒 Answer this second question 🔒
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: 2, fontSize: { xs: "1rem", sm: "1.2rem" } }}
            >
              What is your nickname?
            </Typography>
            <TextField
              fullWidth
              label="Your Answer"
              variant="outlined"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              sx={{
                marginTop: 2,
                "& .MuiInputLabel-root": { fontSize: { xs: "0.9rem", sm: "1rem" } },
                "& .MuiInputBase-root": { fontSize: { xs: "1rem", sm: "1.2rem" } },
              }}
            />
            <Button
              variant="text"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={handleSubmitSecond}
            >
              Analyze
            </Button>
          </CardContent>
        </Card>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",  // Ensure it's a flex container
            justifyContent: "center", // Center content horizontally
            alignItems: "center", // Center content vertically
            width: "100%", // Make sure it takes full width
            marginTop: 16, // Added margin to separate from other elements
          }}
        >
          <Card
            sx={{
              padding: 4,
              maxWidth: "100%",
              width: "100%",
              textAlign: "center",
              boxShadow: 3,
              "@media (max-width: 600px)": {
                maxWidth: "90%",
              },
            }}
          >
            <CardContent>
              <Typography variant="h4" sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem" } }}>
                💌 A Special Letter for You
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: 2, fontSize: { xs: "1rem", sm: "1.2rem" } }}
              >
                
                My dearest, You are the light of my life and the joy in my
                heart. Every moment with you is a treasure, and I cherish you
                more than words can say. Forever yours, ❤️sssssssssssssssssssssssssssss
                sdddddddddddddddd
                sddddddddddddddddddddddddddd
                dssssssssssssssssssssssss
                dssssssssssssssssssssssssdssssssssssssssssss
                dssssssssssssssssssssssssdsssssssss
                asddddddddddddddd
                dasssssssssssssssssssssssss
                asdddddddddddddddd
                dasssssssssssssssssssssssssdsa
                dasasasasasasasasasasasasasas
                dasssssssssssssssssssssssssdsaa
                dasasasasasasasasasasasasasas
                asddddddddddddddd
                dsadassssss
                dasssssssssssssssssssssssss
                dasssssssssssssssssssssssss
                dasssssssssssssssssssssssss
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
