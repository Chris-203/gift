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
  // const [answer2, setAnswer2] = useState("");
  const [isCorrect1, setIsCorrect1] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);
  // const correctAnswer = "solecito"; // Change this to your desired answer

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
      }}
    >
      {!isCorrect1 ? (
        <Card
          sx={{ padding: 4, maxWidth: 400, textAlign: "center", boxShadow: 3 }}
        >
          <CardContent>
            <Typography variant="h5">🔒 Answer this question 🔒</Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              What is my nickname?
            </Typography>
            <TextField
              fullWidth
              label="Your Answer"
              variant="outlined"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              sx={{ marginTop: 2 }}
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
          sx={{ padding: 4, maxWidth: 400, textAlign: "center", boxShadow: 3 }}
        >
          <CardContent>
            <Typography variant="h5">
              🔒 Answer this second question 🔒
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              What is your nickname?
            </Typography>
            <TextField
              fullWidth
              label="Your Answer"
              variant="outlined"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              sx={{ marginTop: 2 }}
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
        >
          <Card
            sx={{
              padding: 4,
              maxWidth: 500,
              textAlign: "center",
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography variant="h4">💌 A Special Letter for You</Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                My dearest, You are the light of my life and the joy in my
                heart. Every moment with you is a treasure, and I cherish you
                more than words can say. Forever yours, ❤️
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
