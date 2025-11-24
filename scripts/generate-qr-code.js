#!/usr/bin/env node

import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URL to encode in QR code
const URL = 'https://zentrack.nl/auth/register?utm_source=qr&utm_campaign=10sec-onboarding';

// Output directory
const outputDir = path.join(__dirname, '../public/qr-codes');

// Create directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`✅ Created directory: ${outputDir}`);
}

// QR Code options
const qrOptions = {
  errorCorrectionLevel: 'H',  // High error correction
  type: 'image/png',
  quality: 0.95,
  margin: 2,                   // Margin around QR code
  width: 400,                  // Size in pixels
  color: {
    dark: '#000000',           // Black
    light: '#FFFFFF'           // White
  }
};

// Generate QR code
QRCode.toFile(
  path.join(outputDir, 'onboarding-qr.png'),
  URL,
  qrOptions,
  (err) => {
    if (err) {
      console.error('❌ Error generating QR code:', err);
      process.exit(1);
    }

    console.log('✅ QR Code generated successfully!');
    console.log(`📁 Saved to: public/qr-codes/onboarding-qr.png`);
    console.log(`🔗 URL encoded: ${URL}`);
    console.log(`📐 Size: 400x400 pixels`);
    console.log(`🛡️  Error correction: High`);
    console.log('');
    console.log('Use in components: <Image src="/qr-codes/onboarding-qr.png" ... />');
  }
);
