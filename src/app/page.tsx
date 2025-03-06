"use client";

import { useState, useEffect, useMemo } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

export default function SecretLetter() {
  const [answer, setAnswer] = useState("");
  const [isCorrect1, setIsCorrect1] = useState(true);
  const [isCorrect2, setIsCorrect2] = useState(true);
  const [isTimeReached, setIsTimeReached] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const revealDate = useMemo(() => new Date("2025-03-02T00:00:00"), []);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      // const revealDate = new Date("2025-03-05T19:37:00");
      if (now >= revealDate) {
        setIsTimeReached(true);
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 1000); // Check every second

    return () => clearInterval(interval);
  }, [revealDate]);

  const formattedRevealDate = revealDate.toLocaleString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
    hour12: true, // Ensures AM/PM format
  });

  const handleSubmitFirst = () => {
    if (answer.toLowerCase().includes("solecito")) {
      setIsCorrect1(true);
      setAnswer(""); // Reset answer field for next question
    } else {
      setIsCorrect1(false);
    }
  };

  const handleSubmitSecond = () => {
    if (answer.toLowerCase().includes("florecita")) {
      setIsCorrect2(true);
    } else {
      setIsCorrect2(false);
    }
  };

  const handleNext = () => {
    console.log("Next button clicked");
    setIsNext(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "0 16px",
        boxSizing: "border-box",
      }}
    >
      {!isCorrect1 ? (
        <Card
          sx={{
            padding: 4,
            maxWidth: "90%",
            textAlign: "center",
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontFamily: "'Fresh Palm',cursive", fontSize: "1.5rem" }}
            >
              🔒 What is my nickname? 🔒
            </Typography>
            {/* <Typography variant="body1" sx={{ marginTop: 2,  }}>
              What is my nickname?
            </Typography> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                width: "100%",
                // marginTop: 2,
                // marginLeft: 8
              }}
            >
              <TextField
                // fullWidth
                placeholder="Your Answer"
                variant="outlined"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                sx={{
                  width: "50%",
                  marginTop: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    "& fieldset": { border: "none" }, // Remove default border
                    "& input": {
                      color: "black",
                      fontFamily: "'Fresh Palm', cursive",
                      fontSize: "1.5rem",
                    }, // White text for contrast
                    "&::placeholder": { color: "rgba(255,255,255,0.7)" }, // Adjust placeholder
                  },
                }}
              />
            </Box>

            <Button
              variant="contained"
              color="secondary"
              sx={{
                marginTop: 2,
                padding: "10px 20px",
                fontSize: "1.2rem",
                fontFamily: "'Fresh Palm', cursive",
                borderRadius: "50px",
                textTransform: "none",
                background: "rgba(255, 105, 180, 0.7)", // Soft pink glassmorphic effect
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 10px rgba(255, 105, 180, 0.3)",
                "&:hover": {
                  background: "rgba(255, 20, 147, 0.8)", // Darker pink hover
                },
              }}
              onClick={handleSubmitFirst}
            >
              🔍 Check Answer
            </Button>
          </CardContent>
        </Card>
      ) : !isCorrect2 ? (
        <Card
          sx={{
            padding: 4,
            maxWidth: "90%",
            textAlign: "center",
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontFamily: "'Fresh Palm',cursive", fontSize: "1.5rem" }}
            >
              🔒 What is your nickname? 🔒
            </Typography>
            {/* <Typography variant="body1" sx={{ marginTop: 2,  }}>
              What is my nickname?
            </Typography> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                width: "100%",
                // marginTop: 2,
                // marginLeft: 8
              }}
            >
              <TextField
                // fullWidth
                placeholder="Your Answer"
                variant="outlined"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                sx={{
                  width: "50%",
                  marginTop: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    "& fieldset": { border: "none" }, // Remove default border
                    "& input": {
                      color: "black",
                      fontFamily: "'Fresh Palm', cursive",
                      fontSize: "1.5rem",
                    }, // White text for contrast
                    "&::placeholder": { color: "rgba(255,255,255,0.7)" }, // Adjust placeholder
                  },
                }}
              />
            </Box>

            <Button
              variant="contained"
              color="secondary"
              sx={{
                marginTop: 2,
                padding: "10px 20px",
                fontSize: "1.2rem",
                fontFamily: "'Fresh Palm', cursive",
                borderRadius: "50px",
                textTransform: "none",
                background: "rgba(255, 105, 180, 0.7)", // Soft pink glassmorphic effect
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 10px rgba(255, 105, 180, 0.3)",
                "&:hover": {
                  background: "rgba(255, 20, 147, 0.8)", // Darker pink hover
                },
              }}
              onClick={handleSubmitSecond}
            >
              🔍 Check Answer
            </Button>
          </CardContent>
        </Card>
      ) : isTimeReached ? (
        !isNext ? ( // Check if Next has been clicked
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Card
              sx={{
                padding: 4,
                maxWidth: "100%",
                textAlign: "center",
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="h5">
                  💌 A Heartfelt Letter for You
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                  I loved the letter you wrote for me so I decided to do the
                  same... but with a little spin. This is my way to show how
                  much you mean to me (y luego que no seria ovio😂 ) y la
                  primera cosa que pense era en forma de esto. Hope you like it
                  mi florecita preciosa❤️
                </Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    marginTop: 2,
                    padding: "10px 20px",
                    fontSize: "1.2rem",
                    fontFamily: "'Fresh Palm', cursive",
                    borderRadius: "50px",
                    textTransform: "none",
                    background: "rgba(255, 105, 180, 0.7)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 4px 10px rgba(255, 105, 180, 0.3)",
                    "&:hover": {
                      background: "rgba(255, 20, 147, 0.8)",
                    },
                  }}
                  onClick={handleNext} // Show the letter when Next is clicked
                >
                  Next
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  width: "100%",
                  height: "100vh",
                  // marginTop: 2,
                }}
              >
              <Card
                sx={{
                  padding: 1,
                  maxWidth: "80%",
                  maxHeight: "80%",
                  textAlign: "center",
                  boxShadow: 3,
                  overflow: "auto",
                  // background: "white",
                  // backdropFilter: "blur(10px)",
                }}
              >
                <CardContent>
                  <Typography variant="h4">
                    💌 A Special Letter for You
                  </Typography>

                  <Typography variant="body1" sx={{ marginTop: 2 }}>
                    Mi amor, it’s been a whole month already! Can you believe
                    it? It’s been the best month of my life. Time flies, doesn’t
                    it? It feels like just yesterday I was being so awkward and
                    didn’t know how to talk to you. When we first met, I never
                    imagined you’d become so important to me. But now, I can’t
                    imagine a life without you. You mean the world to me. I
                    can’t stop thinking about you, mi amor. You mean the world
                    to me, and I love making you happy, laughing, and seeing
                    your beautiful smile. I love how smart, caring, beautiful,
                    lovely, cute, adorable, and honest you are. I love how
                    you’re not afraid to speak your mind. I love you so much, mi
                    florecita preciosa. I love you more than words can express.
                    I can’t wait for many more months to come with you. You are
                    the light of my life and the joy in my heart. Every moment
                    with you is a treasure, and I cherish you more than words
                    can say. I know I haven’t asked you out in person yet, and I
                    know we haven’t had the chance, but I will when we have some
                    time alone or on our date in the city. I hope my feelings
                    for you have been clear, my love. Te quiero mucho mi amor y
                    que no se te olvide nunca. 
                  </Typography>
                  <Typography variant="body1" sx={{ marginTop: 2 }}>
                  Love,
                  </Typography>
                  <Typography variant="body1" sx={{ marginTop: -0.5 }}>
                  Tu solecito
                  </Typography>
                  <Typography variant="body1" sx={{ marginTop: 2 }}>
                    P.S. I hope you like this little surprise. I love you so
                    much, mi florecita preciosa❤️
                  </Typography>
                </CardContent>
              </Card>
              </Box>
            </motion.div>
          </div>
        )
      ) : (
        <Typography variant="h6" sx={{ marginTop: 2, textAlign: "center" }}>
          ⏳ Oops! Tendras que esperar until {formattedRevealDate}😊⏳
        </Typography>
      )}
    </div>
  );
}
