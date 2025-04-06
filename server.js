// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

let dummyOtp = '123456';

app.use(cors());
app.use(bodyParser.json());

app.post('/api/biometric', (req, res) => {
  const { aadhaar } = req.body;
  if (aadhaar && aadhaar.length === 12) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.post('/api/send-otp', (req, res) => {
  console.log('Sending OTP:', dummyOtp);
  res.json({ success: true });
});

app.post('/api/verify-otp', (req, res) => {
  const { otp } = req.body;
  if (otp === dummyOtp) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
