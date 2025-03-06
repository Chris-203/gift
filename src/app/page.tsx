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
  const [isCorrect1, setIsCorrect1] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);
  const [isTimeReached, setIsTimeReached] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const revealDate = useMemo(() => new Date("2025-03-01T00:00:00"), []);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const remainingTime = revealDate.getTime() - now.getTime();

      if (remainingTime <= 0) {
        setIsTimeReached(true);
        setTimeLeft(0);
      } else {
        setIsTimeReached(false);
        setTimeLeft(remainingTime);
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

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

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
                  width: "55%",
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
                  width: "55%",
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
                <Typography variant="h5" sx={{ fontFamily: "'Shine in Valentine',Fresh Palm", fontWeight: "bold" }}>
                  💌 A Heartfelt Letter for You
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 2, fontFamily: "'Fresh Palm',cursive", fontSize: "1.2rem" }}>
                  I loved the letter you wrote for me so I decided to do the
                  same... but with a little spin. This is my way to show how
                  much you mean to me (y luego que no seria ovio😂) y la
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
                  height: "100%",
                  // marginTop: 2,
                }}
              >
                <Card
                  sx={{
                    padding: 4,
                    maxWidth: "100%",
                    textAlign: "center",
                    boxShadow: 3,
                    position: "relative",
                    // background: "rgba(0, 0, 0, 0.8)", // Black background with some transparency
                    borderRadius: "10px", // Optional: adds rounded corners to the card
                  }}
                >
                  <CardContent
                  sx={{
                    maxHeight: "500px", // Set a fixed height for the card content
                    overflowY: "auto",  // Allow scrolling within the content
                  }}>
                    <Typography
                      variant="h5"
                      sx={{ fontFamily: "'Shine in Valentine',Fresh Palm", fontWeight: "bold" }}
                    >
                      💌 Happy Monthsary 💌
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        marginTop: 2,
                        fontFamily: "'Fresh Palm',cursive",
                        fontSize: "1.2rem",
                      }}
                    >
                      Mi amor😊❤️!! it’s been a whole month already! Can you
                      believe it? a sido el mejor mes de mi vida. Time flies,
                      doesn’t it? It feels like just yesterday I was being so
                      awkward and didn’t know how to talk to you. When we first
                      met, Nunca imagine que te iba a conocer y que ibas a ser
                      tan importante para mi😊❤️Pero ahora, no puedo imaginar una
                      vida sin ti. Eres mi mundo🌎
                      <Typography variant="body1" sx={{ marginTop: 2,fontFamily: "'Fresh Palm',cursive",
                        fontSize: "1.2rem", }}>
                        I can’t stop thinking about you, mi amor. You mean the
                        world to me, and I love making you happy, laughing, and
                        seeing your beautiful smile😊 I love how smart, caring,
                        beautiful, lovely, cute, adorable, and honest you are😊 I
                        love how you’re not afraid to speak your mind.
                      </Typography>
                      <Typography variant="body1" sx={{ marginTop: 2,fontFamily: "'Fresh Palm',cursive",
                        fontSize: "1.2rem", }}>
                        I love you so much, mi florecita preciosa😊❤️ I love you
                        more than words can express. I can’t wait to make more
                        memories with you😊❤️
                      </Typography>
                      <Typography variant="body1" sx={{ marginTop: 2,fontFamily: "'Fresh Palm',cursive",
                        fontSize: "1.2rem", }}>
                        You are the light of my life and the joy in my heart.
                        Every moment with you is a treasure, and I cherish you
                        more than words can say.
                      </Typography>
                      <Typography variant="body1" sx={{ marginTop: 2,fontFamily: "'Fresh Palm',cursive",
                        fontSize: "1.2rem", }}>
                        Ya se que a veces no soy bueno con las palabras pero quiero que
                        sepas que te quiero mucho y que eres la mejor cosa que
                        me ha pasado en mi vida.
                      </Typography>
                      <Typography variant="body1" sx={{ marginTop: 2,fontFamily: "'Fresh Palm',cursive",
                        fontSize: "1.2rem", }}>
                        I know I haven’t asked you out in person yet, and I know
                        we haven’t had the chance, but I will when we have some
                        time alone or on our date in the city. I hope my
                        feelings for you have been clear, mi amorcita😊❤️ Te quiero
                        mucho mi amor y que no se te olvide nunca.
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ marginTop: 2, marginLeft: -6,fontFamily: "'Shine in Valentine',cursive",
                        fontSize: "1.2rem", fontWeight: "bold"}}
                    >
                      Love,
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: -0.5,fontFamily: "'Shine in Valentine',cursive",
                        fontSize: "1.2rem", fontWeight: "bold"}}>
                      Tu solecito☀️
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 2,fontFamily: "'Fresh Palm',cursive",
                        fontSize: "1.2rem", }}>
                      P.S. I hope you like this little surprise. I love you so
                      much mi florecita preciosa❤️
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
          </div>
        )
      ) : (
        <>
        <Typography variant="h6" sx={{ marginTop: 2, textAlign: "center" }}>
          ⏳ Oops! Tendras que esperar until {formattedRevealDate}😊⏳
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2, textAlign: "center" }}>
            Countdown: {formatTime(timeLeft)}
          </Typography>
        </>
        
      )}
    </div>
  );
}
